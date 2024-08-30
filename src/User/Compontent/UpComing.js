import React from 'react';
import styled from 'styled-components';
import locked from '../../Assest/frame.png';

const UpComing = () => {
  return (
    <Container>
      <Box>
        <LeftSide>
          <Title>Upcoming Levels</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tenetur!</Description>
          <Button>Unlock Next Level</Button>
        </LeftSide>
        <RightSide>
          <LockedImageContainer>
            <LockedImage src={locked} alt="Locked Level 2" />
            <Label>Stage 2 lock</Label>
          </LockedImageContainer>
          <LockedImageContainer>
            <LockedImage src={locked} alt="Locked Level 3" />
            <Label>Stage 3 lock</Label>
          </LockedImageContainer>
        </RightSide>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center the content horizontally */
  padding: 20px;
  background-color: #FEE3C1;
  height: 80vh; /* Set height to 80vh */
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px; /* Adjust the max-width as needed */
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: transparent;


  @media (max-width: 1024px) { /* Tablet screens */
    flex-direction: column;
    text-align: center;
    height: auto; /* Remove fixed height for better responsiveness */
  }

  @media (max-width: 768px) { /* Mobile screens */
    padding: 15px;
  }

  @media (max-width: 480px) { /* Smaller mobile screens */
    padding: 10px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem; /* Adjusted for responsiveness */
  font-weight: 800;
  color: #333;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const RightSide = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap; /* Ensure items wrap on smaller screens */
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const LockedImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LockedImage = styled.img`
  width: 150px; /* Adjusted size for responsiveness */
  height: 150px;

  @media (max-width: 1024px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 768px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
  }
`;

const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  max-width: 20rem;
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

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 8px 16px;
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

export default UpComing;
