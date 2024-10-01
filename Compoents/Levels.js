import React from 'react';
import styled from 'styled-components';
import beginnerMindfulness from '../Assest/r2.jpg';
import advancedMeditation from '../Assest/yog2.png';
import stressManagement from '../Assest/yog3.png';

const courses = [
  {
    title: "Ready for Change",
    description: "Begin your journey to overcome physical and mental blocks for a better family life, career, and social connections.",
    duration: "2 weeks",
    level: "Beginner",
    image: stressManagement
  },
  {
    title: "Mind Voyage",
    description: "Discover powerful meditation techniques to journey within your mind and enhance the flow of positive energy both within and around you under the direct guidance of a Guru.",
    duration: "2 weeks",
    level: "Intermediate",
    image: beginnerMindfulness
  },
  {
    title: "Grand Awaken",
    description: "Advanced Meditation Techniques, under the direct guidance of a Guru.",
    duration: "3 weeks",
    level: "Advanced",
    image: advancedMeditation
  }
];

const CourseCard = ({ course, isMiddle }) => (
  <StyledCard className={isMiddle ? 'middle' : ''}>
    <ImageContainer>
      <CourseImage src={course.image} alt={course.title} />
      <Overlay>
        <EnrollButton>Enroll Now</EnrollButton>
      </Overlay>
    </ImageContainer>
    <CardContent>
      <CourseTitle>{course.title}</CourseTitle>
      <CourseMetadata>{course.level} • {course.duration}</CourseMetadata>
      <CourseDescription>{course.description}</CourseDescription>
    </CardContent>
    <CardFooter>
      <FooterText>Next session starts soon</FooterText>
    </CardFooter>
  </StyledCard>
);

const Courses = () => {
  return (
    <Container id="courses">
      <Title>
        <span>Prepare for the </span> <span>Change in You</span>
      </Title>
      <CourseGrid>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} isMiddle={index === 1} />
        ))}
      </CourseGrid>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  
  span:first-child {
    color: #4A90E2;
  }
  
  span:last-child {
    color: #F5A623;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &.middle {
    grid-row: span 2;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${StyledCard}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${StyledCard}:hover & {
    opacity: 1;
  }
`;

const EnrollButton = styled.button`
  background: #4A90E2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #357ABD;
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CourseTitle = styled.h2`
  font-size: 1.5rem;
  color: #4A90E2;
  margin-bottom: 10px;
`;

const CourseMetadata = styled.p`
  font-size: 0.9rem;
  color: #F5A623;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const CardFooter = styled.div`
  background: #f8f8f8;
  padding: 10px 20px;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

export default Courses;