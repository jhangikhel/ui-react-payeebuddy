import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputField({ label, value, name }) {
  return (

    <TextField
      sx={{ width: "96%", marginBottom: "20px" }}
      fullWidth
      id="filled-helperText"
      label={label}
      name={name}
      value={value}
    />

  );
}