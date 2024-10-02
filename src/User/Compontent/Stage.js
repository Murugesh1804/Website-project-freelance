import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Api from '../../Api/Api'; // Adjust path as necessary
import { Book, Lock, Unlock, Award, ChevronRight } from 'lucide-react';

// Import your local images here
import course1Image from '../../Assest/r1.jpg';
import course2Image from '../../Assest/yog2.png';
import course3Image from '../../Assest/yog3.png';
// Import more course images as needed

// Create an object to map course IDs to local images
const courseImages = {
  1: course1Image,
  2: course2Image,
  3: course3Image,
  // Add more mappings as needed
};

const Stage = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [unlockedCourses, setUnlockedCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState([]);
  const [activeStage, setActiveStage] = useState(null);
  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem('user'))?.studentId;

  useEffect(() => {
    if (userId) {
      fetchPurchasedCourses();
      fetchAllCourses();
    }
  }, [userId]);

  const fetchPurchasedCourses = async () => {
    try {
      const { data } = await Api.get(`/payment/purchased-courses/${userId}`);
      setPurchasedCourses(data);
      setUnlockedCourses(data);
    } catch (error) {
      console.error('Failed to fetch purchased courses', error);
    }
  };

  const fetchAllCourses = async () => {
    try {
      const { data } = await Api.get('/get-courses');
      setCourseDetails(data);
    } catch (error) {
      console.error('Failed to fetch courses', error);
    }
  };

  const handlePayment = async (courseId) => {
    // Payment handling logic...
    // Assuming the payment verification is successful, navigate to YogoForm
    navigate(`/yogoform/${courseId}`);
  };


  const getStageStatus = (courseId) => {
    if (unlockedCourses.includes(courseId)) return 'unlocked';
    const index = courseDetails.findIndex(course => course.courseId === courseId);
    if (index === 0 || unlockedCourses.includes(courseDetails[index - 1].courseId)) return 'current';
    return 'locked';
  };

  return (
    <Container>
      <Header>
        <Title>Your Journey to Inner Peace</Title>
        <Subtitle>Unlock each stage to progress on your path to mindfulness and self-discovery</Subtitle>
      </Header>
      <StagesContainer>
        {courseDetails.map((course, index) => {
          const status = getStageStatus(course.courseId);
          return (
            <StageCard
              key={course.courseId}
              onClick={() => setActiveStage(activeStage === course.courseId ? null : course.courseId)}
              active={activeStage === course.courseId}
              status={status}
            >
              <StageImage src={courseImages[course.courseId] || courseImages[1]} alt={course.courseName} />
              <StageContent>
                <StageHeader>
                  <StageIcon status={status}>
                    {status === 'unlocked' ? <Unlock /> : status === 'current' ? <Book /> : <Lock />}
                  </StageIcon>
                  <StageName>{course.courseName}</StageName>
                </StageHeader>
                <StageDescription>{course.courseDescription}</StageDescription>
                {activeStage === course.courseId && (
                  <StageDetails>
                    <DetailText>{course.detailedDescription || "Embark on a journey of self-discovery and inner peace with this transformative course."}</DetailText>
                    {status === 'unlocked' ? (
                      <ActionButton onClick={() => navigate(`/yogoform/${course.courseId}`)}>
                        Continue Your Journey <ChevronRight size={16} />
                      </ActionButton>
                    ) : status === 'current' ? (
                      <ActionButton onClick={() => handlePayment(course.courseId)}>
                        Unlock This Stage <Unlock size={16} />
                      </ActionButton>
                    ) : (
                      <LockedMessage>Complete previous stages to unlock</LockedMessage>
                    )}
                  </StageDetails>
                )}
              </StageContent>
            </StageCard>
          );
        })}
      </StagesContainer>
      <ProgressIndicator>
        <ProgressText>Your Progress: {unlockedCourses.length} / {courseDetails.length} Stages Completed</ProgressText>
        <ProgressBar width={(unlockedCourses.length / courseDetails.length) * 100} />
      </ProgressIndicator>
    </Container>
  );
};
const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const StagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const StageCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ active }) => active && `
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  `}

  ${({ status }) => status === 'locked' && `
    opacity: 0.7;
  `}
`;

const StageImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StageContent = styled.div`
  padding: 1.5rem;
`;

const StageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StageIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: white;
  background-color: ${({ status }) => 
    status === 'unlocked' ? '#28a745' : 
    status === 'current' ? '#fda638' : 
    '#6c757d'};
`;

const StageName = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  color: #333;
`;

const StageDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const StageDetails = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const DetailText = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #3a7bc8;
  }
`;

const LockedMessage = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  font-style: italic;
`;

const ProgressIndicator = styled.div`
  margin-top: 2rem;
`;

const ProgressText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  height: 10px;
  background-color: #e9ecef;
  border-radius: 5px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.width}%;
    background-color: #28a745;
    transition: width 0.5s ease;
  }
`;

export default Stage;