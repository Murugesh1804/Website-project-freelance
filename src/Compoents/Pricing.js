import React from 'react';
import styled from 'styled-components';
import teacher1 from '../Assest/teacher1.jpg';
import teacher2 from '../Assest/teacher2.jpg';
import teacher3 from '../Assest/teacher3.jpg';
import teacher4 from '../Assest/teacher4.jpg';

const Pricing = () => {
    return(
        <Container>
            <Title><span className='first'>Our </span> Pricing</Title>
            <PriceGrid>
                <PriceCard>
                    <PriceTitle>Basic</PriceTitle>
                    <PriceRate>$24.50</PriceRate>
                    <PriceImage src={teacher1} alt='price 1' />
                    <PriceDescription>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</PriceDescription>

                    <PriceButtonBlue>Take a tour</PriceButtonBlue>
                </PriceCard>
                <PriceCard>
                    <PriceTitle>Standard</PriceTitle>
                    <PriceRate>$34.50</PriceRate>
                    <PriceImage src={teacher2} alt='price 2' />
                    <PriceDescription>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</PriceDescription>

                    <PriceButtonOrange>Take a tour</PriceButtonOrange>
                </PriceCard>
                <PriceCard>
                    <PriceTitle>Premium</PriceTitle>
                    <PriceRate>$54.50</PriceRate>
                    <PriceImage src={teacher3} alt='price 1' />
                    <PriceDescription>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</PriceDescription>

                    <PriceButtonGreen>Take a tour</PriceButtonGreen>
                </PriceCard>
                <PriceCard>
                    <PriceTitle>Platinum</PriceTitle>
                    <PriceRate>$89.50</PriceRate>
                    <PriceImage src={teacher4} alt='price 1' />
                    <PriceDescription>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</PriceDescription>

                    <PriceButtonPink>Take a tour</PriceButtonPink>
                </PriceCard>
            </PriceGrid>
        </Container>

    )
};

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: transparent; /* Set background to transparent */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: orange;

  span {
    color: blue;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PriceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 3.5rem; /* Reduced gap for better spacing */
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

const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
//   border: 1px solid gray;
  border-radius: 8px;
  padding: 10px;
`;

const PriceTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 20px;

    @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PriceRate = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: blue;
`;

const PriceImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const PriceDescription = styled.div`
    font-size: 1rem;
    color: #333;
    margin-bottom: 20px;
    background-color: transparent; /* Set background to transparent */
`;

const PriceButtonBlue = styled.div`
    width: 130px;
    height: 35px;
    background-color: blue;
    color: white;
    border-radius: 30px;
    padding-top: 10px;
`;

const PriceButtonOrange = styled.div`
    width: 130px;
    height: 35px;
    background-color: orange;
    color: white;
    border-radius: 30px;
    padding-top: 10px;
`;

const PriceButtonGreen = styled.div`
    width: 130px;
    height: 35px;
    background-color: green;
    color: white;
    border-radius: 30px;
    padding-top: 10px;
`;

const PriceButtonPink = styled.div`
    width: 130px;
    height: 35px;
    background-color: pink;
    color: white;
    border-radius: 30px;
    padding-top: 10px;
`;
export default Pricing;