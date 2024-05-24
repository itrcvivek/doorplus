import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./mobileSearchstyle.css";

const MobileSearch = () => {
  return (
    <div style={{ padding: "10px" }} className="MobileSearch-nav">
      <TextField
        borderRadius="20px"
        fullWidth
        placeholder="Search service"
        InputProps={{
          endAdornment: <SearchIcon sx={{ color: "black" }} />,
        }}
      />
    </div>
  );
};

export default MobileSearch;
