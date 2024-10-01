import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPrayingHands, FaYinYang, FaHeartbeat, FaBrain, FaLeaf, FaSmile } from 'react-icons/fa';
import Med from '../Assest/r1.jpg'; // Already imported image
import Yoga from '../Assest/back.jpg'; // New image for Yoga
import Stress from '../Assest/bg1.jpg'; // New image for Stress Management
import Mindfulness from '../Assest/bg2.jpg'; // New image for Mindfulness Practices
import Wellness from '../Assest/bg3.jpg'; // New image for Holistic Wellness
import Emotional from '../Assest/bg4.jpg'; // New image for Emotional Intelligence

const offerData = [
  {
    icon: <FaPrayingHands />,
    title: "Positive approach and Thinking",
    description: "Discover inner peace through our guided meditation sessions.",
    image: Med
  },
  {
    icon: <FaYinYang />,
    title: "Stress Management",
    description: "Learn effective techniques to reduce stress and anxiety.",
    image: Yoga
  },
  {
    icon: <FaHeartbeat />,
    title: "Family & Career Wellness",
    description: "Enhance career development and foster positive relationships with family and society, both of which are essential aspects of life.",
    image: Stress
  },
  {
    icon: <FaBrain />,
    title: "Emotional Intelligence",
    description: "Develop better understanding and control of your emotions.",
    image: Mindfulness
  },
  {
    icon: <FaLeaf />,
    title: "Yoga to unblock the Mental blocks",
    description: "Achieve mind-body harmony with our specialized yoga programs.",
    image: Wellness
  },
  {
    icon: <FaSmile />,
    title: "Ancient Yogic Meditation Techniques to reunite with Universe",
    description: "",
    image: Emotional
  }
];


const ArtOfLivingOffers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedOffer(prev => (prev === null || prev >= offerData.length - 1) ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>Experience the Mastery of Living</Title>
      <Subtitle>Learn the Path to a Rich Life Experience</Subtitle>
      
      <OfferGrid>
        {offerData.map((offer, index) => (
          <OfferItem
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedOffer(index)}
          >
            <IconWrapper>{offer.icon}</IconWrapper>
            <OfferTitle>{offer.title}</OfferTitle>
          </OfferItem>
        ))}
      </OfferGrid>

      <DetailSection>
        {selectedOffer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <DetailImage src={offerData[selectedOffer].image} alt={offerData[selectedOffer].title} /> */}
            <DetailTitle>{offerData[selectedOffer].title}</DetailTitle>
            <DetailDescription>{offerData[selectedOffer].description}</DetailDescription>
          </motion.div>
        )}
      </DetailSection>

      <CTAButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Your Journey
      </CTAButton>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin-bottom:20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const OfferItem = styled(motion.div)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #4a90e2;
  margin-bottom: 1rem;
`;

const OfferTitle = styled.h3`
  font-size: 1rem;
  color: #333;
`;

const DetailSection = styled.div`
  margin-top: 2rem;
  min-height: 60px;
`;


const DetailTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const DetailDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const CTAButton = styled(motion.button)`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  margin-top:10px;
`;

export default ArtOfLivingOffers;