import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaLightbulb,
  FaAward,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaCogs
} from 'react-icons/fa';
import { theme, SectionTitle, Card } from '../styles/GlobalStyles';

const AboutContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.secondary} 100%);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

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
    margin-bottom: 30px;
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
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  height: 400px;
  background: ${theme.colors.secondary};
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 80px;
    background: ${theme.colors.accent};
    z-index: 2;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 300px;
    order: -1;
  }
`;

const QuoteSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, rgba(26, 35, 50, 0.95) 100%);
  text-align: center;
`;

const QuoteContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const QuoteText = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  color: ${theme.colors.white};
  margin-bottom: 40px;
  line-height: 1.3;

  .highlight {
    color: ${theme.colors.accent};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ConsultButton = styled(motion.button)`
  background: ${theme.colors.accent};
  color: ${theme.colors.primary};
  border: none;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(253, 185, 19, 0.3);

  &:hover {
    background: #e6a50d;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(253, 185, 19, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ContentSection = styled.section`
  padding: 100px 0;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 80px;
`;

const ContentBlock = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  &:nth-child(even) {
    .content {
      order: 1;
    }
    .visual {
      order: 2;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
    
    &:nth-child(even) {
      .content, .visual {
        order: 0;
      }
    }
  }
`;

const ContentText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${theme.colors.accent};
    font-weight: bold;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: ${theme.colors.textPrimary};
    line-height: 1.7;
    margin-bottom: 20px;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;

const ContentVisual = styled.div`
  background: ${theme.colors.secondary};
  border-radius: 15px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: ${theme.colors.accent};
    z-index: 2;
  }
`;

const ValuesSection = styled.section`
  padding: 100px 0;
  background: rgba(26, 35, 50, 0.3);
`;

const ValuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ValueCard = styled(Card)`
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

const TeamSection = styled.section`
  padding: 100px 0;
`;

const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const TeamIntro = styled.div`
  max-width: 800px;
  margin: 0 auto 60px;

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
  }
`;

const TeamStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 60px;
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

const About = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries and exploring new possibilities to deliver cutting-edge solutions.'
    },
    {
      icon: <FaAward />,
      title: 'Quality',
      description: 'Never compromising on excellence, ensuring every project meets the highest standards.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical business practices.'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'Partnering closely with clients to achieve mutual success and lasting relationships.'
    }
  ];

  const teamStats = [
    { number: '5+', label: 'Team Members' },
    { number: '6+', label: 'Technology Experts' },
    { number: '99%', label: 'Project Success Rate' }
  ];

  return (
    <AboutContainer>
      <QuoteSection>
        <QuoteContainer>
          <QuoteText
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            We <span className="highlight">Build</span> We <span className="highlight">Design</span> We <span className="highlight">Deliver</span>
          </QuoteText>
        </QuoteContainer>
      </QuoteSection>

      <HeroSection>
        <HeroContent>
          <HeroText>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT US
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              XynovaTech is a modern technology startup focused on building powerful digital solutions for startups, students, and growing businesses. We blend creativity, innovation, and technology to turn ideas into real-world products that create impact.
              <br /><br />
              We believe technology should be simple, affordable, and meaningful — and that's exactly what we deliver.
            </motion.p>
          </HeroText>

          <HeroImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </HeroContent>
      </HeroSection>



      <ContentSection>
        <ContentContainer>
          <ContentGrid>
            <ContentBlock
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContentText className="content">
                <h2>Who We Are</h2>
                <p>
                  XynovaTech is a team of passionate developers, designers, and problem-solvers who specialize in web development, mobile app development, AI projects, automation, and digital solutions.
                </p>
                <p>
                  Founded with a vision to support startups and students, we focus on creating smart, scalable, and future-ready products. From basic websites to advanced AI systems, we build solutions that solve real problems and drive real growth.
                </p>
              </ContentText>
              <ContentVisual
                className="visual"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
                }}
              />
            </ContentBlock>

            <ContentBlock
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContentText className="content">
                <h2>Our Mission</h2>
                <p>
                  Our mission is to empower startups and students with modern, cost-effective, and high-quality technology solutions. We aim to simplify complex ideas into powerful digital products that help our clients grow faster and smarter.
                </p>
                <p>
                  Every project we take is treated with full dedication, innovation, and responsibility — because our success is measured by our clients' success.
                </p>
              </ContentText>
              <ContentVisual
                className="visual"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
                }}
              />
            </ContentBlock>

            <ContentBlock
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ContentText className="content">
                <h2>Our Approach</h2>
                <p>
                  We follow a client-first and project-focused approach. We listen, understand, plan, and build with clarity and transparency at every stage.
                </p>
                <p>
                  From idea discussion to final delivery, we work closely with our clients to ensure clear communication, modern technology stack, on-time delivery, and complete project guidance.
                </p>
                <p>
                  Our approach is simple: Understand the problem, build the right solution, and deliver with quality.
                </p>
              </ContentText>
              <ContentVisual
                className="visual"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
                }}
              />
            </ContentBlock>
          </ContentGrid>
        </ContentContainer>
      </ContentSection>

      <ValuesSection>
        <ValuesContainer>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueCard>
                  <div className="icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ValueCard>
              </motion.div>
            ))}
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>

      <TeamSection>
        <TeamContainer>
          <TeamIntro>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Behind every great project is a great team. Our diverse group of professionals
              brings together years of experience, fresh perspectives, and a shared commitment
              to excellence. We're not just colleagues; we're collaborators, innovators, and
              problem-solvers working together to create exceptional digital experiences.
            </motion.p>
          </TeamIntro>

          <TeamStats>
            {teamStats.map((stat, index) => (
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
          </TeamStats>
        </TeamContainer>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;
