import React from 'react';
import styled from 'styled-components';
import teacher1 from '../Assest/teacher1.jpg';
import teacher2 from '../Assest/teacher2.jpg';
import teacher3 from '../Assest/teacher3.jpg';
import teacher4 from '../Assest/teacher4.jpg';

const Certified = () => {
  return (
    <Container id='teacher'>
      <Title><span className="first">Certified</span> Teachers</Title>
      <TeacherGrid>
        <TeacherCard>
          <TeacherImage src={teacher1} alt="Teacher 1" />
          <TeacherDescription>
            <Name>Bianca Wilson</Name>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</Paragraph>
          </TeacherDescription>
        </TeacherCard>
        <TeacherCard>
          <TeacherImage src={teacher2} alt="Teacher 2" />
          <TeacherDescription>
            <Name>Michael Smith</Name>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</Paragraph>
          </TeacherDescription>
        </TeacherCard>
        <TeacherCard>
          <TeacherImage src={teacher3} alt="Teacher 3" />
          <TeacherDescription>
            <Name>Emily Johnson</Name>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</Paragraph>
          </TeacherDescription>
        </TeacherCard>
        <TeacherCard>
          <TeacherImage src={teacher4} alt="Teacher 4" />
          <TeacherDescription>
            <Name>James Brown</Name>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</Paragraph>
          </TeacherDescription>
        </TeacherCard>
      </TeacherGrid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: transparent; /* Set background to transparent */
  margin-top:40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
  color: orange;

  span {
    color: blue;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeacherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 5rem; /* Reduced gap for better spacing */
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TeacherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  padding: 10px;
`;

const TeacherImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const TeacherDescription = styled.div`
  font-size: 1rem;
  color: #333;
  background-color: transparent; /* Set background to transparent */
`;

const Name = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export default Certified;
