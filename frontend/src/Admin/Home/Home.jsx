import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from "../sidebar/sidebar";
import TopNav from '../sidebar/navbar';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <TopNav />
      {loading ? (
        <div className="loading">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Box height={90} />
          <div>
            <Box sx={{ display: 'flex' }}>
              <Sidebar />
              <Box component="main" sx={{ flex: 1, p: 3 }}>
                <Typography variant="h5">
                  Welcome Back
                </Typography>
              </Box>
            </Box>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
