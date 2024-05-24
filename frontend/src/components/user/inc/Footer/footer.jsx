import React from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';
import "./footer.css"

const footerStyles = {
  backgroundColor: '#f5f5f5',
  marginTop: '2rem',
  padding: '3rem 0',
};
const linkStyles = {
  textDecoration: 'none',
  fontFamily: 'Arial, sans-serif',
  padding: '0.5rem 0',
};



const Footer = () => {
  return (
    <footer style={footerStyles} className='footer-mobile'>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' color="textPrimary">
              About Door Plus
            </Typography>
            <Typography variant="body2" color="textSecondary">
          
              <Link href="#" color="inherit" style={linkStyles}>
                Who We Are
              </Link>
              <br />
              <Link href="#" color="inherit" style={linkStyles}>
                Report A fraud
              </Link>
              <br />
              <Link href="#" color="inherit" style={linkStyles}>
               Work With Us
              </Link>
              <br />
              <Link href="#" color="inherit" style={linkStyles}>
                Contact Us
              </Link>
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' color="textPrimary">
             Lear more
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Link href="#" color="inherit" style={linkStyles}>
                Terms
              </Link>
              <br />
              <Link href="#" color="inherit" style={linkStyles}>
                Security
              </Link>
              <br />
              <Link href="#" color="inherit" style={linkStyles}>
                Privacy
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: contact@example.com
              <br />
              Phone: +1 123-456-7890
              <br />
              Address: 123 Main Street, City, Country
            </Typography>
          </Grid>
         
        </Grid>
       
      </Container>
    </footer>
  );
};



export default Footer;



