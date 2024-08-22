import React from 'react';
import styled from 'styled-components';
import { GiTeacher } from "react-icons/gi";

const Box = () => {
  return (
    <Container>
      <BoxItem color="#e0f7fa"> {/* Light Cyan */}
        <Icon><GiTeacher /></Icon>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga eum maxime numquam laborum nisi, reprehenderit amet architecto optio? Nemo.</Text>
      </BoxItem>
      <BoxItem color="#fce4ec"> {/* Light Pink */}
        <Icon><GiTeacher /></Icon>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga eum maxime numquam laborum nisi, reprehenderit amet architecto optio? Nemo.</Text>
      </BoxItem>
      <BoxItem color="#fffde7"> {/* Light Yellow */}
        <Icon><GiTeacher /></Icon>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat itaque cum possimus nihil totam dolor! Odit architecto molestiae officia sapiente?</Text>
      </BoxItem>
      <BoxItem color="#e8f5e9"> {/* Light Green */}
        <Icon><GiTeacher /></Icon>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolorum, sequi totam repudiandae ducimus accusantium. Nesciunt reprehenderit magnam ad provident?</Text>
      </BoxItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Prevent wrapping */
  gap: 0; /* Remove gaps between boxes */
  width: 100%; /* Full width of the parent */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  
  }
`;

const BoxItem = styled.div`
  background-color: ${props => props.color || '#f9f9f9'};
  border-radius: 8px;
  padding: 20px;
  width: 25%; /* Adjust width to fit boxes in a single line */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%; /* Full width on small screens */
  }
`;

const Icon = styled.div`
  color: white;

  background-color: black;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: -55px;
 
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: justify;
 
`;

export default Box;
