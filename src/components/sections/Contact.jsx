import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { init } from '@emailjs/browser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', error: false });

  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', error: false });

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current
      );

      if (result.text === 'OK') {
        setStatus({ message: 'Message sent successfully!', error: false });
        form.current.reset();
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        message: 'Failed to send message. Please try again.',
        error: true
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm as="form" ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            required
            type="email"
            placeholder="Your Email"
            name="from_email"
            disabled={loading}
          />
          <ContactInput
            required
            type="text"
            placeholder="Your Name"
            name="from_name"
            disabled={loading}
          />
          <ContactInput
            required
            type="text"
            placeholder="Subject"
            name="subject"
            disabled={loading}
          />
          <ContactInputMessage
            required
            placeholder="Message"
            rows="4"
            name="message"
            disabled={loading}
          />
          {status.message && (
            <Desc style={{ 
              color: status.error ? '#ff4444' : '#44ff44',
              margin: '10px 0',
              fontSize: '14px'
            }}>
              {status.message}
            </Desc>
          )}
          <ContactButton
            type="submit"
            value={loading ? "Sending..." : "Send"}
            disabled={loading}
          />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
