import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FrequentlyQuestions = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How long will it take to get my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The delivery time varies depending on your location and the shipping method chosen. Please refer to our shipping policy for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept Visa, MasterCard, American Express, PayPal, and bank transfers. Please note that payment methods may vary depending on your location.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>How do I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your shipment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a hassle-free return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please refer to our return policy for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Do you offer international shipping?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer international shipping to most countries. However, shipping rates and delivery times may vary depending on your location. Please check our international shipping policy for more information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>How can I contact customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can contact our customer support team via email, phone, or live chat. Our customer support representatives are available 24/7 to assist you with any questions or concerns you may have.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FrequentlyQuestions;
