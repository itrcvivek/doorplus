import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Card, CardMedia } from "@mui/material";

// Import your images
import mensSaloon from "../../assets/mensSaloon.jpg";
import womenSaloon from "../../assets/womensSaloon.jpg";
import FurnitureRepair from "../../assets/FurnitureRepair.jpg";
import houseClean from "../../assets/house clean.jpg";
import electronics from "../../assets/electronics.jpg";

const images = [
  { src: mensSaloon, title: "Men's Salon" },
  { src: womenSaloon, title: "Women's Salon" },
  { src: FurnitureRepair, title: "Furniture Repair" },
  { src: houseClean, title: "House Cleaning" },
  { src: electronics, title: "Electronics Repair" },
  { src: FurnitureRepair, title: "Furniture Repair" },
  { src: houseClean, title: "House Cleaning" },
  { src: electronics, title: "Electronics Repair" },
];

const MyGrid = () => {
  return (
    <div style={{ padding: "20px" }}>
        <Typography style={{ padding: "4px", fontSize: "15px", color: "black" }}>
        All Category
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {images.slice(0, 5).map((image, index) => (
            <Grid item xs={4} md={2} sm={4} key={index}>
              <Card >
                <CardMedia
                  className="allcat-responsive-card"
                  sx={{ height: 200 }}
                  image={image.src}
                  title={image.title}
                />
              </Card>
              <Typography
              style={{ color: "grey", fontSize: "15px", padding: "5px" }}
              className="cus-bottom-title"
            >
                {image.title}
              </Typography>
            </Grid>
          ))}
          <Grid item xs={4} md={2} sm={4}>
            <Card
              className="allcat-responsive-card"
              elevation={0}
              style={{
                height: "200px",
                background: "rgb(255, 231, 217)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  color: "rgb(122, 12, 46)",
                  fontSize: "15px",
                  padding: "5px",
                }}
                className="cus-bottom-title"
              >
                view all
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MyGrid;
