import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEye,
  FaGithub,
  FaExternalLinkAlt,
  FaMobile,
  FaGlobe,
  FaCogs,
  FaPalette
} from 'react-icons/fa';
import { theme, Button } from '../styles/GlobalStyles';

const ProjectsContainer = styled.div`
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
    color: ${theme.colors.textPrimary};

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

const FilterSection = styled.section`
  padding: 60px 0 40px;
`;

const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 60px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 0 10px;
  }
`;

const FilterButton = styled(Button)`
  background: ${props => props.active ? theme.colors.accent : 'transparent'};
  color: ${props => props.active ? theme.colors.primary : '#000000'};
  border: 2px solid ${props => props.active ? theme.colors.accent : 'rgba(0, 0, 0, 0.2)'};
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 600;
  
  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.primary};
    border-color: ${theme.colors.accent};
    transform: translateY(-2px);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 10px 20px;
    font-size: 0.8rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.secondary};
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(253, 185, 19, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: ${theme.colors.accent};
    
    .project-overlay {
      opacity: 1;
    }
    
    .project-image {
      transform: scale(1.05);
    }
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background: ${theme.colors.accent};
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(26, 58, 58, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  opacity: 0;
  transition: all 0.3s ease;

  .action-btn {
    width: 50px;
    height: 50px;
    background: ${theme.colors.accent};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      background: #e6a50d;
    }
  }
`;

const ProjectContent = styled.div`
  padding: 25px;

  .category {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: ${theme.colors.accent};
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 10px;

    .icon {
      font-size: 1rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #000000;
    font-weight: bold;
  }

  .client {
    font-size: 0.9rem;
    color: ${theme.colors.textPrimary};
    margin-bottom: 15px;
  }

  .description {
    color: ${theme.colors.textPrimary};
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;

  .tag {
    background: rgba(253, 185, 19, 0.1);
    color: ${theme.colors.accent};
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(253, 185, 19, 0.3);
  }
`;

