import React from "react";
import Banner from "../pages/banner/banner.jsx";
import Allcategory from "../pages/allCategory/Allcategory.jsx";
import HomeRepair from "../pages/HouseRepair/houseRepairService.jsx";
import Electronics from "../pages/ElectronicService/electronics.jsx";
import CleaningServices from "../pages/cleaningService/CleaningService.jsx"
import Navigation from "../inc/navigationBar/navigation.jsx";

const Home = () => {
  return (
    <>
    <Navigation/>
      <Banner />
      <Allcategory />
      <HomeRepair />
      <Electronics/>
      <CleaningServices/>
    </>
  );
};

export default Home;
