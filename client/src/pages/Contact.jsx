import React, { useState } from "react";
import styled from "styled-components";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";
import { Button } from "@mui/material";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 16px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 32px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  color: white;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 16px ${({ theme }) => theme.shadow};
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 30};
  border-radius: 8px;
  font-size: 14px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 30};
  border-radius: 8px;
  font-size: 14px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SubmitButton = styled(Button)`
  && {
    background: ${({ theme }) => theme.primary};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: none;
    font-size: 16px;
    
    &:hover {
      background: ${({ theme }) => theme.primary + 'dd'};
    }
  }
`;

const CopyrightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;

const CopyrightText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin: 0;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Container>
      <Wrapper>
                 <div>
           <Title>Contact Developer</Title>
           <Subtitle>
             This is a student project developed as part of academic coursework. Feel free to reach out for any questions or feedback about the FitFlow application.
           </Subtitle>
         </div>

                 <ContentWrapper>
           <ContactInfo>
             <InfoCard>
               <IconWrapper>
                 <Email />
               </IconWrapper>
               <InfoContent>
                 <InfoTitle>Email</InfoTitle>
                 <InfoText>gulshannadaf789@gmail.com</InfoText>
               </InfoContent>
             </InfoCard>

             <InfoCard>
               <IconWrapper>
                 <Phone />
               </IconWrapper>
               <InfoContent>
                 <InfoTitle>Phone</InfoTitle>
                 <InfoText>+91 7829985006</InfoText>
               </InfoContent>
             </InfoCard>
           </ContactInfo>

                     <ContactForm>
             <FormTitle>Send Feedback</FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                variant="contained"
                startIcon={<Send />}
                fullWidth
              >
                Send Message
              </SubmitButton>
            </form>
          </ContactForm>
        </ContentWrapper>

                 <CopyrightSection>
           <CopyrightText>
             © 2025 All Rights Reserved. Developed by Rani Gulshan Nadaf
           </CopyrightText>
         </CopyrightSection>
      </Wrapper>
    </Container>
  );
};

export default Contact;
