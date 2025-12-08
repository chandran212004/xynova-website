import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { theme } from '../styles/GlobalStyles';
import logoImage from '../assets/images/xynova-logo.png';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : `${theme.colors.primary}`};
  backdrop-filter: blur(10px);
  padding: 15px 0;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: ${props => props.scrolled ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid rgba(253, 185, 19, 0.2)'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.3)'};
  transform: ${props => props.scrolled ? 'translateY(0)' : 'translateY(0)'};
  
  @keyframes fadeIn {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.scrolled ? theme.colors.textPrimary : '#ffffff'};
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
  transition: all 0.3s ease;
  animation: logoGlow 3s ease-in-out infinite;

  &:hover {
    filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.6)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4));
    transform: scale(1.05);
  }

  @keyframes logoGlow {
    0%, 100% {
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
    }
    50% {
      filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.4)) drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
    }
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    left: ${props => props.isOpen ? '0' : '-100%'};
    top: 70px;
    flex-direction: column;
    background: ${theme.colors.secondary};
    width: 100%;
    padding: 40px 20px;
    gap: 30px;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? theme.colors.textPrimary : '#ffffff'};
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 10px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: ${theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.accent};
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    color: ${theme.colors.textPrimary};
    font-size: 1.1rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  color: ${props => props.scrolled ? theme.colors.textPrimary : '#ffffff'};
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Get the footer element
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Change color when footer is approaching (200px before it enters viewport)
        setScrolled(footerTop <= windowHeight + 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/" scrolled={scrolled}>
          <LogoImage src={logoImage} alt="XYNOVA TECH Logo" />
          XYNOVA TECH
        </Logo>

        <NavMenu isOpen={isOpen}>
          {navItems.map((item) => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                active={location.pathname === item.path}
                scrolled={scrolled}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>

        <Hamburger onClick={toggleMenu} scrolled={scrolled}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
