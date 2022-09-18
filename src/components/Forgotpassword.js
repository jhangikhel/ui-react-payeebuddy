import * as React from 'react'; 
import { Grid} from '@mui/material'; 
 
 
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
          <TextField fullWidth label="Email" id="Username" sx={{background:"#fff", marginBottom:"15px"}} />
              
              

                    <FormControlLabel sx={{ marginBottom:"15px"}}  control={<Checkbox defaultChecked />} label="Trust me for 30 days" />

                      <Grid container>
                        <Grid item xs="6" md={6}>
                          <Link sx={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}> <KeyboardBackspaceIcon/> Back</Link>
                        </Grid>
                        <Grid item xs="6" md={6} justifyContent="flex-end" sx={{textAlign:"right"}}>
                             <Button variant="contained">Contained</Button>
                        </Grid>
                      </Grid>
    </ >
  );
}