import * as React from 'react'; 
import {Grid} from '@mui/material'; 
 
 


import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
 
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Masterpage() {

   


  return (
    <>      
         <TextField fullWidth label="Usrname" id="Username" sx={{background:"#fff", marginBottom:"15px"}} />
              
              <FormControl sx={{ background:"#fff", marginBottom:"15px", width:"100%"   }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={'password'}
                        
                       // onChange={handleChange('password')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                            //  onClick={handleClickShowPassword}
                            //  onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                                <Visibility />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>

                    <FormControlLabel sx={{ marginBottom:"15px"}}  control={<Checkbox defaultChecked />} label="Trust me for 30 days" />

                      <Grid container>
                        <Grid item xs="6" md={6}>
                          <Link>Forgot Password ?</Link>
                        </Grid>
                        <Grid item xs="6" md={6} justifyContent="flex-end" sx={{textAlign:"right"}}>
                             <Button variant="contained" onClick={()=>alert("Hello")}>Contained</Button>
                        </Grid>
                      </Grid>
    </ >
  );
}