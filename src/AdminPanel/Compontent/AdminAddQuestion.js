import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from '../../Api/Api'; // Your API handler
import { v4 as uuid } from 'uuid';

const AdminAddQuestion = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formQuestions, setFormQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Track editing mode

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      fetchQuestionsByCourse(selectedCourse);
    }
  }, [selectedCourse]);

  const fetchCourses = async () => {
    try {
      const { data } = await Api.get('/course/get-courses');
      
      // Log data to verify the response structure
      console.log("Courses fetched:", data);

      // Handle different possible response formats
      if (Array.isArray(data)) {
        // If data is already an array
        setCourses(data);
      } else if (data.courses && Array.isArray(data.courses)) {
        // If data is wrapped inside a "courses" property
        setCourses(data.courses);
      } else {
        console.error("Unexpected response format, expected an array");
        setCourses([]);
      }

      // Automatically select the first course if any
      if (data.length > 0) {
        setSelectedCourse(data[0].courseId);
      } else if (data.courses && data.courses.length > 0) {
        setSelectedCourse(data.courses[0].courseId);
      }
      
    } catch (error) {
      console.error('Failed to fetch courses', error);
      setCourses([]); // In case of an error, set courses to an empty array
    }
  };
  const fetchQuestionsByCourse = async (courseId) => {
    try {
      const { data } = await Api.get(`/api/questions/course/${courseId}`);
      setQuestions(data);
    } catch (error) {
      console.error('Failed to fetch questions', error);
    }
  };

  const addQuestion = () => {
    setFormQuestions([
      ...formQuestions,
      {
        id: uuid(),
        questionText: '',
        answerType: 'yes-no',
        options: [
          { optionText: 'Yes' },
          { optionText: 'No' },
        ],
      },
    ]);
  };

  const updateQuestionText = (index, text) => {
    const updatedQuestions = [...formQuestions];
    updatedQuestions[index].questionText = text;
    setFormQuestions(updatedQuestions);
  };

  const updateAnswerType = (index, type) => {
    const updatedQuestions = [...formQuestions];
    updatedQuestions[index].answerType = type;

    if (type === 'yes-no') {
      updatedQuestions[index].options = [
        { optionText: 'Yes' },
        { optionText: 'No' },
      ];
    } else if (type === 'multiple-choice') {
      updatedQuestions[index].options = [
        { optionText: '' },
        { optionText: '' },
      ];
    } else {
      updatedQuestions[index].options = [];
    }

    setFormQuestions(updatedQuestions);
  };

  const updateOptionText = (questionIndex, optionIndex, text) => {
    const updatedQuestions = [...formQuestions];
    updatedQuestions[questionIndex].options[optionIndex].optionText = text;
    setFormQuestions(updatedQuestions);
  };

  const addOption = (questionIndex) => {
    const updatedQuestions = [...formQuestions];
    updatedQuestions[questionIndex].options.push({ optionText: '' });
    setFormQuestions(updatedQuestions);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = formQuestions.filter((_, i) => i !== index);
    setFormQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        courseId: selectedCourse,
        questions: formQuestions,
      };

      if (isEditing && editingQuestionId) {
        // If editing, update the existing question
        await Api.put(`/api/edit-question/${editingQuestionId}`, payload.questions[0]);
        alert('Question updated successfully!');
      } else {
        // Add new question
        await Api.post('/api/add-form', payload);
        alert('Form added successfully!');
      }

      // Clear form and refresh questions
      setFormQuestions([]);
      setEditingQuestionId(null);
      setIsEditing(false);
      fetchQuestionsByCourse(selectedCourse);
    } catch (error) {
      console.error('Error adding/updating form:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
      alert('Failed to process request. Please check the server connection.');
    }
  };

  const handleEdit = (question) => {
    setFormQuestions([{
      id: question._id,
      questionText: question.questionText,
      answerType: question.answerType,
      options: question.options,
    }]);
    setEditingQuestionId(question._id);
    setIsEditing(true); // Set editing mode to true
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      try {
        await Api.delete(`/api/delete-question/${id}`);
        alert('Question deleted successfully!');
        fetchQuestionsByCourse(selectedCourse);
      } catch (error) {
        console.error('Error deleting question:', error);
        alert('Failed to delete question. Please try again.');
      }
    }
  };

  return (
    <Container>
      <Title>Create Question</Title>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Course</Label>
          {Array.isArray(courses) && courses.length > 0 ? (
            <Select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              required
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course._id} value={course.courseId}>
                  {course.courseName}
                </option>
              ))}
            </Select>
          ) : (
            <p>No courses available</p>
          )}
        </FormGroup>

        <FormQuestionsContainer>
          {formQuestions.map((question, index) => (
            <QuestionBlock key={question.id}>
              <Label>Question {index + 1}</Label>
              <TextArea
                placeholder="Enter your question here"
                value={question.questionText}
                onChange={(e) => updateQuestionText(index, e.target.value)}
                required
              />
              <FormGroup>
                <Label>Answer Type</Label>
                <Select
                  value={question.answerType}
                  onChange={(e) => updateAnswerType(index, e.target.value)}
                >
                  <option value="yes-no">Yes/No</option>
                  <option value="short-text">Short Text</option>
                  <option value="multiple-choice">Multiple Choice</option>
                </Select>
              </FormGroup>

              {question.answerType === 'multiple-choice' && (
                <OptionsContainer>
                  <Label>Options</Label>
                  {question.options.map((option, optIndex) => (
                    <OptionInput
                      key={optIndex}
                      type="text"
                      placeholder={`Option ${optIndex + 1}`}
                      value={option.optionText}
                      onChange={(e) =>
                        updateOptionText(index, optIndex, e.target.value)
                      }
                      required
                    />
                  ))}
                  <AddOptionButton
                    type="button"
                    onClick={() => addOption(index)}
                  >
                    + Add Option
                  </AddOptionButton>
                </OptionsContainer>
              )}

              {question.answerType === 'short-text' && (
                <ShortTextInput type="text" disabled placeholder="Short Answer" />
              )}

              <RemoveButton onClick={() => removeQuestion(index)}>
                Remove Question
              </RemoveButton>
            </QuestionBlock>
          ))}
        </FormQuestionsContainer>

        <AddQuestionButton type="button" onClick={addQuestion}>
          + Add Question
        </AddQuestionButton>
        <SubmitButton type="submit">{isEditing ? 'Update Question' : 'Submit Form'}</SubmitButton>
      </Form>

      <QuestionsList>
        <Title>Questions Added: {questions.length}</Title>
        {questions.map((question) => (
          <QuestionItem key={question._id}>
            <QuestionText>{question.questionText}</QuestionText>
            <ActionButtons>
              <EditButton onClick={() => handleEdit(question)}>Edit</EditButton>
              <DeleteButton onClick={() => handleDelete(question._id)}>Delete</DeleteButton>
            </ActionButtons>
          </QuestionItem>
        ))}
      </QuestionsList>
    </Container>
  );
};
// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: scroll;
  max-height: 600px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormQuestionsContainer = styled.div`
  margin-top: 20px;
`;

const QuestionBlock = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px 0;
  border-radius: 4px;
  background-color: #fff;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const OptionsContainer = styled.div`
  margin-top: 10px;
`;

const OptionInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ShortTextInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddOptionButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddQuestionButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const RemoveButton = styled.button`
  margin-top: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const Button = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #c82333;
  }
`;

// Missing Styled Components for Question List Section
const QuestionsList = styled.div`
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 4px;
`;

const QuestionText = styled.span`
  flex: 1;
  color: #333;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export default AdminAddQuestion;
