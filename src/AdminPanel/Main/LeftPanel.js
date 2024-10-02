// LeftPanel.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { User, BookOpen, AlertCircle, LogOut, UserPlus } from 'lucide-react'; // Import UserPlus icon for add user
import Admin from "../../Assest/teacher1.jpg"; // Import the admin image

const LeftPanel = ({ activeSection, setActiveSection, handleLogout }) => {
  const [adminInfo, setAdminInfo] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch admin data from local storage
    const storedAdmin = JSON.parse(localStorage.getItem('Admin-user'));
    if (storedAdmin) {
      setAdminInfo({ name: storedAdmin.name, email: storedAdmin.email });
    }
  }, []);

  return (
    <PanelContainer>
      <AdminInfo>
        <AdminAvatar src={Admin} alt="Admin Avatar" />
        <h3>{adminInfo.name}</h3>
        <AdminEmail>{adminInfo.email}</AdminEmail>
      </AdminInfo>
      {[
        { icon: <User size={20} />, label: 'User Details' },
        { icon: <AlertCircle size={20} />, label: 'Add Question' },
        { icon: <BookOpen size={20} />, label: 'Course Management' },
        { icon: <UserPlus size={20} />, label: 'Add User' }, // New section for adding users
      ].map(({ icon, label }) => (
        <NavItem
          key={label}
          onClick={() => setActiveSection(label)}
          className={activeSection === label ? 'active' : ''}
        >
          {icon}
          {label}
        </NavItem>
      ))}
      <LogoutButton onClick={handleLogout}>
        <LogOut size={20} />
        Logout
      </LogoutButton>
    </PanelContainer>
  );
};

// Styled components

const PanelContainer = styled.div`
  width: 250px;
  background-color: #4A90E2;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AdminInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const AdminAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 3px solid white;
`;

const AdminEmail = styled.p`
  font-size: 14px;
  color: #e0e0e0;
`;

const NavItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover, &.active {
    background-color: #357ABD;
  }

  svg {
    margin-right: 10px;
  }
`;

const LogoutButton = styled(NavItem)`
  margin-top: auto;
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

export default LeftPanel;
