import React, { useState } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Flower } from 'lucide-react';

const Container = styled.div`
  background: linear-gradient(to bottom right, #e0e7ff, #e5e1f9);
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  color: #3730a3;
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4338ca;
  margin-bottom: 1rem;
`;

const StagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Stage = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: ${props => props.active ? '#e0e7ff' : 'transparent'};
  box-shadow: ${props => props.active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    background-color: #f3f4f6;
  }
`;

const StageHeader = styled.div`
  display: flex;
  align-items: center;
`;

const StageName = styled.span`
  margin-left: 0.5rem;
  font-weight: 600;
`;

const StageDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const TipButton = styled.button`
  background-color: #4338ca;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3730a3;
  }
`;

const CustomAlert = styled.div`
  background-color: #e0e7ff;
  border-left: 4px solid #4338ca;
  color: #3730a3;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
`;

const AlertTitle = styled.p`
  font-weight: bold;
`;

const MindfulnessProgress = () => {
  const [activeStage, setActiveStage] = useState(1);
  const [showTip, setShowTip] = useState(false);

  const stageData = [
    { name: 'Inner Peace', value: 60 },
    { name: 'Mindfulness', value: 75 },
    { name: 'Self-Awareness', value: 45 },
    { name: 'Compassion', value: 80 },
    { name: 'Gratitude', value: 90 },
  ];

  const stages = [
    { name: 'Awareness', description: 'Becoming conscious of your thoughts and emotions' },
    { name: 'Acceptance', description: 'Embracing your experiences without judgment' },
    { name: 'Action', description: 'Taking mindful steps towards personal growth' },
  ];

  const handleStageClick = (index) => {
    setActiveStage(index + 1);
  };

  return (
    <Container>
      <Title>Mindfulness Journey</Title>
      
      <GridContainer>
        <Card>
          <CardTitle>Personal Growth Stages</CardTitle>
          <StagesContainer>
            {stages.map((stage, index) => (
              <Stage 
                key={index}
                active={activeStage === index + 1}
                onClick={() => handleStageClick(index)}
              >
                <StageHeader>
                  <Flower color={activeStage === index + 1 ? '#4338ca' : '#a5b4fc'} size={24} />
                  <StageName>{stage.name}</StageName>
                </StageHeader>
                {activeStage === index + 1 && (
                  <StageDescription>{stage.description}</StageDescription>
                )}
              </Stage>
            ))}
          </StagesContainer>
        </Card>

        <Card>
          <CardTitle>Mindfulness Metrics</CardTitle>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Card>
      </GridContainer>

      <div style={{ marginTop: '2rem' }}>
        <TipButton onClick={() => setShowTip(!showTip)}>
          {showTip ? 'Hide' : 'Show'} Mindfulness Tip
        </TipButton>

        {showTip && (
          <CustomAlert>
            <AlertTitle>Mindfulness Tip of the Day</AlertTitle>
            <p>Take a moment to practice deep breathing. Inhale for 4 counts, hold for 4, and exhale for 4. This simple exercise can help center your mind and reduce stress.</p>
          </CustomAlert>
        )}
      </div>
    </Container>
  );
};

export default MindfulnessProgress;