import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #FAFBFC 0%, #F8FAFC 100%);
    color: #1E293B;
    overflow-x: hidden;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.2;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    .section {
      padding: 60px 0;
    }
    .container {
      padding: 0 15px;
    }
  }
`;

export const theme = {
  colors: {
    primary: '#1E293B', // Professional dark slate
    secondary: '#F8FAFC', // Light background
    accent: '#F97316', // Professional orange
    blue: '#3B82F6', // Modern blue
    white: '#FFFFFF',
    lightGray: '#F1F5F9',
    darkTeal: '#0F172A', // Deep dark for text
    textPrimary: '#1E293B', // Main text color
    textSecondary: '#64748B', // Secondary text color
    border: '#E2E8F0' // Border color
  },
  fonts: {
    heading: "'Impact', 'Bebas Neue', sans-serif",
    body: "'Inter', 'Roboto', sans-serif"
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px'
  }
};

export const Button = styled.button`
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  
  ${props => props.primary ? `
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.accent};
    &:hover {
      background: #ea580c;
      border-color: #ea580c;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(249, 115, 22, 0.25);
    }
  ` : `
    background: transparent;
    color: ${theme.colors.textPrimary};
    border: 2px solid ${theme.colors.border};
    &:hover {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(30, 41, 59, 0.15);
    }
  `}

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  color: ${theme.colors.textPrimary};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${theme.colors.accent};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: 16px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid ${theme.colors.border};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${theme.colors.accent};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${theme.colors.accent};
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(253, 185, 19, 0.05);
    animation: float 20s ease-in-out infinite;
  }

  &::before {
    width: 300px;
    height: 300px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  &::after {
    width: 200px;
    height: 200px;
    bottom: 20%;
    right: 10%;
    animation-delay: 10s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
`;