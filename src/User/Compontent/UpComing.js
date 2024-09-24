import React from 'react';
import styled from 'styled-components';
import { Leaf, Lock, Unlock } from 'lucide-react'; // Importing Lucide icons

const UpComing = () => {
  return (
    <Container id='upcoming'>
      <Box>
        <LeftSide>
          <Title>Your Path to Inner Peace</Title>
          <Description>
            Embark on a transformative journey through our mindfulness stages. 
            Each level brings you closer to self-discovery and lasting tranquility.
          </Description>
          <Button>Begin Your Journey</Button>
        </LeftSide>
        <RightSide>
          <StageContainer>
            <StageIcon completed><Unlock size={24} /></StageIcon>
            <StageInfo>
              <StageName>Awareness</StageName>
              <StageDescription>Discover the power of present moment</StageDescription>
            </StageInfo>
          </StageContainer>
          <StageContainer>
            <StageIcon><Lock size={24} /></StageIcon>
            <StageInfo>
              <StageName>Acceptance</StageName>
              <StageDescription>Embrace life's ebb and flow</StageDescription>
            </StageInfo>
          </StageContainer>
          <StageContainer>
            <StageIcon><Lock size={24} /></StageIcon>
            <StageInfo>
              <StageName>Transcendence</StageName>
              <StageDescription>Elevate your consciousness</StageDescription>
            </StageInfo>
          </StageContainer>
        </RightSide>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  min-height: 60vh;
  border-radius: 30px;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #006064;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #00838f;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #00acc1;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0097a7;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 151, 167, 0.4);
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const StageContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const StageIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.completed ? '#4caf50' : '#bdbdbd'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  color: white;
`;

const StageInfo = styled.div`
  flex: 1;
`;

const StageName = styled.h3`
  font-size: 1.2rem;
  color: #00838f;
  margin-bottom: 5px;
`;

const StageDescription = styled.p`
  font-size: 0.9rem;
  color: #546e7a;
`;

export default UpComing;