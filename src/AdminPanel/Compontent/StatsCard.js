// StatsCard.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Api from '../../Api/Api';

const StatsCard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await Api.get('/Admin/stats');
        const data = response.data;
        setStats([
          { title: 'Total Users', value: data.totalUsers },
          { title: 'Total Courses', value: data.totalCourses },
          { title: 'User Enrollments', value: data.enrolledCourse }
        ]);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch stats', err);
        setError('Failed to load stats.');
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);
  
  if (loading) {
    return <LoadingMessage>Loading stats...</LoadingMessage>;
  }
  
  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <StatsContainer>
      {stats.map((stat) => (
        <StatCard key={stat.title}>
          <StatTitle>{stat.title}</StatTitle>
          <StatValue>{stat.value}</StatValue>
        </StatCard>
      ))}
    </StatsContainer>
  );
};

// Styled Components
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  width: 18%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    width: 45%; /* Adjust for smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for mobile devices */
  }
`;

const StatTitle = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #4A90E2;
`;

const LoadingMessage = styled.p`
  font-size: 16px;
  color: #4A90E2;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: #dc2626;
  text-align: center;
`;

export default StatsCard;
