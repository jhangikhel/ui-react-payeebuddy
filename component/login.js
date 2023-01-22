import * as React from 'react';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import Header from './shared/header';
import LoginPage from './LoginPage';
import { Provider } from '../ContextStore/LoginContext';
import Image from 'next/image';


export default function Masterpage() {
  return (
    <>
      <Provider>
        <Header />
        <Grid container alignItems={'center'} justifyContent={'center'} sx={{ height: "100vh" }}>
          <Grid item xs={6} md={6} >
            <Box sx={{ height: "100vh", paddingTop: "10%", display: "flex", background: Paper.background, justifyContent: "center", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <Typography component={'div'} variant="h2" sx={{ textAlign: "center" }} >WATCH <Typography component={'span'} variant="span" sx={{ color: "#FEC42D" }}> More</Typography> </Typography>
              <Typography component={'div'} variant="h2" sx={{ textAlign: "center" }} >
                <Typography component={'span'} variant="span" sx={{ color: "#FEC42D" }}> Earn</Typography> MORE </Typography>
              <Box sx={{ textAlign: "center" }}>
                
                <Image src={"/images/LoginImage.png"} width="528" height="380" alt="Login" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} sx={{ justifyContent: "center", alignItems: "center", background: Paper.background }}>
            <Box sx={{ maxWidth: "500px", margin: "auto", }}>
              <Stack sx={{ width: '100%' }} spacing={2}>
                {/*  <Alert severity="error">This is an error alert — check it out!</Alert>
              <Alert severity="success">This is a success alert — check it out!</Alert> */}
              </Stack>
              <Box sx={{ margin: "20px auto", }}>
                <LoginPage />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Provider>
    </ >
  );
}