import React from 'react';
import styled from 'styled-components';
import experienceImage from '../Assest/bg3.png'; 

const Experience = () => {
  return (
    <Container>
      <ImageSection>
        <Image src={experienceImage} alt="Experience Background" />
        <TextOverlay>
          <Heading><span>20 Years of </span>Experience</Heading>
          <Subheading>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor dolores magnam, vel recusandae beatae tenetur sint! Quos totam neque vel!</Subheading>
        </TextOverlay>
        <CountOverlay>
          <CountCard>
            <CountNumber>50+</CountNumber>
            <CountTitle>Certified Teachers</CountTitle>
          </CountCard>
          <CountCard>
            <CountNumber>100+</CountNumber>
            <CountTitle>Successful Kids</CountTitle>
          </CountCard>
          <CountCard>
            <CountNumber>30+</CountNumber>
            <CountTitle>Successful Kids Awards</CountTitle>
          </CountCard>
          <CountCard>
            <CountNumber>200+</CountNumber>
            <CountTitle>Coursess Completed</CountTitle>
          </CountCard>
        </CountOverlay>
      </ImageSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin:60px 0;
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 150vh; /* Full viewport height */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
  padding: 0px;

  @media (max-width: 768px) {
    top: 15%;
  }

  @media (max-width: 480px) {
    top: 10%;
    margin-top: 80px;
  }
`;

const Heading = styled.h1`
  font-size: 4vw; 
  margin-bottom: 10px;
  color: black;
  span {
    color: #333;
  }

  @media (max-width: 1200px) {
    font-size: 3vw; 
  }

  @media (max-width: 768px) {
    font-size: 5vw; 
  }

  @media (max-width: 480px) {
    font-size: 6vw; 
  }
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  width: 100%;
  text-align: justify;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CountOverlay = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  z-index: 1;
  width: 90%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 768px) {
    bottom: 5%;
  }

  @media (max-width: 480px) {
    bottom: 5%;
    gap: 10px;
  }
`;

const CountCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  padding: 15px;
  width: 200px; /* Adjust width as needed */

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    padding: 10px;
  }
`;

const CountNumber = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const CountTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default Experience;
