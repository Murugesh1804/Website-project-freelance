import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const OTPVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [stage, setStage] = useState('request'); // 'request' or 'verify'

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/generate-otp', { email });
      setMessage(response.data.message);
      setStage('verify');
    } catch (error) {
      setMessage('Error requesting OTP.');
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/verify-otp', { email, otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error verifying OTP.');
    }
  };

  return (
    <Container>
      <Form onSubmit={stage === 'request' ? handleRequestOTP : handleVerifyOTP}>
        <Title>{stage === 'request' ? 'Request OTP' : 'Verify OTP'}</Title>
        {stage === 'request' && (
          <>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Request OTP</Button>
          </>
        )}
        {stage === 'verify' && (
          <>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <Button type="submit">Verify OTP</Button>
          </>
        )}
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

export default OTPVerification;
