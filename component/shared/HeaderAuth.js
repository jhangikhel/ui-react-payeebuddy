import React from "react";
import {
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Paper,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { signOut } from "next-auth/react";
import Sidebar from "../shared/Menubar/Sidebar";
import { useContext } from "react";
import GlobalContext from "../../ContextStore/GlobalContext";
import usePageName from "../../hooks/use-pagename";
import { Suspense } from "react";
import Image from "next/image";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;
const drawerWidthMin = 65;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: open ? drawerWidth : drawerWidthMin,
    width: "100%",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const HeaderAuth = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { handleMenuOpenAndClose, isMenuOpen } = useContext(GlobalContext);
  const { pageName } = usePageName();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="fixed" open={isMenuOpen} >
        <Toolbar >
         
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenuOpenAndClose}
            edge="start"
            sx={{
              marginRight: 5,
              borderRadius: 0,
            }}
          >
            <MenuIcon />
          </IconButton> */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, borderRadius: 0, }}
          >
            <Image src={"/images/Logo.png"} width="180" height="60" alt="logo" />

          </IconButton>
         
          <Box sx={{ flexGrow: 1 }}>

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, borderRadius: 0, }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => signOut({
                  callbackUrl: "http://localhost:4000/",
                  redirect: "http://localhost:4000/"
                }).then((r) => {
                })}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          width: `calc(100% - ${isMenuOpen ? drawerWidth : drawerWidthMin}px)`,
          marginRight: "0px",
          marginLeft: "auto", 
          paddingLeft:"10px",
          paddingTop:"100px",     
        }}
      >
        <Box className="titleHolder">
          <Typography variant="h2" component={"h2"}>
            {pageName}
          </Typography>
        </Box>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <Paper sx={{ marginTop: "30px", padding: "15px 15px" }}>
            {children}
          </Paper>
        </Suspense>
      </Box>
      </Box>
    </>
  );
};
export default HeaderAuth;
