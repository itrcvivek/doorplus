import { Grid, Typography, Paper } from '@mui/material';
import React from 'react';

const BookingDetails = () => {
  // Dummy data for demonstration
  const bookings = [
    {
      dateTime: '2024-04-23 10:00 AM',
      category: 'Appointment',
      subcategory: 'Dentist',
    },
    {
      dateTime: '2024-04-25 02:30 PM',
      category: 'Meeting',
      subcategory: 'Project Review',
    },
    // Add more bookings as needed
  ];

  return (
    <Grid container spacing={2}>
      {bookings.map((booking, index) => (
        <Grid item xs={12} key={index}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Date Time: {booking.dateTime}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Category: {booking.category}
            </Typography>
            <Typography variant="subtitle1">
              Subcategory: {booking.subcategory}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookingDetails;
