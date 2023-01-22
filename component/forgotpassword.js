import React from 'react';
import { Grid, FormControlLabel, Checkbox, Button, TextField } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from 'next/link';
const Forgotpassword = (props) => {
    return (
        <>
            <TextField fullWidth label="Email" id="Username" sx={{ background: "#fff", marginBottom: "15px" }} />
            <FormControlLabel sx={{ marginBottom: "15px" }} control={<Checkbox defaultChecked />} label="Trust me for 30 days" />
            <Grid container>
                <Grid item xs={6} md={6}>
                    <Link style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} href="/forgotpassword">
                        <><KeyboardBackspaceIcon /> Test</></Link>
                </Grid>
                <Grid item xs={6} md={6} justifyContent="flex-end" sx={{ textAlign: "right" }}>
                    <Button onClick={() => alert("Hello")} variant="contained">Contained</Button>
                </Grid>
            </Grid>
        </>
    );
};
export default Forgotpassword;