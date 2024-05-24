import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid } from '@mui/material';
import "../common/commonStyle.css"

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <>
      <Box height={10} />
      <Grid container spacing={2}>
        <Grid item xs={6} lg={6} md={6}></Grid>
        <Grid item xs={6} lg={6} md={6}>
          <div style={{
            position: 'relative',
          
          }}>
            <input
              value={searchQuery}
              onChange={handleChange}
              type="text"
              placeholder="Search..."
              style={{
                width: '100%',
                padding: '20px 40px 20px 10px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '10px',
                border: "none",
                outline: 'none',
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"

              }}
            />
            <SearchIcon
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px', // Adjust the position of the icon
                transform: 'translateY(-50%)',
                color: 'rgb(132, 108, 249)'
              }}
            />
          </div>
        </Grid>
      </Grid>
    </>

  );
};

export default SearchBar;
