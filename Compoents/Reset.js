import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md'; // Import the back icon
import Api from '../Api/Api'; // Ensure Api is correctly configured
import { useNavigate } from 'react-router-dom';

const Reset = () => {
 
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await Api.patch('/Auth/resetpass-otp', { token, pwd: newPassword });
      if(response.statu === 200) {
        alert("Password Reset Successfully");
        navigate('/login'); // Navigate to user panel after successful login
      }
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error resetting password.');
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
        <Title>Reset Password</Title>
        <Input
          type="number"
          placeholder="Enter reset token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Reset Password</Button>
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
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
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

export default Reset;
