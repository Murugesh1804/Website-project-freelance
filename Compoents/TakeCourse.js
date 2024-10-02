import React from 'react';
import styled from 'styled-components';
import backgroundVideo from '../Assest/bg2.mp4';

const TakeCourse = () => {
  return (
    <Container>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Content>
        <Text>Discover WHO AM I?</Text>
        <Button>By help of your mind</Button>
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

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  @media (max-width: 768px) {
    object-position: center;
  }

  @media (max-width: 480px) {
    object-position: center;
  }
`;

const Content = styled.div`
  position: relative; /* Changed from absolute to relative */
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
  padding: 15px 25px;
  font-size: 1rem;
  font-family: Poppins;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: #FDA537;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default TakeCourse;
