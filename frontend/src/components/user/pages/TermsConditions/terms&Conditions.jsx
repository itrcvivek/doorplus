import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f9f9f9', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>
          Terms and Conditions
        </Typography>
        <Typography paragraph style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
          Welcome to [Your Home Appliance Service App Name]! These terms and conditions outline
          the rules and regulations for the use of our service.
        </Typography>
        <Typography paragraph style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
          By accessing this service, we assume you accept these terms and conditions. Do not
          continue to use [Your Home Appliance Service App Name] if you do not agree to take all of
          the terms and conditions stated on this page.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: '#333', fontSize: '20px', marginBottom: '10px' }}>
          Service Agreements
        </Typography>
        <Typography paragraph style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
          These terms and conditions govern your use of our home appliance service app and the
          agreements between you and [Your Home Appliance Service App Name].
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: '#333', fontSize: '20px', marginBottom: '10px' }}>
          Warranties
        </Typography>
        <Typography paragraph style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
          We provide warranties for services rendered, ensuring quality and reliability in our
          repairs and maintenance work.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: '#333', fontSize: '20px', marginBottom: '10px' }}>
          Liabilities
        </Typography>
        <Typography paragraph style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
          We shall not be liable for any damages arising from the use or inability to use our
          service, including but not limited to direct, indirect, incidental, or consequential
          damages.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: '#333', fontSize: '20px', marginBottom: '10px' }}>
          Payments
        </Typography>
        <Typography paragraph style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
          Payment for services rendered must be made in accordance with the terms specified in our
          payment policies. Failure to pay may result in the suspension or termination of
          services.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: '#333', fontSize: '20px', marginBottom: '10px' }}>
          User Responsibilities
        </Typography>
        <Typography paragraph style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
          Users are responsible for providing accurate information, maintaining the confidentiality
          of their account credentials, and complying with all applicable laws and regulations
          while using our service.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsAndConditions;
