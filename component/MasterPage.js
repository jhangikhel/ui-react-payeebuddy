import * as React from 'react';
import { Box } from '@mui/material';
import HeaderAuth from './shared/HeaderAuth';
import RoleModule from './RoleModule';
export default function Masterpage() {
  ///Drawer Width
  return (
    <>
      <HeaderAuth />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "calc(100% - 240px)", marginRight: "0px", marginLeft: "auto" }}>
          <RoleModule />
        </Box>
      </Box>
    </ >
  );
}