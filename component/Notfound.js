import * as React from 'react';
import { Box, Typography } from '@mui/material';
import HeaderAuth from './shared/HeaderAuth';
import RoleModule from './RoleModule';
import Image from 'next/image';
import { Paper } from '@mui/material';

export default function Notfound() {
  ///Drawer Width
  return (
    <>
      <Box sx={{ height: "100%", paddingTop: "100px", textAlign: "center", display: "flex", background: Paper.background, justifyContent: "center", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant='h2' sx={{ fontSize: "50px," }}>404 Page Not Found </Typography>
        <Image src={"/images/404.gif"} width="536" height="536" alt="not found page" />
      </Box>

    </ >
  );
}