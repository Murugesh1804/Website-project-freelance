import React from 'react';
import styled from 'styled-components';
import teacher1 from '../Assest/teacher1.jpg';
import teacher2 from '../Assest/teacher2.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 40px 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #111;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 13px;
    }
  }
`;

const BlogItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 4px;
  }

  p {
    font-size: 12px;
    color: #ccc;
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 50px;
      height: 50px;
    }

    p, a {
      font-size: 12px;
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;

  a {
    color: #fff;
    font-size: 24px;

    &:hover {
      color: #ddd;
    }
  }

  @media (max-width: 600px) {
    gap: 10px;

    a {
      font-size: 20px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <Card>
          <h3>Have a Question?</h3>
          <ContactInfo>
            <FaMapMarkerAlt />
            <p>Yoganetra Foundation, Chennai</p>
          </ContactInfo>
          <ContactInfo>
            <FaPhoneAlt />
            <p>+91 1800 260 1234</p>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <p>info@yoganetra.com</p>
          </ContactInfo>
        </Card>

        <Card>
          <h3>Recent Blog</h3>
          <BlogItem>
            <img src={teacher1} alt="Blog 1" />
            <div>
              <a href="#blog1">How to Improve Your Positivity</a>
              <p>Learn tips and tricks to enhance your positivity in everything you do.</p>
            </div>
          </BlogItem>
          <BlogItem>
            <img src={teacher2} alt="Blog 2" />
            <div>
              <a href="#blog2">Benefits of Auto Suggestion</a>
              <p>Reprogram your subconscious mind through auto suggestion.</p>
            </div>
          </BlogItem>
        </Card>

        <Card>
          <h3>Quick Links</h3>
          <ul style={{ padding: '0', listStyle: 'none' }}>
            <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
            <li><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
            <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </Card>

        <Card>
          <h3>Subscribe Us</h3>
          <p>Get the latest updates and offers.</p>
          <form>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '10px', 
                borderRadius: '4px', 
                border: 'none' 
              }} 
            />
            <button 
              type="submit" 
              style={{ 
                width: '100%', 
                padding: '10px', 
                backgroundColor: 'blue', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }}
            >
              Subscribe
            </button>
          </form>
          <h4>Connect with Us</h4>
          <SocialMediaIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </SocialMediaIcons>
        </Card>
      </FooterGrid>

      <p style={{ marginTop: '40px', fontSize: '12px', color: '#777' }}>© 2024 Kiddos. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
