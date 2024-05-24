import React from "react";
import { Avatar, Grid, Typography, IconButton } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div style={{ padding: "10px", marginBottom: "60px" }}>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sm={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <Avatar
                            src=""
                            alt="Profile Picture"
                            sx={{ width: 120, height: 120 }}
                        />
                    </div>
                </Grid>
                <div style={{ display: "flex", margin: "auto" }}>
                    <Typography variant="h5" style={{ marginTop: "10px", marginLeft:"1px",fontSize: "20px" }}>
                        Alok
                    </Typography>
                    {/* <IconButton aria-label="edit">
                        <EditIcon sx={{ fontSize: 20, color: "black" ,marginTop:"2px" }} />
                    </IconButton> */}
                </div>
            </Grid>
            <Grid container spacing={0} style={{ padding: "10px" }}>
                <Grid item xs={12} md={12} sm={12} >
                    <div
                        style={{
                            display: "flex",
                            marginTop: "10px",
                            marginBottom: "5px",
                            padding: "4px",
                            borderRadius: "10px",
                            border: "0.2px solid lightgray"
                        }}
                    >
                        <IconButton aria-label="edit" color="black">
                            <div style={{ height: "40px", width: "40px", backgroundColor: "black", borderRadius: "50%" }}>
                                <SettingsOutlinedIcon sx={{ fontSize: 23, color: "white", marginTop: "8px" }} />
                            </div>
                        </IconButton>
                        <Typography
                            variant="h5"
                            style={{ marginLeft: "5px", fontWeight:"500", fontSize: "14px", color: "black", marginTop: "10px" }}
                        >
                         Account Setting
                           <Typography variant="body1" style={{ marginLeft: "1px", fontSize: "11px", color: "gray" }}>
                                Manage Your Account 
                            </Typography>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <div
                        style={{
                            display: "flex",
                            marginTop: "10px",
                            marginBottom: "5px",
                            padding: "4px",
                            borderRadius: "10px",
                            border: "0.2px solid lightgray"
                        }}
                    >
                        <IconButton aria-label="edit" color="black">
                            <div style={{ height: "40px", width: "40px", backgroundColor: "black", borderRadius: "50%" }}>
                                <LocationOnOutlinedIcon sx={{ fontSize: 23, color: "white", marginTop: "8px" }} />
                            </div>
                        </IconButton>
                        <Typography
                            variant="h5"
                            style={{ marginLeft: "5px", fontWeight:"500", fontSize: "14px", color: "black", marginTop: "10px" }}
                        >
                            Address
                           <Typography variant="body1" style={{ marginLeft: "1px", fontSize: "11px", color: "gray" }}>
                                Manage Address
                            </Typography>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <div
                        style={{
                            display: "flex",
                            marginTop: "10px",
                            marginBottom: "5px",
                            padding: "4px",
                            borderRadius: "10px",
                            border: "0.2px solid lightgray"
                        }}
                    >
                        <IconButton aria-label="edit" color="black">
                            <div style={{ height: "40px", width: "40px", backgroundColor: "black", borderRadius: "50%" }}>
                                <PrivacyTipIcon sx={{ fontSize: 23, color: "white", marginTop: "8px" }} />
                            </div>
                        </IconButton>
                        <Typography
                            variant="h5"
                            style={{ marginLeft: "5px", fontWeight:"500", fontSize: "14px", color: "black", marginTop: "10px" }}
                        >
                       Privacy and Policy
                           <Typography variant="body1" style={{ marginLeft: "1px", fontSize: "11px", color: "gray" }}>
                           read Our Privacy & Policy
                            </Typography>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <div
                        style={{
                            display: "flex",
                            marginTop: "10px",
                            marginBottom: "5px",
                            padding: "4px",
                            borderRadius: "10px",
                            border: "0.2px solid lightgray"
                        }}
                    >
                        <IconButton aria-label="edit" color="black">
                            <div style={{ height: "40px", width: "40px", backgroundColor: "black", borderRadius: "50%" }}>
                                <SupportAgentIcon sx={{ fontSize: 23, color: "white", marginTop: "8px" }} />
                            </div>
                        </IconButton>
                        <Typography
                            variant="h5"
                            style={{ marginLeft: "5px", fontWeight:"500", fontSize: "14px", color: "black", marginTop: "10px" }}
                        >
                        Support
                           <Typography variant="body1" style={{ marginLeft: "1px", fontSize: "11px", color: "gray" }}>
                            Contact us & chat with us
                            </Typography>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <Link to="/TermsAndConditions" style={{textDecoration:"none"}}>
                    <div
                        style={{
                            display: "flex",
                            marginTop: "10px",
                            marginBottom: "5px",
                            padding: "4px",
                            borderRadius: "10px",
                            border: "0.2px solid lightgray"
                        }}
                    >
                        <IconButton aria-label="edit" color="black">
                            <div style={{ height: "40px", width: "40px", backgroundColor: "black", borderRadius: "50%" }}>
                                <DescriptionOutlinedIcon sx={{ fontSize: 23, color: "white", marginTop: "8px" }} />
                            </div>
                        </IconButton>
                        <Typography
                            variant="h5"
                            style={{ marginLeft: "5px", fontWeight:"500", fontSize: "14px", color: "black", marginTop: "10px" }}
                        >
                       Terms & Conditions
                            <Typography variant="body1" style={{ marginLeft: "1px", fontSize: "11px", color: "gray" }}>
                            read Terms & Conditions
                            </Typography>
                        </Typography>
                    </div>
                    </Link>
                  
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <div
                        style={{
                            display: "flex",
                            marginTop: "10px",
                            marginBottom: "5px",
                            padding: "4px",
                            borderRadius: "10px",
                            border: " 0.2px solid lightgray"

                        }}
                    >
                        <IconButton aria-label="edit" color="red">
                            <div style={{ height: "40px", width: "40px", backgroundColor: "black", borderRadius: "50%", }}>
                                <ExitToAppOutlinedIcon style={{ color: "red" }} sx={{ fontSize: 23, marginTop: "8px" }} />
                            </div>
                        </IconButton>
                        <Typography
                        
                            variant="h5"
                            style={{ marginLeft: "5px",  fontWeight:"500",fontSize: "14px", color: "red", marginTop: "18px", }}
                        >
                            Logout
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;
