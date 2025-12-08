import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaMobile,
  FaGlobe,
  FaCogs,
  FaPalette
} from 'react-icons/fa';
import { theme, SectionTitle, Card, Button } from '../styles/GlobalStyles';

const ServicesContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.secondary} 100%);
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 20px;
    background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 3rem;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${theme.colors.textPrimary};
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;

const ServicesSection = styled.section`
  padding: 100px 0;
`;

const ServicesContainer2 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServiceCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;

  &:nth-child(even) {
    .content {
      order: 1;
    }
    .image {
      order: 2;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 30px;
    
    &:nth-child(even) {
      .content, .image {
        order: 0;
      }
    }
  }
`;

const ServiceContent = styled.div`
  .icon {
    font-size: 3rem;
    color: ${theme.colors.accent};
    margin-bottom: 20px;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #000000;
    font-weight: bold;
  }

  .description {
    font-size: 1.1rem;
    color: ${theme.colors.textPrimary};
    line-height: 1.6;
    margin-bottom: 25px;
  }

  .features {
    list-style: none;
    
    li {
      color: ${theme.colors.textPrimary};
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
      
      &::before {
        content: '✓';
        color: ${theme.colors.accent};
        font-weight: bold;
      }
    }
  }
`;

const ServiceImage = styled.div`
  height: 300px;
  background: ${theme.colors.secondary};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => props.bg ? `url(${props.bg})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: ${theme.colors.accent};
    z-index: 2;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 250px;
  }
`;

const ProcessSection = styled.section`
  padding: 100px 0;
  background: rgba(26, 35, 50, 0.3);
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProcessTimeline = styled.div`
  position: relative;
  padding: 40px 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.colors.accent};

    @media (max-width: ${theme.breakpoints.tablet}) {
      left: 20px;
    }
  }
`;

const ProcessStep = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;

  &:nth-child(even) {
    .step-content {
      order: 1;
      text-align: right;
    }
    .step-number {
      order: 2;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: auto 1fr;
    gap: 30px;
    
    &:nth-child(even) {
      .step-content, .step-number {
        order: 0;
      }
      .step-content {
        text-align: left;
      }
    }
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
    margin: 0;
  }
`;

const StepContent = styled.div`
  h4 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: ${theme.colors.white};
    font-weight: bold;
  }

  p {
    color: ${theme.colors.textPrimary};
    line-height: 1.6;
  }
`;

const CTASection = styled.section`
  padding: 100px 0;
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${theme.colors.accent};
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: ${theme.colors.textPrimary};
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;

const Services = () => {
  const services = [
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'We design and develop high-performance mobile applications for iOS and Android platforms. Our apps combine stunning UI/UX with robust functionality, delivering seamless experiences that users love. From concept to launch, we handle every aspect of mobile app creation.',
      features: [
        'Native & Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Maintenance & support'
      ],
      bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaGlobe />,
      title: 'Web Solutions',
      description: 'Create powerful web applications and websites that drive business growth. We build responsive, scalable, and secure web solutions using modern technologies. Whether you need a corporate website, e-commerce platform, or custom web application, we\'ve got you covered.',
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Progressive web apps (PWA)',
        'CMS integration'
      ],
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaCogs />,
      title: 'Enterprise Automation',
      description: 'Streamline your business operations with intelligent automation solutions. We help organizations optimize workflows, reduce manual tasks, and improve efficiency through custom automation systems that integrate seamlessly with existing infrastructure.',
      features: [
        'Process automation',
        'System integration',
        'Workflow optimization',
        'Custom software solutions'
      ],
      bgImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Create memorable digital experiences with our expert UI/UX design services. We craft intuitive, visually stunning interfaces that delight users and drive engagement. Our design process is user-centered, data-driven, and focused on achieving your business objectives.',
      features: [
        'User research & analysis',
        'Wireframing & prototyping',
        'Visual design',
        'Usability testing'
      ],
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements. Through detailed consultations and research, we develop a comprehensive project plan and strategy.'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes, mockups, and interactive prototypes. We focus on user experience and ensure the design aligns with your brand and business objectives.'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Our developers bring the design to life using cutting-edge technologies. We follow agile development practices and conduct thorough testing to ensure quality and performance.'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We handle the deployment process and provide ongoing support and maintenance. Our team ensures your solution continues to perform optimally and evolves with your business needs.'
    }
  ];

  return (
    <ServicesContainer>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR SERVICES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive Technology Solutions for Modern Businesses
          </motion.p>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <ServicesContainer2>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceCard>
                <ServiceContent className="content">
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="description">{service.description}</p>
                  <ul className="features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </ServiceContent>
                <ServiceImage className="image" bg={service.bgImage} />
              </ServiceCard>
            </motion.div>
          ))}
        </ServicesContainer2>
      </ServicesSection>

      <ProcessSection>
        <ProcessContainer>
          <SectionTitle>Our Process</SectionTitle>
          <ProcessTimeline>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <StepContent className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </StepContent>
                <StepNumber className="step-number">
                  {step.number}
                </StepNumber>
              </ProcessStep>
            ))}
          </ProcessTimeline>
        </ProcessContainer>
      </ProcessSection>
    </ServicesContainer>
  );
};

export default Services;
