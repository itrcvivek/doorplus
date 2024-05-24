import React from "react";
import { Card, CardMedia, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bannermobile.css";
import bannerImg1 from "../../../../assets/banner1.jpg"
import bannerImg2 from "../../../../assets/banner2.jpg";
import bannerImg3 from "../../../../assets/house clean.jpg";

const Banner = () => {
  const bannerImages = [bannerImg1, bannerImg2, bannerImg3];

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <>

     <div className="banner-mobile-pd" style={{ padding: "20px", marginTop:"30px"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12}>
          <Card
            className="mobile-card"
            elevation={0}
            style={{
              borderRadius: "30px",
              height: "400px",
            }}
          >
            <Slider {...settings}>
              {bannerImages.map((image, index) => (
                <div key={index}>
                  <CardMedia
                    className="banner-mobile"
                    component="img"
                    src={image}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "400px",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </Card>
        </Grid>
      </Grid>
    </div>
    </>
   
  );
};

export default Banner;
