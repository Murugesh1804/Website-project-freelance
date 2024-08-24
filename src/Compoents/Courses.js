import React from 'react';
import styled from 'styled-components';
import course1 from '../Assest/course-1.jpg';
import course2 from '../Assest/course-2.jpg';
import course3 from '../Assest/course-3.jpg';
import course4 from '../Assest/course-4.jpg';

const Courses = () => {
  return (
    <Container>
      <Title><span>Our</span> Courses</Title>
      <CoursesGrid>
        <CourseCard>
          <CourseImage src={course1} alt="Course 1" />
          <CourseInfo>
            <CourseTitle>Course Title 1</CourseTitle>
            <ClassTime>
                <span>Class Time: </span> 
                 04:00 PM - 05:30 PM
                 </ClassTime>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
          </CourseInfo>
        </CourseCard>
        <CourseCard>
          <CourseImage src={course2} alt="Course 2" />
          <CourseInfo>
            <CourseTitle>Course Title 2</CourseTitle>
            <ClassTime>
                <span>Class Time: </span> 
                 04:00 PM - 05:30 PM
                 </ClassTime>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
          </CourseInfo>
        </CourseCard>
        <CourseCard>
          <CourseImage src={course3} alt="Course 3" />
          <CourseInfo>
            <CourseTitle>Course Title 3</CourseTitle>
            <ClassTime>
                <span>Class Time: </span> 
                 04:00 PM - 05:30 PM
                 </ClassTime>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
          </CourseInfo>
        </CourseCard>
        <CourseCard>
          <CourseImage src={course4} alt="Course 4" />
          <CourseInfo>
            <CourseTitle>Course Title 4</CourseTitle>
            <ClassTime>
                <span>Class Time: </span> 
                 04:00 PM - 05:30 PM
                 </ClassTime>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
          </CourseInfo>
        </CourseCard>
      </CoursesGrid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top:40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: orange;
  span{
    color: blue;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CourseCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left; /* Change alignment for better layout */
  border-radius: 8px;
  padding: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CourseImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CourseTitle = styled.h2`
color: blue;
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const ClassTime = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #555;
  span{
    font-weight: 500;
    color: orange;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export default Courses;
