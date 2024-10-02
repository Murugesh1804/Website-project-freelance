// Dashboard.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftPanel from './LeftPanel';
import MainContent from './MainContent';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('User Details');
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the admin token is available in local storage
    const token = localStorage.getItem('Admin-Token');
    if (!token) {
      navigate('/login'); // If no token, navigate to the login page
    }
  }, [navigate]);
  const handleLogout = () => {
   localStorage.removeItem('Admin-Token');
   localStorage.removeItem('Admin-user');

    navigate('/login');
  };

  return (
    <DashboardContainer>
      <LeftPanel activeSection={activeSection} setActiveSection={setActiveSection} handleLogout={handleLogout} />
      <MainContent activeSection={activeSection} />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  font-family: 'Arial', sans-serif;
  color: #333;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export default Dashboard;
