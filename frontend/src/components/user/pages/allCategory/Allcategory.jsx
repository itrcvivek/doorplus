import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./allcatstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../../action/catgoryAction";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const AllCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAllCategory } = useSelector((state) => state.getAllCategory);
  const [CategoryateData, setCategoryateData] = useState(() => getAllCategory);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    if (getAllCategory) {
      setCategoryateData(getAllCategory);
    }
  }, [getAllCategory]);

  const colors = ["rgb(255, 231, 217)", "rgb(217, 255, 231)", "rgb(231, 217, 255)", "rgb(255, 217, 231)", "rgb(217, 231, 255)"];
const navigateCategory=(obj)=>{
console.log(obj,"ggg")
navigate(`/category/${obj._id}`, { state: { obj } });
}
  return (
    <div className="all-cat-pd" style={{ padding: "35px" }}>
      <Typography style={{ padding: "4px", fontSize: "36px", color: "black" ,fontWeight:"600", lineHeight:"100px",
      fontFamily:'sans-serif'
       }}>
        All Category
      </Typography>
      <Grid container spacing={1}>
        {CategoryateData?.categories?.slice(0, 5).map((category, index) => (
          <Grid key={category._id} item xs={4} md={2} sm={4}>
            <Card
            onClick={()=>navigateCategory(category)}
            className="allcat-responsive-card"
            // className= {index===1?"card-box1":index===2?"Card-box2":index===3?"hhhh":index===4?"rrrrr":"kkkk"}
            elevation={0}
            style={{
              height: "180px",
              background: "rgb(255, 231, 217)", 
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              cursor:"pointer"
          
            }}
          >
            <CardMedia
              component="img"
              src={category.image}
              style={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
          </Card>
            <Typography
              style={{ color: "grey", fontSize: "15px", padding: "5px" }}
              className="cus-bottom-title"
            >
              {category.title}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={4} md={2} sm={4}>
          <Card
            className="allcat-responsive-card"
            elevation={0}
            style={{
              height: "180px",
              background: "rgb(255, 231, 217)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ArrowForwardIcon style={{ color: "rgb(122, 12, 46)", fontSize: "30px" }} />
            <Typography style={{ color: "rgb(122, 12, 46)", fontSize: "15px", padding: "5px" }} className='cus-bottom-title'>
              View All
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllCategory;
