import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import { useNavigate } from 'react-router-dom';

import { useAppStore } from '../appstore';
import { Divider } from '@mui/material';

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);

  const [reportsOpen, setReportsOpen] = React.useState(false);
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const [subCategoryOpen, setSubCategoryOpen] = React.useState(false);

  const handleReportsClick = () => {
    setReportsOpen(!reportsOpen);
  };

  const handleCategoryClick = () => {
    setCategoryOpen(!categoryOpen);
  };

  const handleSubCategoryClick = () => {
    setSubCategoryOpen(!subCategoryOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}
        sx={{
          color: "white",
          "& .MuiDrawer-paper": {
            background: "linear-gradient(250.38deg, rgb(238, 237, 252) 2.39%, rgb(156, 147, 238) 34.42%, rgb(114, 101, 230) 60.95%, rgb(106, 93, 227) 84.83%, rgb(85, 73, 219) 104.37%)",
            color: "ghostWhite",
          },
        }}>
        <DrawerHeader>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <HomeIcon style={{ color: "white", padding: "6px", borderRadius: "10px", background: "#6a6ace" }} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={handleReportsClick}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <CategoryIcon style={{ color: "white", padding: "6px", borderRadius: "10px", background: "#6a6ace" }} />
              </ListItemIcon>
              <ListItemText primary="Category Master" sx={{ opacity: open ? 1 : 0 }} />
              {open ? (reportsOpen ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
          </ListItem>
          <Collapse in={reportsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate("/Category") }}>
                <ListItemText primary="Category" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate("/SubCategory") }}>
                <ListItemText primary="Sub Category" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={handleCategoryClick}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <GroupAddIcon style={{ color: "white", padding: "6px", borderRadius: "10px", background: "#6a6ace" }} />
              </ListItemIcon>
              <ListItemText primary="Users" sx={{ opacity: open ? 1 : 0 }} />
              {open ? (categoryOpen ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
          </ListItem>
          <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate("/category") }}>
                <ListItemText primary="New Registration" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate("/category/furniture") }}>
                <ListItemText primary="Users Booking" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider sx={{ borderColor: 'white', width: '100%' }} />
      </Drawer>
    </Box>
  );
}
