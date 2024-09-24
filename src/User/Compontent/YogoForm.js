import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import Api from '../../Api/Api'; // Adjust path as necessary

const YogoForm = () => {
  const { courseId } = useParams(); // Get courseId from URL
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({});


  const navigate = useNavigate();
  useEffect(() => {
    const checkSubmissionStatus = async () => {
      try {
        const studentId = JSON.parse(localStorage.getItem('user'))?.studentId; // Get studentId from local storage
  
        // Change to a POST request to pass studentId in the body
        const submissionStatusResponse = await Api.post(`/api/courses/${courseId}/has-submitted`, { studentId });
  
        if (submissionStatusResponse.data.hasSubmitted) {
          setHasSubmitted(true); // User has already submitted
        } else {
          fetchQuestions(); // If not submitted, fetch questions
        }
      } catch (error) {
        console.error('Error checking submission status:', error);
      } finally {
        setLoading(false); // Stop loading after check
      }
    };
  
    const fetchQuestions = async () => {
      try {
        const response = await Api.get(`/api/courses/${courseId}/questions`);
        if (response && response.data && Array.isArray(response.data)) {
          const formattedQuestions = response.data.map((question) => ({
            ...question,
            options: question.questionType === 'yes-no'
              ? ['Yes', 'No']
              : question.options.map(option => option.value)
          }));
          setQuestions(formattedQuestions);
        } else {
          console.error('API returned unexpected data format');
          setQuestions([]);
        }
      } catch (error) {
        console.error('Failed to fetch questions', error);
        setQuestions([]);
      }
    };
  
    checkSubmissionStatus();
  }, [courseId]);
  
  const handleInputChange = (questionId, value) => {
    setFormData({
      ...formData,
      [questionId]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    const studentId = JSON.parse(localStorage.getItem('user'))?.studentId; // Get studentId from local storage
    const token = localStorage.getItem('token'); // Retrieve the authentication token
  console.log("Student id:",studentId);
    const submissionData = {
      courseId,
      studentId, // Include studentId in the request body
      responses: questions.map((question) => ({
        questionId: question._id,
        answer: formData[question._id],
        questionText: question.questionText,
        options: question.options,
      })),
    };
  
    console.log(submissionData);
    Api.post(`/api/courses/${courseId}/submit-responses`, submissionData, {
      headers: {
      Authorization: `Bearer ${token}`
      },
    })
      .then(response => {
        alert('Responses submitted successfully!');
        navigate('/UserPanel')
      })
      .catch(error => {
        console.error('Error submitting responses:', error);
      });
  };
  

  return (
    <FormWrapper>
      <h2>Questions for Course {courseId}</h2>
      <form onSubmit={handleSubmit}>
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionWrapper key={question._id}>
              <Label>{question.questionText}</Label>
              {question.questionType === 'text' && (
                <Input
                  type="text"
                  onChange={(e) => handleInputChange(question._id, e.target.value)}
                />
              )}
              {question.questionType === 'yes-no' && question.options && question.options.map((option) => (
                <div key={option}>
                  <Input
                    type="radio"
                    name={question._id}
                    value={option}
                    onChange={() => handleInputChange(question._id, option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
              {question.questionType === 'checkbox' && question.options && question.options.map((option) => (
                <div key={option}>
                  <Input
                    type="checkbox"
                    value={option}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const currentValues = formData[question._id] || [];
                      const newValues = checked
                        ? [...currentValues, option]
                        : currentValues.filter(value => value !== option);
                      handleInputChange(question._id, newValues);
                    }}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </QuestionWrapper>
          ))
        ) : (
          <p>No questions available for this course.</p>
        )}
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormWrapper>
  );
};

// Styled-components
const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

export default YogoForm;