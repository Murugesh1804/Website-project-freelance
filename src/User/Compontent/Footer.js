import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>© 2024 Your Company. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff; /* White background */
  border-top: 1px solid #eaeaea; /* Optional border for a subtle separation */
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #333; /* Dark text for contrast */
  text-align: center;
`;

export default Footer;
