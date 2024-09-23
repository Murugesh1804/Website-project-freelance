import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import user from '../../Assest/user.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeSection, setActiveSection] = useState(''); // State to track which section is active
  const [userData, setUserData] = useState(null); // State to store user data
  const navigate = useNavigate();

  useEffect(() => {
    const localstoragis = localStorage.getItem('user');
    if(!localstoragis){
      navigate('/login'); // Navigate to user panel after successful login
    }
    // Fetch user data from localStorage on component mount
    const fetchedUserData = JSON.parse(localStorage.getItem('user'));
    setUserData(fetchedUserData);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'enrolled':
        return <p>You are currently enrolled in several courses. Keep up the great work!</p>;
      case 'certification':
        return <p>Congratulations on completing your certifications! View your certificates here.</p>;
      case 'completed':
        return <p>You've completed several courses. Check out your achievements!</p>;
      default:
        return <p>Select an option to view more details.</p>;
    }
  };

  return (
    <Container id='home'>
      <WelcomeSection>
        <ProfileImage src={user} alt="userprofile" />
        <Content>
          <Title>Welcome, {userData ? userData.name : 'User'}!</Title> {/* Use user name if available */}
          <Description>We're glad to have you here. Explore our platform and let us know if you have any questions.</Description>
          <Button>Start</Button>
        </Content>
      </WelcomeSection>

      <ButtonSection>
        <ActionButton
          isActive={activeSection === 'enrolled'}
          onClick={() => setActiveSection('enrolled')}
        >
          Enrolled
        </ActionButton>
        <ActionButton
          isActive={activeSection === 'certification'}
          onClick={() => setActiveSection('certification')}
        >
          Certification
        </ActionButton>
        <ActionButton
          isActive={activeSection === 'completed'}
          onClick={() => setActiveSection('completed')}
        >
          Completed
        </ActionButton>
      </ButtonSection>

      <ContentSection>{renderContent()}</ContentSection>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

const WelcomeSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fee3c1;
  gap: 20px;
  margin-top: 4.5rem;
  padding: 20px;
  border-radius: 30px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 4rem;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 3rem;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 5px;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
        text-align:justify;
    padding:10px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    text-align:justify;
    padding:10px;
  }
`;

const Button = styled.button`
  padding: 10px 60px;
  font-size: 1.1rem;
  font-family: Poppins, sans-serif;
  color: #fff;
  background-color: #FDA537;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #FDA538;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 30px;
    font-size: 1rem;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  ${({ isActive }) =>
    isActive &&
    `
    box-shadow: inset 0 -2px 0 0 #fda638;
  `};

  &:hover {
    text-decoration: none;
    background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 200px;
  }

  @media (max-width: 480px) {
    min-height: 150px;
  }
`;

export default Home;
