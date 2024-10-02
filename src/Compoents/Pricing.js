import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';

const pricingData = [
  {
    title: "Intro Session",
    price: 99,
    features: [
      "Common Survey",
      "Listing out problems",
      "Dimension of Life",
      "Understanding blocks",
      "Understanding Peace",
      "Process of Transformation",
      "Access to Questionaire",
      "Tips to start"
    ],
    color: "#4a90e2"
  },
  {
    title: "Ready for Change",
    price: 999,
    features: [
      "Reset Positive approach",
      "Reset Positive Thinking",
      "Understanding Body & Mind",
      "Stress Management",
      "Family & Career Wellness",
      "Daily Positive Framework",
      "Understanding Goal and Destiny",
      "Access to Questionaire",
      "Monitor your progress path"
    ],
    color: "#4a90e2"
  },
  {
    title: "Mind Voyage",
    price: 3450,
    features: [
      "Understanding states of mind",
      "Yogic Meditation Techniques",
      "Understanding Mind & Energy",
      "Resetting Goals, Ego, Thoughts",
      "Tuning the Mind",
      "Advanced stress management",
      "Bi-weekly sessions"
    ],
    color: "#f39c12"
  },
  {
    title: "Grand Awaken",
    price: 3550,
    features: [
      "Advanced Meditation Techniques",
      "Techniques to increase energy",
      "Understanding Mind & Universe",
      "Personal wellness coach",
      "Follow up mechanisms",
      "Priority support"
    ],
    color: "#2ecc71"
  },
];

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <Container>
      <Title>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Path for the Change
        </motion.span>
      </Title>
      <Subtitle>Tailored plans to support your journey in the Art of Celebrating Life</Subtitle>
      
      <PriceGrid>
        {pricingData.map((plan, index) => (
          <PriceCard
            key={index}
            onMouseEnter={() => setHoveredPlan(index)}
            onMouseLeave={() => setHoveredPlan(null)}
            onClick={() => setSelectedPlan(index)}
            as={motion.div}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <PlanTitle style={{ color: plan.color }}>{plan.title}</PlanTitle>
            <PriceRate>₹{plan.price.toFixed(0)}<span></span></PriceRate>   
            <FeatureList>
              {plan.features.map((feature, idx) => (
                <FeatureItem key={idx}>
                  <FaCheck color={plan.color} /> {feature}
                </FeatureItem>
              ))}
            </FeatureList>
            <PriceButton
              style={{ backgroundColor: plan.color }}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Choose Plan
            </PriceButton>
            {hoveredPlan === index && (
              <InfoIcon>
                <FaInfoCircle />
                <InfoTooltip>Click for more details</InfoTooltip>
              </InfoIcon>
            )}
          </PriceCard>
        ))}
      </PriceGrid>

      <AnimatePresence>
        {selectedPlan !== null && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlan(null)}
          >
            <ModalContent
              as={motion.div}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalClose onClick={() => setSelectedPlan(null)}><FaTimes /></ModalClose>
              <h2>{pricingData[selectedPlan].title}</h2>
              <p>Embark on your journey to inner peace with our {pricingData[selectedPlan].title} plan. This comprehensive package is designed to support your growth and well-being through the Art of Celebrating Life practices.</p>
              <h3>What's Included:</h3>
              <ul>
                {pricingData[selectedPlan].features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p>Start your transformative journey today for just ${pricingData[selectedPlan].price.toFixed(2)}/Course.</p>
              <ModalButton style={{ backgroundColor: pricingData[selectedPlan].color }}>
                Enroll Now
              </ModalButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin-top:30px;
  margin-bottom:30px;
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

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PriceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const PlanTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PriceRate = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    font-size: 1rem;
    color: #666;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const PriceButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const InfoIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #666;
  cursor: pointer;
`;

const InfoTooltip = styled.span`
  position: absolute;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${InfoIcon}:hover & {
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
`;

export default Pricing;