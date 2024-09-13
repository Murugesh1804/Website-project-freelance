import React from 'react';
import styled from 'styled-components';
import stageImage1 from '../../Assest/course-1.jpg'; // Replace with actual image paths
import stageImage2 from '../../Assest/course-2.jpg';
import stageImage3 from '../../Assest/course-3.jpg';
import upBoxImage from '../../Assest/bg1.jpg'; // Image for UpBox

const Stage = () => {
  return (
    <Container id='stage'>
      <Box>
        <UpBox>
          <UpBoxImage src={upBoxImage} alt="Up Box" />
          <UpBoxContent>
            <Title>Welcome to the Stage</Title>
            <Description>
              This section provides an overview of our stages. Each stage helps you progress towards your goals with clear guidance and structured learning.
            </Description>
            <Button1>Start</Button1>
          </UpBoxContent>
        </UpBox>
        <DownBox>
          <StageCard>
            <StageImage src={stageImage1} alt="Stage 1" />
            <StageContent>
              <LevelTitle>Level 1</LevelTitle>
              <InstructorName>Instructor: John Doe</InstructorName>
              <Description>Introduction to the basics. Start your journey here!</Description>
              <Button>Start Level 1</Button>
            </StageContent>
          </StageCard>

          <StageCard locked>
            <StageImage src={stageImage2} alt="Stage 2" />
            <StageContent>
              <LevelTitle>Level 2</LevelTitle>
              <InstructorName>Instructor: Jane Smith</InstructorName>
              <Description>This level is locked. Complete Level 1 to unlock.</Description>
              <LockedButton disabled>Locked</LockedButton>
            </StageContent>
          </StageCard>

          <StageCard locked>
            <StageImage src={stageImage3} alt="Stage 3" />
            <StageContent>
              <LevelTitle>Level 3</LevelTitle>
              <InstructorName>Instructor: Michael Johnson</InstructorName>
              <Description>This level is locked. Complete Level 2 to unlock.</Description>
              <LockedButton disabled>Locked</LockedButton>
            </StageContent>
          </StageCard>
        </DownBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #FEE3C1;
  padding-bottom:50px;
  margin-top:10px;
`;

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const UpBox = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  margin-top:60px;
 

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    margin-top:10px;
  }
`;

const UpBoxImage = styled.img`
  object-fit:cover;
  height: 150px;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const UpBoxContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #666;
  text-align:justify;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const DownBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  opacity: ${({ locked }) => (locked ? 0.6 : 1)};
`;

const StageImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const StageContent = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const LevelTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const InstructorName = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
  color: #777;
`;

const Button = styled.button`
  padding: 13px 35px;
  margin-top: 10px;
  font-family:poppins ;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const LockedButton = styled.button`
  padding: 13px 35px;
   font-family:poppins ;
  margin-top: 10px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: not-allowed;
`;

const Button1 = styled.button`
  padding: 10px ;
  max-width: 10rem;
  font-size: 1.2rem;
  font-weight: 600;
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
    font-size: 1.4rem;
    padding: 10px 20px;
    margin-left:15%;
      border-radius: 30px;
  }
`;


export default Stage;
