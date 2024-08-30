import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "@fontsource/poppins";

const Nav = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 1; 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setIsOpen(false); 
    }
  };

  return (
    <Container scrolled={scrolled}>
      <MainContent>
        <NavSection>
          <Logo>
            <h2 href="#home" onClick={handleLinkClick}><span>Kiddos</span></h2>
          </Logo>
          <NavLinks>
            <NavLink href="#home" onClick={handleLinkClick}>Home</NavLink>
            <NavLink href="#about" onClick={handleLinkClick}>About</NavLink>
            <NavLink href="#teacher" onClick={handleLinkClick}>Teacher</NavLink>
            <NavLink href="#courses" onClick={handleLinkClick}>Courses</NavLink>
            <NavLink href="#pricing" onClick={handleLinkClick}>Pricing</NavLink>
            {!isLoggedIn && (
              <StyledLink to="/login">Login</StyledLink>
            )}
          </NavLinks>
        </NavSection>
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Close--Streamline-Ultimate.svg" height="24" width="24">
              <path d="m0.75 23.249 22.5 -22.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              <path d="M23.25 23.249 0.75 0.749" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Ascending-Sort-1--Streamline-Ultimate.svg" height="24" width="24">
              <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0.75 18.8999h7.3" stroke-width="1.5"></path>
              <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0.75 12h14.8" stroke-width="1.5"></path>
              <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0.75 5.1001h22.5" stroke-width="1.5"></path>
            </svg>
          )}
        </ToggleButton>
      </MainContent>
      {isOpen && <Backdrop onClick={toggleSidebar} />}
      <Sidebar ref={sidebarRef} isOpen={isOpen}>
        <SidebarContent>
          <SidebarLink href="#home" onClick={handleLinkClick}>Home</SidebarLink>
          <SidebarLink href="#about" onClick={handleLinkClick}>About</SidebarLink>
          <SidebarLink href="#teacher" onClick={handleLinkClick}>Teacher</SidebarLink>
          <SidebarLink href="#courses" onClick={handleLinkClick}>Courses</SidebarLink>
          <SidebarLink href="#pricing" onClick={handleLinkClick}>Pricing</SidebarLink>
          {!isLoggedIn && (
            <StyledLink to="/login">Login</StyledLink>
          )}
        </SidebarContent>
      </Sidebar>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const MainContent = styled.main`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const NavSection = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 30px;
`;

const Logo = styled.h1`
  color: black;
  margin: 0;
  margin-left:20px;

  h2 {
    font-family: poppins;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
  margin-right:40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  font-family: poppins;

  &:hover {
    color: #1EAAF1;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  font-family: poppins;

  &:hover {
    color: #1EAAF1;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 30px;
    
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 250px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  opacity: 0.95;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  gap: 40px;
`;

const SidebarLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 10px 0;
  font-size: 1.2rem;

  &:hover {
    text-decoration: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export default Nav;
