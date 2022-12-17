import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputField({ label, value, type = "text", name, disabled = false, onChangeHandler, endAdornment = null }) {
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
      endAdornment={endAdornment}
      type={type}
    />

  );
}