import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { User, DollarSign, BookOpen, AlertCircle, Activity } from 'lucide-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Admin from "../Assest/teacher1.jpg";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('User Details');
  const [userDetails, setUserDetails] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState({ totalCollection: 0, totalEnrollments: 0, activeUsers: 0 });

  useEffect(() => {
    // Simulated data fetching (same as before)
    setUserDetails([
      { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-02-20' },
    ]);

    setTransactions([
      { id: 1, userId: 1, courseId: 1, amount: 99.99, date: '2024-03-01' },
      { id: 2, userId: 2, courseId: 2, amount: 149.99, date: '2024-03-05' },
    ]);

    setCourses([
      { id: 1, title: 'Mindfulness Meditation', students: 150, revenue: 14999 },
      { id: 2, title: 'Yoga for Beginners', students: 200, revenue: 19999 },
    ]);

    setStats({
      totalCollection: 34998,
      totalEnrollments: 350,
      activeUsers: 280
    });
  }, []);

  const chartData = [
    { name: 'Mindfulness', students: 150 },
    { name: 'Yoga', students: 200 },
    { name: 'Breathing', students: 120 },
    { name: 'Meditation', students: 180 },
  ];

  return (
    <DashboardContainer>
      <LeftPanel>
        <AdminInfo>
          <AdminAvatar alt="Admin Avatar" />
          <h3>Admin Name</h3>
          <p>admin@example.com</p>
        </AdminInfo>
        {[
          { icon: <User size={20} />, label: 'User Details' },
          { icon: <DollarSign size={20} />, label: 'User Transactions' },
          { icon: <BookOpen size={20} />, label: 'Add Course' },
          { icon: <AlertCircle size={20} />, label: 'Course Management' },
          { icon: <Activity size={20} />, label: 'User Activity' },
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
      </LeftPanel>
      <MainContent>
        <TopStats>
          {Object.entries(stats).map(([key, value]) => (
            <StatCard key={key}>
              <StatTitle>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</StatTitle>
              <StatValue>{typeof value === 'number' && key.includes('Collection') ? `$${value.toLocaleString()}` : value}</StatValue>
            </StatCard>
          ))}
        </TopStats>
        {activeSection === 'User Details' && (
          <Section>
            <SectionTitle>User Details</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Join Date</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </Section>
        )}
        {activeSection === 'User Transactions' && (
          <Section>
            <SectionTitle>User Transactions</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Course ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.userId}</td>
                    <td>{transaction.courseId}</td>
                    <td>${transaction.amount}</td>
                    <td>{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </Section>
        )}
        {activeSection === 'Add Course' && (
          <Section>
            <SectionTitle>Add Course</SectionTitle>
            <Form>
              <FormGroup>
                <label htmlFor="courseTitle">Course Title</label>
                <input type="text" id="courseTitle" name="courseTitle" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="courseDescription">Course Description</label>
                <textarea id="courseDescription" name="courseDescription" rows="4" required></textarea>
              </FormGroup>
              <FormGroup>
                <label htmlFor="coursePrice">Course Price</label>
                <input type="number" id="coursePrice" name="coursePrice" min="0" step="0.01" required />
              </FormGroup>
              <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
                Add Course
              </SubmitButton>
            </Form>
          </Section>
        )}
        {activeSection === 'Course Management' && (
          <Section>
            <SectionTitle>Course Management</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Students</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.students}</td>
                    <td>${course.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </Section>
        )}
        {activeSection === 'User Activity' && (
          <Section>
            <SectionTitle>User Activity</SectionTitle>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" fill="#4A90E2" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Section>
        )}
      </MainContent>
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

const LeftPanel = styled.div`
  width: 250px;
  background-color: #4A90E2;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
  backgrpund-image : url(${Admin});
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

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const TopStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  width: 30%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatTitle = styled.div`
  font-size: 14px;
  color: #666;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4A90E2;
  margin-top: 5px;
`;

const Section = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #4A90E2;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  th {
    background-color: #4A90E2;
    color: white;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #666;
  }

  input, textarea, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #4A90E2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-start;
`;

const ChartContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default AdminDashboard;