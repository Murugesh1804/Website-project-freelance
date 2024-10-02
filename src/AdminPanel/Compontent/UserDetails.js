// UserDetails.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Api from '../../Api/Api';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [filteredUserDetails, setFilteredUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Api.get('/Admin/alluser');
        setUserDetails(response.data);
        setFilteredUserDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch user details', err);
        setError('Failed to load user details.');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredUserDetails(userDetails);
    } else {
      const filtered = userDetails.filter((user) =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase()) ||
        user.studentId.toString().includes(term)
      );
      setFilteredUserDetails(filtered);
    }
  };

  if (loading) {
    return <LoadingMessage>Loading user details...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{7,15}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <Section>
      <SectionTitle>User Details</SectionTitle>
      <SearchInput
        type="text"
        placeholder="Search by name, email, or student ID..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <StyledTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Student ID</th>
            <th>Age</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserDetails.length > 0 ? (
            filteredUserDetails.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td> {/* Display the index + 1 as the user ID count */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.studentId}</td>
                <td>{user.age}</td>
                <td>{isValidPhoneNumber(user.mobileno) ? user.mobileno : 'Invalid'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </Section>
  );
};

// Styled components
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

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
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

const LoadingMessage = styled.p`
  font-size: 16px;
  color: #4A90E2;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: #dc2626;
  text-align: center;
`;

export default UserDetails;
