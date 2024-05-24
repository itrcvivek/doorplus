import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./cleanMobStyle.css"
import mensSaloon from "../../../../assets/mensSaloon.jpg";
import womenSaloon from "../../../../assets/womensSaloon.jpg";
import FurnitureRepair from "../../../../assets/FurnitureRepair.jpg";

const AllCategoryData = [
  {
    id: 1,
    title: "Men's Saloon",
    image: mensSaloon,
  },
  {
    id: 2,
    title: "Women's Saloon",
    image: womenSaloon,
  },
  {
    id: 3,
    title: "Furniture Repair",
    image: FurnitureRepair,
  },
  {
    id: 4,
    title: "Women's Saloon",
    image: womenSaloon,
  },
  {
    id: 5,
    title: "Furniture Repair",
    image: FurnitureRepair,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items:2.2
  }
};

const HomeRepair = () => {
  return (
    <div className="clean-mob-pd" style={{ padding: "25px" ,marginBottom:"60px" }}>
      <Typography style={{ padding: "4px", fontSize: "36px", color: "black" ,fontWeight:"600", lineHeight:"100px",
      fontFamily:'sans-serif' }}>
       House Cleaning
      </Typography>

        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true} 
          autoPlaySpeed={5000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass='item'
          showDots={false}
        >
          {AllCategoryData.map((category) => (
            <Grid item xs={4} md={4} sm={4} key={category.id}>
              <Card
                className="clean-mob-style"
                elevation={0}
                style={{
                  height: "210px",
                  margin: "0px 10px 10px 0px",
                }}
              >
                <CardMedia
                  component="img"
                  image={category.image}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Card>
              <Typography
                style={{ color: "grey", fontSize: "15px",}}
                className="cus-bottom-title"
              >
                {category.title}
              </Typography>
            </Grid>
          ))}
        </Carousel>
     
    </div>
  );
};

export default HomeRepair;
