import React from "react";
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from "next/link";
import { Divider, IconButton } from "@mui/material";
import { menupages } from "../../../utility/shared";
import MenuBarIcon from "./MenuBarIcon";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useContext } from "react";
import GlobalContext from "../../../ContextStore/GlobalContext";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  paddingTop: "80px",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  paddingTop: "80px",
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
  // necessary for content to be below app bar
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
const Sidebar = () => {
  const { isMenuOpen, handleMenuOpenAndClose } = useContext(GlobalContext);
  return (
    <>
      <Drawer variant="permanent" open={isMenuOpen}  >
        <DrawerHeader>
          <IconButton onClick={handleMenuOpenAndClose}>
            {isMenuOpen ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menupages.filter(m => m.isProtected).map(({ label, id, path }) => (
            <ListItem key={label} disablePadding sx={{ display: 'block' }}>
              <Link href={path}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: isMenuOpen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isMenuOpen ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <MenuBarIcon menuBarId={id} />
                  </ListItemIcon>
                  <ListItemText primary={label} sx={{ opacity: isMenuOpen ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default Sidebar;
