import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputField({ label, value, type = "text", name, disabled = false,
  onChangeHandler }) {
  
  return (

    <TextField
      sx={{ width: "98%", marginBottom: "20px" }}
      fullWidth
      id="filled-helperText"
      label={label}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChangeHandler}
      variant="outlined"
      type={type}
    />

  );
}