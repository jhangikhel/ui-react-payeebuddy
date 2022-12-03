import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputField() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >       
        <TextField
        
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          
        />
       </Box>
  );
}