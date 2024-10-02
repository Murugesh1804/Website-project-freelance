import React, { useState } from 'react';

import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md'; // Import the back icon
import Api from '../Api/Api';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post('/Auth/reset-password', { email });
     // Handle the response based on success
     if (response.status === 200) {
        alert(response.data.message); // Show success message
        navigate('/ResetPassword'); // Navigate to login page
      }
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending password reset email.');
    }
  };

  const handleBack = () => {
    // Navigate to the previous page or a specific route
    window.history.back();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BackButton onClick={handleBack}>
          <MdArrowBack size={24} />
        </BackButton>
        <Title>Forgot Password</Title>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Send Reset Code</Button>
        {message && <Message>{message}</Message>}
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  position: relative; /* Added this */
`;

const BackButton = styled.button`
  position: absolute;

  top: 15px;
  left: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  margin-top: 20px;
  color: #d9534f;
`;

export default ForgotPassword;
