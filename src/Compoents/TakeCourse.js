import React from 'react';
import styled from 'styled-components';
import bg3 from '../Assest/bg3.jpg';

const TakeCourse = () => {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Text>Take this course to enhance your skills!</Text>
        <Button>Buy Course</Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%; /* 50% of viewport height */
  background-image: url(${bg3});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the content vertically and horizontally */
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const Text = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default TakeCourse;
