import { Grid, Typography } from '@mui/material';
import React from 'react';

const footer = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={2} style={{ background: "rgb(119 96 236)", padding: "10px" }}>
          <Grid item lg={12}>
              <Typography style={{ color: "#fff" ,textAlign:"center" }}>
                  Made by doorplus with ❤️
              </Typography>
          </Grid>
      </Grid>
    </div>
  );
};

export default footer;
