import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaArrowRight,
  FaMobile,
  FaGlobe,
  FaCogs,
  FaPalette,
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt
} from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiFirebase, SiTensorflow, SiFlutter, SiPostgresql, SiDocker, SiKubernetes } from 'react-icons/si';
import { theme, Button, SectionTitle, Card } from '../styles/GlobalStyles';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
  background: linear-gradient(135deg, 
    #ffffff 0%, 
    #f8f9fa 30%, 
    rgba(232, 234, 246, 0.4) 60%,
    rgba(200, 210, 255, 0.3) 80%,
    rgba(180, 190, 255, 0.2) 100%
  );
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  z-index: 2;
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 30px;
    color: ${theme.colors.textPrimary};

    .highlight {
      background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: block;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 3rem;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }

  .tagline {
    font-size: 1.1rem;
    color: ${theme.colors.textSecondary};
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 40px;
    max-width: 500px;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 400px;
    order: -1;
  }
`;

const HeroImage = styled(motion.img)`
  width: 100%;
  max-width: 550px;
  height: auto;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .floating-icon {
    position: absolute;
    color: ${theme.colors.accent};
    opacity: 0.7;
    animation: float 6s ease-in-out infinite;
  }

  .icon-1 { top: 20%; left: 10%; animation-delay: 0s; }
  .icon-2 { top: 60%; right: 10%; animation-delay: 2s; }
  .icon-3 { bottom: 20%; left: 20%; animation-delay: 4s; }
  .icon-4 { top: 10%; right: 30%; animation-delay: 1s; }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const TechStackSection = styled.section`
  padding: 100px 0;
  background: rgba(26, 35, 50, 0.3);
  position: relative;
`;

const TechStackContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const TechStackTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${theme.colors.textPrimary};
  font-weight: bold;
`;

const TechStackSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 0 10px;
  }
`;

const TechIcon = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 16px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:hover {
    border-color: ${theme.colors.accent};
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .icon {
    font-size: 2.5rem;
    color: ${theme.colors.accent};
  }

  .name {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${theme.colors.textPrimary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 20px 10px;
    
    .icon {
      font-size: 2rem;
    }
    
    .name {
      font-size: 0.8rem;
    }
  }
`;

const ServicesSection = styled.section`
  padding: 100px 0;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled(Card)`
  text-align: center;
  
  .icon {
    font-size: 3rem;
    color: ${theme.colors.accent};
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: ${theme.colors.textPrimary};
  }

  p {
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const StatsSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #F8FAFC 0%, #E8EAF6 100%);
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  .number {
    font-size: 3rem;
    font-weight: bold;
    color: ${theme.colors.accent};
    margin-bottom: 10px;
  }

  .label {
    font-size: 1.1rem;
    color: ${theme.colors.textPrimary};
    font-weight: 600;
  }
`;

const Home = () => {
  const techStack = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <FaDatabase />, name: 'MySQL' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <SiKubernetes />, name: 'Kubernetes' },
    { icon: <FaCogs />, name: 'DevOps' }
  ];

  const services = [
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with stunning UI/UX and robust functionality.'
    },
    {
      icon: <FaGlobe />,
      title: 'Web Solutions',
      description: 'Responsive, scalable web applications and websites that drive business growth.'
    },
    {
      icon: <FaCogs />,
      title: 'Enterprise Automation',
      description: 'Intelligent automation solutions to streamline operations and improve efficiency.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates memorable digital experiences and drives engagement.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Next-Gen Technology<br /><span className="highlight">Starts Here</span>
            </motion.h1>

            <motion.p
              className="tagline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform your business with cutting-edge mobile apps, web solutions,
              and AI-powered automation. We craft innovative digital experiences
              that drive growth and success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ButtonGroup>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Button primary>
                    <FaRocket />
                    Our Services
                  </Button>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <Button>
                    Learn More
                    <FaArrowRight />
                  </Button>
                </Link>
              </ButtonGroup>
            </motion.div>
          </HeroText>

          <HeroVisual>
            <HeroImage
              src="/hero-illustration.png"
              alt="XYNOVA Technology Solutions"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </HeroVisual>
        </HeroContent>
      </HeroSection>

      <TechStackSection>
        <TechStackContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TechStackTitle>TECHNOLOGY STACK</TechStackTitle>
            <TechStackSubtitle>
              Cutting-edge technologies powering scalable, enterprise-grade solutions
            </TechStackSubtitle>
          </motion.div>

          <TechGrid>
            {techStack.map((tech, index) => (
              <TechIcon
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">{tech.icon}</div>
                <div className="name">{tech.name}</div>
              </TechIcon>
            ))}
          </TechGrid>
        </TechStackContainer>
      </TechStackSection>

      <ServicesSection>
        <ServicesContainer>
          <SectionTitle>Our Services</SectionTitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard>
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </ServiceCard>
              </motion.div>
            ))}
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>

      <StatsSection>
        <StatsContainer>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </StatItem>
            ))}
          </StatsGrid>
        </StatsContainer>
      </StatsSection>
    </HomeContainer >
  );
};

export default Home;
