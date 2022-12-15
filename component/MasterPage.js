import * as React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Header from './shared/header';
import LoginPage from './LoginPage';
import { Provider } from '../ContextStore/LoginContext';
import Sidebar from './Sidebar';
import HeaderAuth from './shared/HeaderAuth';
import UserIndex from '../pages/user/UserIndex';
import RoleModule from './RoleModule';
 
export default function Masterpage() {
 

  return (
    <>
     <HeaderAuth/>
     <Box sx={{display:"flex"}}>
         <Sidebar />  
         <Box sx={{ width: "calc(100% - 80px)", marginRight: "0px", marginLeft: "auto" }}>
            <RoleModule />
         </Box>
         </Box>
    </ >
  );
}