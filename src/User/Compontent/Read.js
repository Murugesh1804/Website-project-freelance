import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../../Assest/back.jpg'; // Replace with the actual path to your images
import image2 from '../../Assest/new_bg.jpg';

const Read = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2];

  // Auto slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container>
      <Slideshow>
        <Image src={images[currentImage]} alt="Slideshow" />
        <Overlay>
          <OverlayText>Perfect Learning for Your Child</OverlayText>
          <Button>Read More</Button>
        </Overlay>
      </Slideshow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Slideshow = styled.div`
  position: relative;
  width: 100%;
  max-width: 1700px;
  height: 50vh;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 65vh;
  }

  @media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 480px) {
    height: 35vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
 
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 0 10px;
  text-align: center;
`;

const OverlayText = styled.div`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  font-weight: 600;
  background-color: #fda638;
  border: none;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #e6952d; /* Slightly darker on hover */
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
  }
`;

export default Read;
