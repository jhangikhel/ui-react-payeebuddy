import * as React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Header from './shared/header';
import Forgotpassword from './forgotpassword';
import LoginPage from './LoginPage';
 





export default function Masterpage() {


  return (
    <>
      <Header />
      <Grid container alignItems={'center'} justifyContent={'center'} sx={{ height: "100vh" }}>
        <Grid item xs={6} md={6} >
          <Box sx={{ height: "100vh", display: "flex", background: Paper.background , justifyContent: "center", flexDirection:"column", alignItems: "center", textAlign: "center" }}>
           <Typography component={'div'} variant="h1" sx={{  textAlign: "center" }} >WATCH <Typography component={'span'} variant="span" sx={{ color: "#FEC42D" }}> More</Typography> </Typography>
            <Typography component={'div'} variant="h1" sx={{   textAlign: "center" }} > 
            <Typography component={'span'} variant="span" sx={{ color: "#FEC42D" }}> Earn</Typography> MORE </Typography>
            
            <Box sx={{ textAlign: "center" }}>           
                <img src="/images/LoginImage.png" alt="Login" /> 
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={6} sx={{ justifyContent: "center", alignItems: "center", background: Paper.background  }}>
          <Box sx={{ maxWidth: "500px", margin: "auto", }}>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">This is an error alert — check it out!</Alert>
              <Alert severity="success">This is a success alert — check it out!</Alert>
            </Stack>
            <Box sx={{ margin: "20px auto", }}>
             <LoginPage />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ >
  );
}