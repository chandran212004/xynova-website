import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { theme } from '../styles/GlobalStyles';
import logoImage from '../assets/images/xynova-logo.png';

const FooterContainer = styled.footer`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 60px 0 20px;
  margin-top: 100px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.accent};
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
`;

const LogoSection = styled(FooterSection)`
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: ${theme.colors.white};
  }

  .logo-image {
    height: 40px;
    width: auto;
    object-fit: contain;
  }

  .tagline {
    color: ${theme.colors.accent};
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    color: ${theme.colors.lightGray};
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;

  li {
    margin-bottom: 12px;
    
    a {
      color: ${theme.colors.lightGray};
      transition: all 0.3s ease;
      font-size: 0.95rem;
      
      &:hover {
        color: ${theme.colors.accent};
        padding-left: 5px;
      }
    }
  }
`;

const ContactInfo = styled.div`
  .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
    color: ${theme.colors.lightGray};
    font-size: 0.9rem;

    .icon {
      color: ${theme.colors.accent};
      font-size: 1rem;
      width: 20px;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    width: 40px;
    height: 40px;
    background: ${theme.colors.accent};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    transition: all 0.3s ease;
    font-size: 1.1rem;

    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(253, 185, 19, 0.2);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.lightGray};
  font-size: 0.9rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const FooterLinks2 = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: ${theme.colors.lightGray};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${theme.colors.accent};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <LogoSection>
            <div className="logo">
              <img src={logoImage} alt="XYNOVA TECH Logo" className="logo-image" />
              XYNOVA TECH
            </div>
            <div className="tagline">Innovation in Technology</div>
            <p>
              Your trusted partner for innovative mobile app development,
              web solutions, and enterprise automation.
            </p>
            <SocialMedia>
              <a href="mailto:xynovatech@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com/xynovatech?igsh=MWR1cTB4Z2JqOGFlMw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/917904306232" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </SocialMedia>
          </LogoSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Services</h3>
            <FooterLinks>
              <li><Link to="/services">Mobile App Development</Link></li>
              <li><Link to="/services">Web Solutions</Link></li>
              <li><Link to="/services">Enterprise Automation</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Contact</h3>
            <ContactInfo>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>xynovatech@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>+91 7904306232</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>Madurai, Tamil Nadu</span>
              </div>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <div>© 2025 XYNOVA TECH. All rights reserved.</div>
          <FooterLinks2>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </FooterLinks2>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
