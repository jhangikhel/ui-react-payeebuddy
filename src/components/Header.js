import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Grid} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
 

export default function Header() {
  return (
        <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             LOGO IMage
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}