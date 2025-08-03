import React from 'react';

// Your color palette
const colors = {
  background: '#fcf9f7',
  foreground: '#CBDEFF',
  heading: '#8A77AE',
  body: '#2F243A',
  buttonBg: '#8A77AE',
  buttonText: '#FFFFFF',
};

// --- STYLES ---

const mainStyle = {
  backgroundColor: colors.background,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  padding: '20px 0',
};

const containerStyle = {
  backgroundColor: colors.foreground,
  margin: '0 auto',
  padding: '30px',
  borderRadius: '12px',
  maxWidth: '600px',
  border: '1px solid #b9d2fd',
};

const headerStyle = {
  textAlign: 'center',
  paddingBottom: '20px',
  borderBottom: `1px solid ${colors.heading}`,
};

const headingStyle = {
  color: colors.heading,
  fontSize: '28px',
  fontWeight: 'bold',
  margin: 0,
};

const sectionStyle = {
  marginTop: '30px',
};

const sectionTitleStyle = {
  color: colors.heading,
  fontSize: '20px',
  fontWeight: '600',
  marginBottom: '10px',
};

const detailItemStyle = {
  color: colors.body,
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '8px',
};

const linkStyle = {
    color: colors.heading,
    fontSize: '16px',
    textDecoration: 'underline',
};


const messageContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #b9d2fd',
};

const messageParagraphStyle = {
  color: colors.body,
  fontSize: '16px',
  lineHeight: '1.6',
  margin: 0,
  whiteSpace: 'pre-wrap', // Preserves line breaks
};

const footerStyle = {
  marginTop: '30px',
  paddingTop: '20px',
  textAlign: 'center',
  fontSize: '12px',
  color: colors.heading,
};


// --- COMPONENT ---

const ContactFormEmail = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <div style={mainStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={headingStyle}>New Message Received</h1>
        </div>
        
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Submission Details</h2>
          <ul>
            <li style={detailItemStyle}><strong>From:</strong> {name}</li>
            <li style={detailItemStyle}><strong>Email:</strong> <a href={`mailto:${email}`} style={linkStyle}>{email}</a></li>
            <li style={detailItemStyle}><strong>Subject:</strong> {subject}</li>
          </ul>
        </div>

        

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Message</h2>
          <div style={messageContainerStyle}>
            <p style={messageParagraphStyle}>{message}</p>
          </div>
        </div>

        <div style={footerStyle}>
          <p>Sent from the contact form on guardianpathways.co.uk</p>
        </div>
      </div>
    </div>
  );
};

export default ContactFormEmail;
