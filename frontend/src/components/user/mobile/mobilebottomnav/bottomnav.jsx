import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Link } from "react-router-dom";

function MobileBottomNavigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));
  const shouldShowNavigation = isMobile || isTablet;
  const [selectedIcon, setSelectedIcon] = useState("Home");

  if (!shouldShowNavigation) {
    return null;
  }

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <BottomNavigation
      showLabels
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: "1000",
      }}
    >
      <Link to="/">
        <BottomNavigationAction
          variant="text"
          label="Home"
          showLabel={true}
          icon={<HomeIcon style={{ color: selectedIcon === "Home" ? "black" : "gray" }} />}
          onClick={() => handleIconClick("Home")}
          style={{ marginTop: '8px' }}
        />
      </Link>

      <BottomNavigationAction
        label="Bookings"
        icon={<ViewListIcon style={{ color: selectedIcon === "Bookings" ? "black" : "gray" }} />}
        onClick={() => handleIconClick("Bookings")}
      />
      <Link to="/Profile" style={{ color: 'inherit', textDecoration: 'none' }}>
        <BottomNavigationAction
          label="Profile"
          showLabel={true}
          icon={<AccountCircleIcon style={{ color: selectedIcon === "Profile" ? "black" : "gray" }} />}
          onClick={() => handleIconClick("Profile")}
          style={{ marginTop: '8px' }}
        />
      </Link>


    </BottomNavigation>
  );
}

export default MobileBottomNavigation;