const CTASection = styled.section`
  padding: 100px 0;
  text-align: center;
  background: rgba(26, 35, 50, 0.3);
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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = [
    { name: 'All Projects', icon: null },
    { name: 'Web Apps', icon: <FaGlobe /> },
    { name: 'Mobile Apps', icon: <FaMobile /> },
    { name: 'Machine Learning', icon: <FaCogs /> }
  ];

  const projects = [
    // Web Apps
    {
      id: 1,
      title: 'Crick Hub',
      client: 'Sports Platform',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Comprehensive cricket management and analytics platform for fans and teams.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Career Guidance',
      client: 'Education Platform',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'AI-powered career guidance platform helping students make informed career decisions.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'AI Smart Travel Planner',
      client: 'Travel Tech',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Intelligent travel planning assistant with personalized itinerary recommendations.',
      image: '/travel-planner.png',
      technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'AI Smart TODO List With Voice',
      client: 'Productivity Tools',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Voice-enabled smart task management system with AI-powered prioritization.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Web Speech API', 'Firebase', 'AI/ML'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Mentor Path (AI)',
      client: 'EdTech Platform',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'AI-driven mentorship platform connecting learners with expert mentors.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Python', 'Machine Learning', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'AI Unique Screen Capture & Discussion Detector',
      client: 'EdTech Security',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Advanced proctoring solution detecting screen captures and discussions during online exams.',
      image: '/screen-capture.png',
      technologies: ['React', 'Python', 'Computer Vision', 'WebRTC'],
      link: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'AI UI Generator',
      client: 'Developer Tools',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Automated UI generation tool powered by AI for rapid prototyping.',
      image: '/ui-generator.png',
      technologies: ['React', 'GPT-4', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'AI Meeting Transcript Analyzer',
      client: 'Business Tools',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Intelligent meeting analysis tool extracting insights and action items from transcripts.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'NLP', 'Python', 'OpenAI'],
      link: '#',
      github: '#'
    },
    {
      id: 9,
      title: 'AI Email Automation Bot',
      client: 'Marketing Automation',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Smart email automation system with AI-powered personalization and scheduling.',
      image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'AI/ML', 'SendGrid'],
      link: '#',
      github: '#'
    },
    {
      id: 10,
      title: 'AI Code Reviewer',
      client: 'Developer Tools',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Automated code review system providing intelligent suggestions and best practices.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Python', 'GPT-4', 'GitHub API'],
      link: '#',
      github: '#'
    },
    {
      id: 11,
      title: 'AI Prompt Router',
      client: 'AI Infrastructure',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Intelligent routing system optimizing AI model selection based on prompt analysis.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Python', 'LLM', 'FastAPI'],
      link: '#',
      github: '#'
    },
    {
      id: 12,
      title: 'Application Analysis Generator',
      client: 'Business Analytics',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Comprehensive application analysis tool generating detailed insights and reports.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Python', 'Data Analytics', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 13,
      title: 'Social Media Content Creation and Automation',
      client: 'Marketing Platform',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'AI-powered social media content generator with automated posting and scheduling.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'OpenAI', 'Social APIs'],
      link: '#',
      github: '#'
    },
    {
      id: 14,
      title: 'Document Summarizer',
      client: 'Productivity Tools',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'AI-driven document summarization tool for quick insights from lengthy documents.',
      image: '/document-summarizer.png',
      technologies: ['React', 'NLP', 'Python', 'TensorFlow'],
      link: '#',
      github: '#'
    },
    {
      id: 15,
      title: 'PDF-Chatbot',
      client: 'Document Intelligence',
      category: 'Web Apps',
      icon: <FaGlobe />,
      description: 'Interactive chatbot for querying and extracting information from PDF documents.',
      image: '/pdf-chatbot.png',
      technologies: ['React', 'LangChain', 'OpenAI', 'Vector DB'],
      link: '#',
      github: '#'
    },
    // Mobile Apps
    {
      id: 16,
      title: 'Pet Care Hub',
      client: 'Pet Services',
      category: 'Mobile Apps',
      icon: <FaMobile />,
      description: 'Comprehensive pet care management app with health tracking and vet appointments.',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 17,
      title: 'Entertainment Ease',
      client: 'Entertainment Industry',
      category: 'Mobile Apps',
      icon: <FaMobile />,
      description: 'Seamless booking platform for movies, events, and entertainment venues.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Firebase', 'Stripe', 'Node.js'],
      link: '#',
      github: '#'
    },
    {
      id: 18,
      title: 'Book Hub',
      client: 'Reading Platform',
      category: 'Mobile Apps',
      icon: <FaMobile />,
      description: 'Digital library and book discovery app with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'AI/ML', 'MongoDB'],
      link: '#',
      github: '#'
    },
    // Machine Learning
    {
      id: 19,
      title: 'Skin Disease Detection',
      client: 'Healthcare AI',
      category: 'Machine Learning',
      icon: <FaCogs />,
      description: 'AI-powered skin disease detection system using computer vision and deep learning.',
      image: '/skin-detection.png',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Flask'],
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsContainer>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR PROJECTS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Success Stories & Portfolio
          </motion.p>
        </HeroContent>
      </HeroSection>

      <FilterSection>
        <FilterContainer>
          <FilterButtons>
            {filters.map((filter) => (
              <FilterButton
                key={filter.name}
                active={activeFilter === filter.name}
                onClick={() => setActiveFilter(filter.name)}
              >
                {filter.icon && <span style={{ marginRight: '8px' }}>{filter.icon}</span>}
                {filter.name}
              </FilterButton>
            ))}
          </FilterButtons>

          <ProjectsGrid>
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <ProjectImage bg={project.image} className="project-image" />

                  <ProjectContent>
                    <div className="category">
                      <span className="icon">{project.icon}</span>
                      {project.category}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="description">{project.description}</p>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </AnimatePresence>
          </ProjectsGrid>
        </FilterContainer>
      </FilterSection>

      <CTASection>
        <CTAContainer>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's bring your vision to life with our expertise and innovative approach.
            Contact us today to discuss your next project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button primary>
              <Link to="/contact#contact-form" style={{ textDecoration: 'none', color: 'inherit' }}>
                Get Started
              </Link>
            </Button>
          </motion.div>
        </CTAContainer>
      </CTASection>
    </ProjectsContainer>
  );
};

export default Projects;
