import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Progress = () => {
  const data = {
    labels: ['Stage 1', 'Stage 2', 'Stage 3'],
    datasets: [
      {
        label: 'Completion Percentage',
        data: [80, 60, 30], // Replace with actual progress values
        backgroundColor: ['#4caf50', '#fbc02d', '#e57373'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Progress Over Stages',
      },
    },
  };

  return (
    <Container id='progress'>
      <PageTitle>Progress Dashboard</PageTitle>
      <Content>
        <LeftColumn>
          <StageTrack>
            <Stage>
              <StageTitle>Stage 1</StageTitle>
              <StageLine active />
            </Stage>
            <Stage>
              <StageTitle>Stage 2</StageTitle>
              <StageLine active />
            </Stage>
            <Stage>
              <StageTitle>Stage 3</StageTitle>
              <StageLine />
            </Stage>
          </StageTrack>
        </LeftColumn>
        <RightColumn>
          <GraphSection>
            <GraphTitle>Overall Progress</GraphTitle>
            <Bar data={data} options={options} />
          </GraphSection>
        </RightColumn>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  min-height: 400px;
  margin-top:20px;
  margin-bottom:30px;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-family:poppins;
  color: #333;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 992px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-right: 60px;
  padding-left: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const StageTrack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Stage = styled.div`
  display: flex;
  align-items: center;
`;

const StageTitle = styled.span`
  flex: 1;
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StageLine = styled.div`
  flex: 2;
  height: 10px;
  background-color: ${({ active }) => (active ? '#4caf50' : '#ddd')};
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: auto;
  }
      @media (max-width: 480px) {
    min-height: 200px;
  }
`;

const GraphSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  canvas {
    max-width: 100%;
    height: 300px; /* Adjust to ensure consistency */
    max-height: 300px; /* Ensure chart does not overflow */
  }

        @media (max-width: 480px) {
    min-height: 200px;
  }
`;

const GraphTitle = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default Progress;
