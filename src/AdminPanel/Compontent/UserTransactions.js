// UserTransactions.js
import React from 'react';
import styled from 'styled-components';

const UserTransactions = () => {
  const transactions = [
    { id: 1, userId: 1, courseId: 1, amount: 99.99, date: '2024-03-01' },
    { id: 2, userId: 2, courseId: 2, amount: 149.99, date: '2024-03-05' },
  ];

  return (
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
  );
};

// Styled Components
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

export default UserTransactions;
