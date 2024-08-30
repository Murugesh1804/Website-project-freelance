import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

import {  AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username&&password&&email){
      navigate('/login');
    }
    else{
      alert("Enter All Field");
    }
   
  };

  return (
    <Overlay>
      <PopupContainer>
      <BackButton >
          <Link to="/login">  <AiOutlineArrowLeft /> </Link>
        </BackButton>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Label>Username</Label>
            <InputField
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <InputField
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Password</Label>
            <InputField
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <ForgotPassword>
            <a href="#forgot-password">Forgot Password?</a>
          </ForgotPassword>
          <SignupButton type="submit">Sign Up</SignupButton>
        </form>

        <Divider><span>Or sign up with</span></Divider>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SocialButton bgColor="#db4437">
            <FaGoogle />
            Google
          </SocialButton>
          <SocialButton bgColor="#3b5998">
            <FaFacebook />
            Facebook
          </SocialButton>
        </div>

        <LoginPrompt>
          Already have an account? <Link to="/login">Login</Link>
        </LoginPrompt>
      </PopupContainer>
    </Overlay>
  );
};



const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;

const PopupContainer = styled.div`
  position: relative; /* Position relative for the close button */
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 5px 0 20px; /* Updated to add space between input and label */
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: #f7f7f7;

  &:focus {
    outline: none;
    border-color: #ffcc00;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px; /* Space between label and input */
  font-weight: 500;
  color: #333;
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background-color: #ffa500;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #ff8c00;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 10px;

  a {
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialButton = styled.button`
  width: 48%;
  padding: 10px;
  margin-top: 10px;
  background-color: ${(props) => props.bgColor || '#ddd'};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }

  span {
    font-size: 14px;
    color: #666;
  }
`;

const LoginPrompt = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #555;

  a {
    color: blue;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default SignUp;
