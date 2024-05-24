import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useAppStore } from '../appstore';
import Profile from "../sidebar/Profile";
import NotificationsIcon from '@mui/icons-material/Notifications';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Tooltip from '@mui/material/Tooltip';
import ThemeToggle from '../theme/themeToggle';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const handleFullScreen = () => {
  if (document.fullscreenEnabled) {
    document.documentElement.requestFullscreen();
  }
};

export default function TopNav({ theme, toggleTheme }) {
  const updateDopen = useAppStore((state) => state.updateDopen);
  const dopen = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{
        background: "linear-gradient(250.38deg, rgb(213 210 255) 2.39%, rgb(79 64 215) 34.42%, rgb(114, 101, 230) 60.95%, rgb(89 75 219) 84.83%, rgb(13 0 159) 104.37%)",
        height: "70px",
        boxShadow: "rgb(255 255 255 / 10%) 0px 0.5rem 1rem 0px"
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => { updateDopen(!dopen) }}
          >
            <MenuIcon style={{ color: "rgb(119 96 236)", padding: "6px", borderRadius: "10px", background: "white" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Door Plus
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <div style={{
            position: 'relative',
          }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: '100%',
                padding: '15px 40px 15px 10px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '5px',
                outline: 'none',
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
              }}
            />
            <SearchIcon
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                color: 'rgb(132, 108, 249)'
              }}
            />
          </div>
          <Box sx={{ flexGrow: 8 }} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Tooltip title="Full Screen">
            <FullscreenIcon 
              style={{
                margin:"0px 20px",
                fontSize:"30px",
                cursor:"pointer"
              }}
              onClick={handleFullScreen}
            />
          </Tooltip>
          <Tooltip title="Notification">
            <NotificationsIcon 
              style={{
                margin:"0px 10px",
                fontSize:"30px",
                cursor:"pointer"
              }}
            />
          </Tooltip>
          <Profile />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
