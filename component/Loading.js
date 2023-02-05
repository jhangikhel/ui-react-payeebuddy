import * as React from 'react';
import { Box } from '@mui/material';
import HeaderAuth from './shared/HeaderAuth';
import RoleModule from './RoleModule';
export default function Loading() {
  ///Drawer Width
  return (
    <>
      <Box sx={{ position: "fixed", width: "100%", height: "100%", left: "0px", top: "0px", background: "#ffffffd1", zIndex: "9999", display: "flex", justifyContent: "center", alignItems: "center", }}>
        <Box className="spinner"></Box>
      </Box>
    </ >
  );
}