// MainContent.js
import React from 'react';
import styled from 'styled-components';
import UserDetails from '../Compontent/UserDetails';
import UserTransactions from '../Compontent/UserTransactions';
import AddCourse from '../Compontent/AddCourse';
import UserActivity from '../Compontent/UserActivity';
import StatsCard from '../Compontent/StatsCard';
import AdminAddQuestion from '../Compontent/AdminAddQuestion';
import AddUser from '../Compontent/AddUser'; // Import AddUser Component

const MainContent = ({ activeSection }) => {
  return (
    <ContentContainer>
      <StatsCard />
      {activeSection === 'User Details' && <UserDetails />}
      {activeSection === 'User Transactions' && <UserTransactions />}
      {activeSection === 'Add Question' && <AdminAddQuestion />}
      {activeSection === 'Course Management' && <AddCourse />}
      {activeSection === 'Add User' && <AddUser />} {/* Show AddUser component */}
      {activeSection === 'User Activity' && <UserActivity />}
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

export default MainContent;
