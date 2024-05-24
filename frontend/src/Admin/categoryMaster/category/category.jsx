import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TopNav from '../../sidebar/navbar';
import Sidebar from '../../sidebar/sidebar';
import CategoryCreate from './categoryForm';
import CategoryList from './categoryList';
import "../../common/commonStyle.css"

const Category = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <>
      <TopNav />
      <Box height={70} />
      {loading ? (
        <div className="loading">
           <div className="loader"></div>
        </div>
      ) : (
        <div className="bottomToTop">
          <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box component="main" sx={{ flex: 1, p: 3 }}>
              <Tabs
                value={tabIndex}
                onChange={handleChange}
              >
                <Tab label="  Add Category" style={{ textTransform: "capitalize", fontSize:"18px"}} />
                <Tab label="Category Details" style={{ textTransform: "capitalize" ,fontSize:"18px"}} />
              </Tabs>
              {tabIndex === 0 && <CategoryCreate />}
              {tabIndex === 1 && <CategoryList />}
            </Box>
          </Box>
        </div>
      )}
        
    </>
  );
}

export default Category;
