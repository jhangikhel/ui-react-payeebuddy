import * as React from 'react';
import { Grid,TextField } from '@mui/material';


import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import { Link } from 'next/link';

export default function ForgotPassword() {




  return (
    <>
      <TextField fullWidth label="Email" id="Username" sx={{ background: "#fff", marginBottom: "15px" }} />



      <FormControlLabel sx={{ marginBottom: "15px" }} control={<Checkbox defaultChecked />} label="Trust me for 30 days" />

      <Grid container>
        <Grid item xs="6" md={6}>
          <Link href="/" sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}> <KeyboardBackspaceIcon /> Back</Link>
           
        </Grid>
        <Grid item xs="6" md={6} justifyContent="flex-end" sx={{ textAlign: "right" }}>
          <Button onClick={() => alert("Hello")} variant="contained">Contained</Button>
        </Grid>
      </Grid>
    </ >
  );
}