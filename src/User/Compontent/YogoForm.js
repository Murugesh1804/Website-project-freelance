import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Api from '../../Api/Api'; // Adjust path as necessary

const YogoForm = () => {
  const { courseId } = useParams(); // Get courseId from URL
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await Api.get(`/api/courses/${courseId}/questions`);
        console.log('Full API response:', response);

        if (response && response.data && Array.isArray(response.data)) {
          const formattedQuestions = response.data.map(question => ({
            ...question,
            options: question.questionType === 'yes-no' 
              ? ['Yes', 'No'] // Permanent Yes/No options
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
    fetchQuestions();
  }, [courseId]);

  const handleInputChange = (questionId, value) => {
    setFormData({
      ...formData,
      [questionId]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
    // Prepare the data for submission
    const submissionData = Object.entries(formData).map(([questionId, value]) => ({
      questionId,
      answer: value,
    }));

    // Send submissionData to the backend to store responses
    Api.post(`/api/courses/${courseId}/submit-responses`, submissionData)
      .then(response => {
        alert('Responses submitted successfully!');
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

// Styled-components remain unchanged
const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default YogoForm;
