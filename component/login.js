import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Header from './shared/header';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


export default function Masterpage() {




  return (
    <>
      <Header />
      <Grid container alignItems={'center'} justifyContent={'center'} sx={{ height: "100vh" }}>
        <Grid item xs={6} md={6} >
          <Box sx={{ height: "100vh", display: "flex", background: "#fff", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <Typography component={'div'} variant="h1" sx={{ color: "#0038D4", textAlign: "center" }} >WATCH <Typography component={'span'} variant="span" sx={{ color: "#FEC42D" }}> More</Typography> </Typography>
            <Typography component={'div'} variant="h1" sx={{ color: "#0038D4", textAlign: "center" }} > <Typography component={'span'} variant="span" sx={{ color: "#FEC42D" }}> Earn</Typography> MORE </Typography>
            <Box sx={{ textAlign: "center" }}>
              LoginIMage
              {/*   <img src={LogoImg} alt="Login" /> */}
            </Box>

          </Box>
        </Grid>
        <Grid item xs={6} md={6} SX={{ justifyContent: "center", alignItems: "center", background: "#fff" }}>
          <Box sx={{ maxWidth: "500px", margin: "auto", }}>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">This is an error alert — check it out!</Alert>
              <Alert severity="success">This is a success alert — check it out!</Alert>
            </Stack>
            <Box sx={{ margin: "20px auto", }}>

              <TextField fullWidth label="Email" id="Username" sx={{ background: "#fff", marginBottom: "15px" }} />



              <FormControlLabel sx={{ marginBottom: "15px" }} control={<Checkbox defaultChecked />} label="Trust me for 30 days" />

              <Grid container>
                <Grid item xs="6" md={6}>
                  <Link sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}> <KeyboardBackspaceIcon /> Back</Link>
                </Grid>
                <Grid item xs="6" md={6} justifyContent="flex-end" sx={{ textAlign: "right" }}>
                  <Button onClick={() => alert("Hello")} variant="contained">Contained</Button>
                </Grid>
              </Grid>


            </Box>
          </Box>
        </Grid>
      </Grid>
    </ >
  );
}