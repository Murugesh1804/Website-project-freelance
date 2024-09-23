import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from '../../Api/Api'; // Your API handler

const AdminAddQuestion = () => {
  const [courses, setCourses] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [editingQuestionId, setEditingQuestionId] = useState(null);

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
        setSelectedCourse(data[0].courseId); // Set initial course selection
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        courseId: selectedCourse,
        questionText,
        questionType: 'yes-no',
        options: [
          { optionText: 'Yes' },
          { optionText: 'No' },
        ],
      };

      if (editingQuestionId) {
        await Api.put(`/api/edit-question/${editingQuestionId}`, payload);
        alert('Question updated successfully!');
      } else {
        await Api.post('/api/add-question', payload);
        alert('Question added successfully!');
      }

      // Clear form and refresh questions
      setQuestionText('');
      setEditingQuestionId(null);
      fetchQuestionsByCourse(selectedCourse); // Refresh questions for the current course
    } catch (error) {
      console.error('Error adding/updating question', error);
      alert('Failed to process request. Please try again.');
    }
  };

  const handleEdit = (question) => {
    setSelectedCourse(question.courseId);
    setQuestionText(question.questionText);
    setEditingQuestionId(question._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      try {
        await Api.delete(`/api/delete-question/${id}`);
        alert('Question deleted successfully!');
        fetchQuestionsByCourse(selectedCourse); // Refresh questions for the current course
      } catch (error) {
        console.error('Error deleting question', error);
        alert('Failed to delete question. Please try again.');
      }
    }
  };

  // Logout function
  const handleLogout = () => {
    // Clear local storage or authentication state
    localStorage.removeItem('accessToken'); // Adjust the key as per your storage
    localStorage.removeItem('user'); // Adjust as necessary
    alert('You have been logged out.');
    // Optionally, redirect to login or homepage
    window.location.href = '/login'; // Change the path as needed
  };

  return (
    <Container>
      <Title>Add/Edit Yes/No Question</Title>
      <Button onClick={handleLogout}>Logout</Button> {/* Logout button */}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Course</Label>
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

        <FormGroup>
          <Label>Question Text</Label>
          <TextArea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">{editingQuestionId ? 'Update Question' : 'Submit Question'}</SubmitButton>
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

// Styled components remain unchanged
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 15px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
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

const QuestionsList = styled.div`
  margin-top: 20px;
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

export default AdminAddQuestion;
