import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Flower } from 'lucide-react';
import Api from '../../Api/Api';

const MindfulnessProgress = () => {
    const [activeStage, setActiveStage] = useState(1);
    const [showTip, setShowTip] = useState(false);
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    const [responseData, setResponseData] = useState([]);
    const userId = JSON.parse(localStorage.getItem('user'))?.studentId;

    useEffect(() => {
        fetchPurchasedCourses();
    }, []);

    const fetchPurchasedCourses = async () => {
        try {
            const { data } = await Api.get(`/payment/purchased/${userId}`);
            console.log('Fetched purchased courses:', data);
            setPurchasedCourses(data);
        } catch (error) {
            console.error('Failed to fetch purchased courses', error);
        }
    };

    const fetchResponses = async (courseId) => {
        try {
            const { data } = await Api.get(`/responses/analytics/${courseId}`);
            console.log('Fetched responses:', data);
            setResponseData(data.questions); // Use the questions for the graph
        } catch (error) {
            console.error('Failed to fetch responses', error);
        }
    };

    const handleStageClick = (index) => {
        setActiveStage(index + 1);
        const selectedCourse = purchasedCourses[index];
        if (selectedCourse) {
            fetchResponses(selectedCourse.courseId);
        }
    };

    return (
        <Container>
            <Title>Mindfulness Journey</Title>
            
            <GridContainer>
                <Card>
                    <CardTitle>Personal Growth Stages</CardTitle>
                    <StagesContainer>
                        {purchasedCourses.map((course, index) => (
                            <Stage 
                                key={index}
                                active={activeStage === index + 1}
                                onClick={() => handleStageClick(index)}
                            >
                                <StageHeader>
                                    <Flower color={activeStage === index + 1 ? '#4338ca' : '#a5b4fc'} size={24} />
                                    <StageName>{course.courseName}</StageName>
                                </StageHeader>
                                {activeStage === index + 1 && (
                                    <StageDescription>{course.courseDescription}</StageDescription>
                                )}
                            </Stage>
                        ))}
                    </StagesContainer>
                </Card>

                <Card>
                    <CardTitle>Response Metrics</CardTitle>
                    <ChartContainer>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={responseData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="questionText" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="yesCount" stroke="#82ca9d" activeDot={{ r: 8 }} name="Yes Count" />
                                <Line type="monotone" dataKey="noCount" stroke="#8884d8" activeDot={{ r: 8 }} name="No Count" />
                                {/* Display options count for multiple-choice questions if available */}
                                {responseData.length > 0 && responseData[0].options &&
                                  Object.keys(responseData[0].options).map((option, index) => (
                                    <Line key={index} type="monotone" dataKey={`options.${option}`} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} name={option} />
                                ))}
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

// Styled components
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
  font-weight: 500;
  margin-left: 0.5rem;
`;

const StageDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const ChartContainer = styled.div`
  height: 300px;
`;

const TipButton = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4338ca;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3730a3;
  }
`;

const CustomAlert = styled.div`
  background-color: #fef2f2;
  border-left: 4px solid #dc2626;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.375rem;
`;

const AlertTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export default MindfulnessProgress;
