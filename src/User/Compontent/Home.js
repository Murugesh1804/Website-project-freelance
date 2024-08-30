import React, { useState } from 'react';
import styled from 'styled-components';
import user from '../../Assest/user.png';

const Home = () => {
  const [activeSection, setActiveSection] = useState(''); // State to track which section is active

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
    <Container>
      <WelcomeSection>
        <ProfileImage src={user} alt="userprofile" />
        <Content>
          <Title>Welcome, User!</Title>
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
`;

const WelcomeSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fee3c1;
  padding: 20px;
  gap: 20px;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 4rem;
  }

  @media (max-width: 480px) {
    padding: 8px;
    margin-top: 4rem;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
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
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.5rem;
  background-color: #fda638;
  border: none;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px 12px;
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
  transition: background-color 0.3s ease;

  ${({ isActive }) =>
    isActive &&
    `
    box-shadow: inset 0 -2px 0 0 #fda638;
  `};

  &:hover {
    text-decoration: none;
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
  min-height: 300px; /* Increased default height */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 250px;
  }

  @media (max-width: 480px) {
    min-height: 200px;
  }
`;

export default Home;
