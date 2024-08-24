import React from 'react';
import styled from 'styled-components';
import { FaBook, FaApple, FaChalkboardTeacher, FaPencilAlt, FaGlobe, FaStar } from 'react-icons/fa';

const Offer = () => {
  return (
    <Container id='about'>
      <LeftSection>
        <h1>What We Offer</h1>
        <p>Explore our wide range of educational resources and activities designed to foster a love for learning in children.</p>
        <GridContainer>
          <Column>
            <IconItem>
              <Icon><FaBook /></Icon>
              <TextWrapper>
                <IconText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis illum labore exercitationem veritatis aliquam reiciendis quam a iste nulla natus!</IconText>
              </TextWrapper>
            </IconItem>
            <IconItem>
              <Icon><FaApple /></Icon>
              <TextWrapper>
                <IconText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quaerat? Suscipit quos ut beatae praesentium debitis odit tempora iusto repudiandae!</IconText>
              </TextWrapper>
            </IconItem>
            <IconItem>
              <Icon><FaChalkboardTeacher /></Icon>
              <TextWrapper>
                <IconText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet dolore corrupti aperiam? Omnis, ullam officiis. Reprehenderit cupiditate amet in.</IconText>
              </TextWrapper>
            </IconItem>
          </Column>
          <Column>
            <IconItem>
              <Icon><FaPencilAlt /></Icon>
              <TextWrapper>
                <IconText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolorem debitis reprehenderit distinctio, rerum nostrum? Recusandae necessitatibus nesciunt labore unde?</IconText>
              </TextWrapper>
            </IconItem>
            <IconItem>
              <Icon><FaGlobe /></Icon>
              <TextWrapper>
                <IconText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium itaque consequatur beatae quia voluptate molestiae dolores reprehenderit magni sapiente dignissimos.</IconText>
              </TextWrapper>
            </IconItem>
            <IconItem>
              <Icon><FaStar /></Icon>
              <TextWrapper>
                <IconText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim quam quisquam ipsam dolores praesentium quos repellat quasi et? Assumenda?</IconText>
              </TextWrapper>
            </IconItem>
          </Column>
        </GridContainer>
      </LeftSection>
      <RightSection>
        <h1>Welcome to Kiddos Learning School</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, labore pariatur quibusdam molestiae ullam at repudiandae corporis, reiciendis velit quo in aliquid? Labore dolor ex consequuntur earum sit a laboriosam unde harum quos nam maxime molestiae dolorum, itaque, enim vero aliquam distinctio ad quis eligendi tempora. Itaque dolor soluta asperiores.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non rerum quas fugit quam aliquid nobis debitis repellat quibusdam fuga amet! Illum vitae dolorem accusamus atque reiciendis eum, error inventore molestias?
            </p>
      <Button>Read more</Button>
      </RightSection>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  padding: 100px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 50px; /* Reduce padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 20px; /* Further reduce padding for mobile devices */
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-family: Poppins, sans-serif;
  color: #fff;
  background-color: #FDA537;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #FDA538;
  }

  @media (max-width: 768px) {
    width: 100%; /* Make button full-width on smaller screens */
  }
`;

const LeftSection = styled.div`
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    background-color: transparent;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 100%; /* Ensure full width for small devices */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Icon = styled.div`
  font-size: 30px;
  background-color: blue;
  border-radius: 50%;
  padding: 10px;
  width: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Poppins, sans-serif;
  font-size: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const IconText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #555;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    text-align: center;
  }
`;

const RightSection = styled.div`
  width: 100%;
  border-radius: 8px;
  font-family: Poppins, sans-serif;

  h1 {
    margin-top: 0;
    font-size: 1.5rem; /* Match with LeftSection's h2 size */
  }

  p {
    margin: 10px 0 0;
    font-size: 1rem; /* Match with LeftSection's p size */
    text-align: justify;
  }

  @media (max-width: 768px) {
    padding: 15px;

    h1 {
      font-size: 1.25rem; /* Adjusted to match the left section on smaller screens */
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    border-radius: 5px;

    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 320px) {
    padding: 8px;

    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;



export default Offer;
