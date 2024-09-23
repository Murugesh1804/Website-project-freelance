import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import Api from '../../Api/Api'; // Adjust path as necessary
import upBoxImage from '../../Assest/bg1.jpg';
import course1 from '../../Assest/course-1.jpg';

const Stage = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [unlockedCourses, setUnlockedCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const userId = JSON.parse(localStorage.getItem('user'))?.studentId;

  useEffect(() => {
    if (userId) {
      fetchPurchasedCourses();
      fetchAllCourses();
    }
  }, [userId]);

  const fetchPurchasedCourses = async () => {
    try {
      const { data } = await Api.get(`/payment/purchased-courses/${userId}`);
      setPurchasedCourses(data);
      setUnlockedCourses(data);
    } catch (error) {
      console.error('Failed to fetch purchased courses', error);
    }
  };

  const fetchAllCourses = async () => {
    try {
      const { data } = await Api.get('/get-courses');
      setCourseDetails(data);
    } catch (error) {
      console.error('Failed to fetch courses', error);
    }
  };

  const handlePayment = async (courseId) => {
    try {
      // Retrieve course details
      const { data: course } = await Api.get(`/payment/get-course/${courseId}`);
      const { amount, courseName } = course;
  
      const { data: order } = await Api.post('/payment/create-order', {
        courseId,
        userId: userId,
        amount,
        courseName
      });
  
      const options = {
        key: 'rzp_test_epPmzNozAIcJcC',
        amount: order.amount,
        currency: 'INR',
        name: 'Course Payment',
        description: 'Purchase Course',
        order_id: order.id,
        handler: async (response) => {
          try {
            const verifyResponse = await Api.post('/payment/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              courseId,
             studentId:userId,
          
              amount,
              courseName
            });
  console.log("student id: ",userId)
            alert(verifyResponse.data.message);
            // Update the state to unlock the purchased course
            setUnlockedCourses(prev => [...prev, courseId]);
          } catch (error) {
            console.error('Payment verification failed', error);
            alert('Payment verification failed. Please try again.');
          }
        },
        theme: {
          color: '#3399cc'
        }
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation failed', error);
      alert('Payment initiation failed. Please try again.');
    }
  };

  return (
    <Container>
      <Box>
        <UpBox>
          <UpBoxImage src={upBoxImage} alt="Up Box" />
          <UpBoxContent>
            <Title>Welcome to the Stage</Title>
            <Description>
              Unlock each stage by purchasing the course to progress towards your learning goals.
            </Description>
            <Button1>Start Learning</Button1>
          </UpBoxContent>
        </UpBox>

        <DownBox>
          {courseDetails.map((course) =>
            renderStageCard(course.courseId, course.imageUrl, course.courseName, course.courseDescription)
          )}
        </DownBox>
      </Box>
    </Container>
  );

  function renderStageCard(courseId, image, levelTitle, description) {
    const isUnlocked = unlockedCourses.includes(courseId);

    return (
      <StageCard locked={!isUnlocked} key={courseId}>
        <StageImage src={image || course1} alt={`Stage ${courseId}`} />
        <StageContent>
          <LevelTitle>{levelTitle}</LevelTitle>
          <Description>{isUnlocked ? description : 'Purchase to unlock this course.'}</Description>
          {isUnlocked ? (
            <Button onClick={() => navigate(`/yogoform/${courseId}`)}>Start {levelTitle}</Button>
          ) : (
            <Button onClick={() => handlePayment(courseId)}>Buy {levelTitle}</Button>
          )}
        </StageContent>
      </StageCard>
    );
  }
}

// Styled-components remain the same as in your provided code

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #FEE3C1;
  padding-bottom: 50px;
  margin-top: 10px;
`;

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const UpBox = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
  }
`;

const UpBoxImage = styled.img`
  object-fit: cover;
  height: 150px;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const UpBoxContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #666;
  text-align: justify;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const DownBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  opacity: ${({ locked }) => (locked ? 0.6 : 1)};
`;

const StageImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const StageContent = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const LevelTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const Button = styled.button`
  padding: 13px 35px;
  margin-top: 10px;
  font-family: poppins;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const Button1 = styled.button`
  padding: 10px;
  max-width: 10rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #fda638;
  border: none;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 10px 20px;
    margin-left: 15%;
    border-radius: 30px;
  }
`;

export default Stage;