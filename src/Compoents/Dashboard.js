import React from 'react';
import styled from 'styled-components';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiSearchAlt2 } from 'react-icons/bi';

const DashboardContainer = styled.div`
  padding: 40px;
  background-color: #f7f8fc;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #222;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ManagerText = styled.div`
  font-size: 14px;
  color: #333;
  margin-right: 20px;
`;

const SearchIcon = styled(BiSearchAlt2)`
  font-size: 22px;
  color: #888;
  cursor: pointer;
`;

const MetricsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const MetricCard = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const MetricNumber = styled.h2`
  font-size: 36px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const MetricLabel = styled.p`
  font-size: 14px;
  color: #888;
`;

const ChartsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const ChartCard = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ChartTitle = styled.h3`
  font-size: 16px;
  color: #2c3e50;
`;

const MoreIcon = styled(FiMoreHorizontal)`
  font-size: 20px;
  color: #888;
  cursor: pointer;
`;

const EarningsSpending = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EarningCard = styled.div`
  flex: 1;
  background-color: #f7f8fc;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #888;
  }

  h2 {
    font-size: 22px;
    color: #2c3e50;
    margin: 10px 0;
  }
`;

const UserManagementSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f7f8fc;
  }
`;

const TableHeaderCell = styled.th`
  text-align: left;
  padding: 12px 8px;
  font-size: 14px;
  color: #2c3e50;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  text-align: left;
  padding: 12px 8px;
  font-size: 14px;
  color: #555;
  border-bottom: 1px solid #ddd;
`;

const CalendarSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-top: 40px;
  text-align: center;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header>
        <Title>Kiddos</Title>
        <UserProfile>
          <ManagerText>Manager</ManagerText>
          <SearchIcon />
        </UserProfile>
      </Header>

      <MetricsSection>
        <MetricCard>
          <MetricNumber>125</MetricNumber>
          <MetricLabel>Total Enrollments</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricNumber>98</MetricNumber>
          <MetricLabel>Active Users</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricNumber>12500</MetricNumber>
          <MetricLabel>Revenue</MetricLabel>
        </MetricCard>
      </MetricsSection>

      <ChartsSection>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>Course Management</ChartTitle>
            <MoreIcon />
          </ChartHeader>
          <EarningsSpending>
            <EarningCard>
              <p>Earnings</p>
              <h2>₹4000</h2>
            </EarningCard>
            <EarningCard>
              <p>Spent</p>
              <h2>₹3000</h2>
            </EarningCard>
          </EarningsSpending>
        </ChartCard>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>Weekly Revenue</ChartTitle>
            <MoreIcon />
          </ChartHeader>
        </ChartCard>
      </ChartsSection>

      <UserManagementSection>
        <TableHeader>
          <ChartTitle>User Management</ChartTitle>
          <MoreIcon />
        </TableHeader>
        <Table>
          <thead>
            <TableRow>
              <TableHeaderCell>NAME</TableHeaderCell>
              <TableHeaderCell>STATUS</TableHeaderCell>
              <TableHeaderCell>DATE</TableHeaderCell>
              <TableHeaderCell>PROGRESS</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Abdul</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>18 Apr 2021</TableCell>
              <TableCell><div style={{width: '80%', height: '8px', background: '#00aaff', borderRadius: '4px'}}></div></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Janani</TableCell>
              <TableCell>Started</TableCell>
              <TableCell>18 Apr 2021</TableCell>
              <TableCell><div style={{width: '50%', height: '8px', background: '#00aaff', borderRadius: '4px'}}></div></TableCell>
            </TableRow>
          </tbody>
        </Table>
      </UserManagementSection>

      <CalendarSection>
        <CalendarHeader>
          <ChartTitle>April</ChartTitle>
          <div>2021</div>
        </CalendarHeader>
      </CalendarSection>
    </DashboardContainer>
  );
};

export default Dashboard;
