import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import "./electronicStyle.css";

import mensSaloon from "../../../../assets/mensSaloon.jpg";
import womenSaloon from "../../../../assets/womensSaloon.jpg";
import FurnitureRepair from "../../../../assets/FurnitureRepair.jpg";
import houseClean from "../../../../assets/house clean.jpg";
//import electronics from "../../../../assets/electronics.jpg";

const images = [
  { src: mensSaloon, title: "Men's Salon" },
  { src: womenSaloon, title: "Women's Salon" },
  { src: FurnitureRepair, title: "Furniture Repair" },
  { src: houseClean, title: "House Cleaning" },
];

const Electronics = () => {
  return (
    <div className="electronic-mob-pd" style={{ padding: "25px" }}>
      <Typography style={{ padding: "4px", fontSize: "36px", color: "black" ,fontWeight:"600", lineHeight:"100px",
      fontFamily:'sans-serif' }}>
        Electronics Service
      </Typography>
      <Grid container spacing={1}>
        {images.map((item, index) => (
          <Grid key={index} item xs={4} md={3} sm={3}>
            <Card
              className="electronic-mob-style"
              elevation={0}
              style={{
                borderRadius: "5px",
                height: "210px",
                background: "lightpink",
              }}
            >
              <CardMedia
                component="img"
                image={item.src}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Typography
              style={{ color: "grey", fontSize: "15px", padding: "5px" }}
              className="cus-bottom-title"
            >
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Electronics;
