import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Import Axios
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [pincode, setPincode] = useState('');
  const [whatsappNo, setWhatsappNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (username && password && email) {
      try {
        // Make a POST request to your backend API
        const response = await axios.post('http://localhost:3500/Auth/register', {
          name: username,
          email,
          password,
          age,
          gender,
          pincode,
          whatappno: whatsappNo,
          mobileno: mobileNo,
        });

        // Handle the response based on success
        if (response.status === 200) {
          alert(response.data.message); // Show success message
          navigate('/login'); // Navigate to login page
        }
      } catch (error) {
        // Handle errors from the backend
        console.error('Error registering user:', error);
        alert(error.response?.data?.message || 'Registration failed. Please try again.');
      }
    } else {
      // Show an alert if not all fields are filled
      alert('Enter All Fields');
    }
  };

  return (
    <Overlay>
      <PopupContainer>
        <BackButton>
          <Link to="/login">
            <AiOutlineArrowLeft />
          </Link>
        </BackButton>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <FormGrid>
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
          <div>
            <Label>Age</Label>
            <InputField
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div>
  <Label>Gender</Label>
  <SelectField
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    required
  >
    <option value="" disabled>Select your gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </SelectField>
</div>
<div>
  <Label>Pincode</Label>
  <InputField
    type="number" // Use text for pattern validation
    placeholder="Enter your pincode"
    value={pincode}
    onChange={(e) => {
      // Enforce maximum of 6 digits
      const value = e.target.value.slice(0, 6);
      setPincode(value);
    }}
    pattern="\d{6}" // Ensure exactly 6 digits
    maxLength="6"
    required
  />
</div>
<div>
  <Label>WhatsApp Number</Label>
  <InputField
    type="number" // Use text for pattern validation
    placeholder="Enter your WhatsApp number"
    value={whatsappNo}
    onChange={(e) => {
      // Enforce maximum of 10 digits
      const value = e.target.value.slice(0, 10);
      setWhatsappNo(value);
    }}
    pattern="\d{10}" // Ensure exactly 10 digits
    maxLength="10"
    required
  />
</div>
<div>
  <Label>Mobile Number</Label>
  <InputField
    type="number" // Use text for pattern validation
    placeholder="Enter your mobile number"
    value={mobileNo}
    onChange={(e) => {
      // Enforce maximum of 10 digits
      const value = e.target.value.slice(0, 10);
      setMobileNo(value);
    }}
    pattern="\d{10}" // Ensure exactly 10 digits
    maxLength="10"
    required
  />
</div>

          </FormGrid>
          
          <SignupButton type="submit">Sign Up</SignupButton>
        </form>

        <Divider>
          <span>Or sign up with</span>
        </Divider>

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
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0 20px; // Add horizontal padding for small screens
`;

const BackButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background: none;
  border: none;
  font-size: 24px; // Increase font size for better accessibility
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;

const PopupContainer = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px; // Adjust padding for smaller screens
  border-radius: 12px;
  width: 100%;
  max-width: 90vw; // Use percentage for better responsiveness
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 769px) {
    padding: 40px;
    max-width: 800px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px; // Increase gap for better spacing on smaller screens
  margin-bottom: 20px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px; // Adjust gap for larger screens
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
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

const SelectField = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: #f7f7f7;
  appearance: none; // Remove default dropdown arrow for custom styling

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
  margin-bottom: 5px;
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
    padding: 10px; // Adjust padding for smaller screens
  }
`;


const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack buttons vertically on small screens
  gap: 10px; // Add gap between social buttons

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 12px;
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
    padding: 10px; // Adjust padding for smaller screens
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
