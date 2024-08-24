import React from 'react';
import styled from 'styled-components';
import teacher1 from '../Assest/teacher1.jpg';
import teacher2 from '../Assest/teacher2.jpg';
import teacher3 from '../Assest/teacher3.jpg';
import teacher4 from '../Assest/teacher4.jpg';

const Pricing = () => {
    return (
        <Container id='pricing'>
            <Title><span className='first'>Our </span> Pricing</Title>
            <PriceGrid>
                <PriceCard>
                    <PriceTitle>Basic</PriceTitle>
                    <PriceRate>$24.50</PriceRate>
                    <PriceImage src={teacher1} alt='price 1' />
                    <PriceDescription>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</PriceDescription>
                    <PriceButton color="blue">Take a tour</PriceButton>
                </PriceCard>
                <PriceCard>
                    <PriceTitle>Standard</PriceTitle>
                    <PriceRate>$34.50</PriceRate>
                    <PriceImage src={teacher2} alt='price 2' />
                    <PriceDescription>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</PriceDescription>
                    <PriceButton color="orange">Take a tour</PriceButton>
                </PriceCard>
                <PriceCard>
                    <PriceTitle>Premium</PriceTitle>
                    <PriceRate>$54.50</PriceRate>
                    <PriceImage src={teacher3} alt='price 3' />
                    <PriceDescription>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</PriceDescription>
                    <PriceButton color="green">Take a tour</PriceButton>
                </PriceCard>
                <PriceCard>
                    <PriceTitle>Platinum</PriceTitle>
                    <PriceRate>$89.50</PriceRate>
                    <PriceImage src={teacher4} alt='price 4' />
                    <PriceDescription>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</PriceDescription>
                    <PriceButton color="pink">Take a tour</PriceButton>
                </PriceCard>
            </PriceGrid>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: transparent;
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

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const PriceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; /* Center align the grid */

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
 
  border-radius: 8px;
  padding: 20px;
  background-color: #fff; /* Set background color for better contrast */
 

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const PriceTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;

    @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const PriceRate = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: blue;

    @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const PriceImage = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;

  @media (max-width: 768px) {
    max-width: 120px;
  }

  @media (max-width: 480px) {
    max-width: 100px;
  }
`;

const PriceDescription = styled.div`
    font-size: 1rem;
    color: #333;
    margin-bottom: 20px;
    background-color: transparent;
`;

const PriceButton = styled.div`
    width: 130px;
    height: 35px;
    background-color: ${props => props.color || 'blue'};
    color: white;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 0.9rem;

    @media (max-width: 768px) {
        width: 120px;
        height: 30px;
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        width: 100px;
        height: 25px;
        font-size: 0.7rem;
    }
`;

export default Pricing;
