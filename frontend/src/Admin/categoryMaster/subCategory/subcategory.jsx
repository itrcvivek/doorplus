import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TopNav from '../../sidebar/navbar';
import Sidebar from '../../sidebar/sidebar';
import SubCategoryForm from './subCategoryForm';
import SubcategoryList from './subCategoryList';
import "../../common/commonStyle.css"

const SubCategory = () => {
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
                <Tab label="  Add SubCategory" style={{ textTransform: "capitalize", fontSize:"18px"}} />
                <Tab label="Sub CategoryList" style={{ textTransform: "capitalize" ,fontSize:"18px"}} />
              </Tabs>
              {tabIndex === 0 && <SubCategoryForm />}
              {tabIndex === 1 && <SubcategoryList />}
            </Box>
          </Box>
        </div>
      )}
        
    </>
  );
}

export default SubCategory;
