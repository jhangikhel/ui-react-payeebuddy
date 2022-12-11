import React from "react";
import {
  Toolbar,
  IconButton,
} from "@mui/material";

import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';






const drawerWidth = 240;






const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const Header = () => {

  return (
    <>
      <AppBar position="fixed">
        <Toolbar >

      
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, borderRadius: 0, }}
          >
            <img src="/images/Logo.png" alt="logo" />
          </IconButton>
        
        </Toolbar>
      </AppBar>
     

    </>
  );
};

export default Header;


