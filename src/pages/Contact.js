import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaPaperPlane,
  FaCalendarAlt
} from 'react-icons/fa';
import { theme, Button, Card } from '../styles/GlobalStyles';

const ContactContainer = styled.div`
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
  }
`;

const ContactSection = styled.section`
  padding: 100px 0;
`;

const ContactContainer2 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactForm = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: ${theme.colors.accent};
    font-weight: bold;
  }
  
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 8px;
    color: ${theme.colors.textPrimary};
    font-weight: 500;
    font-size: 0.95rem;
  }

  .required {
    color: ${theme.colors.accent};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  color: ${theme.colors.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  color: ${theme.colors.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  }

  option {
    background: ${theme.colors.white};
    color: ${theme.colors.textPrimary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  color: ${theme.colors.textPrimary};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 16px;
  font-size: 1.1rem;
  margin-top: 10px;
  
  ${props => props.loading && `
    opacity: 0.7;
    cursor: not-allowed;
  `}
`;

const ContactInfo = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: ${theme.colors.accent};
    font-weight: bold;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(253, 185, 19, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(253, 185, 19, 0.1);

  .icon {
    color: ${theme.colors.accent};
    font-size: 1.3rem;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .content {
    h4 {
      color: ${theme.colors.textPrimary};
      font-weight: 600;
      margin-bottom: 5px;
      font-size: 1rem;
    }

    p {
      color: ${theme.colors.textSecondary};
      line-height: 1.5;
      margin: 0;
      font-size: 0.95rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  a {
    width: 45px;
    height: 45px;
    background: ${theme.colors.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.textPrimary};
    font-size: 1.2rem;
    transition: all 0.3s ease;
    border: 2px solid ${theme.colors.border};

    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.white};
      border-color: ${theme.colors.accent};
      transform: translateY(-3px);
    }
  }
`;

const MapSection = styled.section`
  padding: 100px 0;
  background: rgba(26, 35, 50, 0.3);
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const MapTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${theme.colors.accent};
  font-weight: bold;
`;

const MapFrame = styled.div`
  background: ${theme.colors.secondary};
  border-radius: 15px;
  padding: 40px;
  margin: 40px auto 0;
  max-width: 800px;
  border: 2px solid rgba(253, 185, 19, 0.1);

  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 10px;
  }

  .map-placeholder {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    border-radius: 10px;
    color: ${theme.colors.textPrimary};
    font-size: 1.1rem;
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

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const message = `New Contact Form Submission%0A%0A` +
      `Name: ${formData.fullName}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone || 'Not provided'}%0A` +
      `Company: ${formData.company || 'Not provided'}%0A` +
      `Service: ${formData.service || 'Not specified'}%0A` +
      `Budget: ${formData.budget || 'Not specified'}%0A` +
      `Message: ${formData.message}`;

    // WhatsApp number (without + and spaces)
    const whatsappNumber = '917904306232';

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    // Reset form after short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 1000);
  };

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: ['Madurai', 'Tamilnadu']
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      content: ['xynovatech@gmail.com']
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      content: ['+91 7904306232', '+91 7604896261']
    },
    {
      icon: <FaClock />,
      title: 'Contact Hour',
      content: ['Anytime']
    }
  ];

  return (
    <ContactContainer>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Build Something Amazing Together
          </motion.p>
        </HeroContent>
      </HeroSection>

      <ContactSection>
        <ContactContainer2>
          <ContactGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm>
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <label>
                        Full Name <span className="required">*</span>
                      </label>
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <label>
                        Email Address <span className="required">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <label>Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label>Company Name</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company"
                      />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <label>Service Interested In</label>
                      <Input
                        type="text"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        placeholder="e.g., Mobile App Development, Web Solutions"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label>Project Budget</label>
                      <Input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., $10,000 - $25,000"
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <label>
                      Project Details <span className="required">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                      required
                    />
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    primary
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </SubmitButton>
                </form>
              </ContactForm>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactInfo>
                <h2>Contact Information</h2>
                {contactDetails.map((detail, index) => (
                  <ContactItem key={detail.title}>
                    <div className="icon">{detail.icon}</div>
                    <div className="content">
                      <h4>{detail.title}</h4>
                      {detail.content.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </ContactItem>
                ))}
              </ContactInfo>
            </motion.div>
          </ContactGrid>
        </ContactContainer2>
      </ContactSection>

      <MapSection>
        <MapContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MapTitle>Find Us Here</MapTitle>
            <MapFrame>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31509.234567890123!2d78.11234567890123!3d9.91234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1234567%3A0x1234567890abcdef!2sPeriyar%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="XYNOVA TECH Office Location"
              ></iframe>
            </MapFrame>
          </motion.div>
        </MapContainer>
      </MapSection>

      <CTASection>
        <CTAContainer>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Prefer to Schedule a Call?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book a free consultation with our experts to discuss your project
            requirements and get personalized recommendations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button primary>
              <FaCalendarAlt />
              Book Free Consultation
            </Button>
          </motion.div>
        </CTAContainer>
      </CTASection>
    </ContactContainer>
  );
};

export default Contact;
