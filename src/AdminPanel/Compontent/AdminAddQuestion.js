import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Flower, Send, Loader, Plus, Minus, Edit2, Trash2, LogOut } from 'lucide-react';
import Api from '../../Api/Api'; // Your API handler
import { v4 as uuid } from 'uuid';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f0f4f8;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #34495e;
  font-size: 2rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FlowerIcon = styled(Flower)`
  animation: ${float} 3s ease-in-out infinite;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.1rem;
  color: #2c3e50;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const QuestionBlock = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OptionInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const AddButton = styled(Button)`
  background-color: #3498db;
  color: white;

  &:hover {
    background-color: #2980b9;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #e74c3c;
  color: white;

  &:hover {
    background-color: #c0392b;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #2ecc71;
  color: white;

  &:hover {
    background-color: #27ae60;
  }
`;

const LogoutButton = styled(Button)`
  background-color: #e74c3c;
  color: white;

  &:hover {
    background-color: #c0392b;
  }
`;

const QuestionsList = styled.div`
  margin-top: 2rem;
`;

const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const QuestionText = styled.span`
  flex: 1;
  color: #34495e;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EditButton = styled(Button)`
  background-color: #f39c12;
  color: white;

  &:hover {
    background-color: #d35400;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #e74c3c;
  color: white;

  &:hover {
    background-color: #c0392b;
  }
`;

const AdminAddQuestion = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formQuestions, setFormQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
      const { data } = await Api.get('/get-courses');
      setCourses(data);
      if (data.length > 0) {
        setSelectedCourse(data[0].courseId);
      }
    } catch (error) {
      console.error('Failed to fetch courses', error);
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
        await Api.put(`/api/edit-question/${editingQuestionId}`, payload.questions[0]);
        alert('Question updated successfully!');
      } else {
        await Api.post('/api/add-form', payload);
        alert('Form added successfully!');
      }

      setFormQuestions([]);
      setEditingQuestionId(null);
      setIsEditing(false);
      fetchQuestionsByCourse(selectedCourse);
    } catch (error) {
      console.error('Error adding/updating form:', error.message);
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
    setIsEditing(true);
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

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    alert('You have been logged out.');
    window.location.href = '/login';
  };

  return (
    <Container>
      <Header>
        <Title>
          <FlowerIcon size={32} color="#3498db" />
          Mindfulness Question Management
        </Title>
        <LogoutButton onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </LogoutButton>
      </Header>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Select Course</Label>
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
        </FormGroup>

        {formQuestions.map((question, index) => (
          <QuestionBlock key={question.id}>
            <FormGroup>
              <Label>Question {index + 1}</Label>
              <TextArea
                placeholder="Enter your question here"
                value={question.questionText}
                onChange={(e) => updateQuestionText(index, e.target.value)}
                required
              />
            </FormGroup>
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
                <AddButton type="button" onClick={() => addOption(index)}>
                  <Plus size={18} />
                  Add Option
                </AddButton>
              </OptionsContainer>
            )}

            <RemoveButton type="button" onClick={() => removeQuestion(index)}>
              <Minus size={18} />
              Remove Question
            </RemoveButton>
          </QuestionBlock>
        ))}

        <AddButton type="button" onClick={addQuestion}>
          <Plus size={18} />
          Add Question
        </AddButton>
        <SubmitButton type="submit">
          <Send size={18} />
          {isEditing ? 'Update Question' : 'Submit Form'}
        </SubmitButton>
      </Form>

      <QuestionsList>
        <Title>Existing Questions ({questions.length})</Title>
        {questions.map((question) => (
          <QuestionItem key={question._id}>
            <QuestionText>{question.questionText}</QuestionText>
            <ActionButtons>
              <EditButton onClick={() => handleEdit(question)}>
                <Edit2 size={18} />
                Edit
              </EditButton>
              <DeleteButton onClick={() => handleDelete(question._id)}>
                <Trash2 size={18} />
                Delete
              </DeleteButton>
            </ActionButtons>
          </QuestionItem>
        ))}
      </QuestionsList>
    </Container>
  );
};

export default AdminAddQuestion;