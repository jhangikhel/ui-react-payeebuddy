import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputField() {
  return (
          
        <TextField
        sx={{width:"96%", marginBottom:"20px"}}
        fullWidth
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          
        />
       
  );
}