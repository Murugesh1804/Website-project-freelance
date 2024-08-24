import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bg1 from '../Assest/bg1.jpg';
import bg2 from '../Assest/bg2.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(bg1);
  const [currentText, setCurrentText] = useState("Perfect Learning For Your Child");

  useEffect(() => {
    const images = [
      { src: bg1, text: "Perfect Learning For Your Child" },
      { src: bg2, text: "A Bright Future Starts Here" }
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index].src);
      setCurrentText(images[index].text);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <Container>
      <BackgroundImage src={currentImage} alt="Background" />
      <CenteredText>{currentText}<br></br>
        <Button className='read'>Read more</Button>
      </CenteredText>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Button = styled.button`
  padding: 15px 25px;
  font-size: 1rem;
  font-family:poppins;
  color: #fff;
  background-color: #FDA537;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #FDA538;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transition: opacity 1s ease-in-out;

  @media (max-width: 768px) {
    object-position: center;
  }

  @media (max-width: 480px) {
    object-position: center;
  }
`;

const CenteredText = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
  z-index: 1;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    width: 90%;
  }
`;

export default Home;
