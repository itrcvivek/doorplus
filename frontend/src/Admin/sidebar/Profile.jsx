import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { logoutUser } from "../../action/UserAuthActions";
import { IconButton } from "@mui/material";

const UserProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    handleCloseModal();
  };

  const user = {
    name: "admin",
    email: "admin@gmail.com",
  };

  return (
    <Box>
      <ListItemButton
        onClick={handleOpenModal}
        style={{
          minHeight: 48,
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        <ListItemIcon
          style={{
            minWidth: 0,
            marginRight: "auto",
            justifyContent: "center",
          }}
        >
          <AccountCircleIcon
            style={{
              fontSize: "32px",
              color: "white",
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Admin"
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            margin: "0 8px",
          }}
        />
      </ListItemButton>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="user-profile-modal"
        aria-describedby="user-profile-details"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: "70px",
            right: "1px",
            width: 200,
            backgroundColor: "ghostwhite",
            padding: "20px",
            borderRadius: "5px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Avatar
              style={{
                width: "60px",
                height: "60px",
                marginRight: "10px",
                background: "rgb(119, 96, 236)",
              }}
            >
              <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
            </Avatar>
            <div>
              <Typography variant="subtitle1">{user.name}</Typography>
              <Typography variant="body2" color="textSecondary">{user.email}</Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "1px",

            }}
          >
            <IconButton color="black">
              <AccountCircleOutlinedIcon />
            </IconButton>
            <Typography
              variant="h5"
              style={{ marginLeft: "5px", fontWeight: "500", fontSize: "14px", color: "black", marginTop: "11px" }}
            >
              Account
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "1px",

            }}
          >
            <IconButton aria-label="edit" color="black">
              <SettingsIcon />
            </IconButton>
            <Typography
              variant="h5"
              style={{ marginLeft: "5px", fontWeight: "500", fontSize: "14px", color: "black", marginTop: "11px" }}
            >
              setting
            </Typography>
          </div>
          <hr />
          <div
            onClick={handleLogout}
            style={{
              display: "flex",
              marginTop: "1px",
              cursor: "pointer"

            }}
          >
            <IconButton color="black">
              <ExitToAppIcon />
            </IconButton>
            <Typography

              variant="h5"
              style={{ marginLeft: "5px", fontWeight: "500", fontSize: "14px", color: "black", marginTop: "11px" }}
            >
              log out
            </Typography>
          </div>

        </Box>
      </Modal>
    </Box>
  );
};

export default UserProfile;
