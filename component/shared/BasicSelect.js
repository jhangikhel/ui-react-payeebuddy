import * as React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
export default function BasicSelect({ label, value, data, key, text, name }) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl fullWidth sx={{ width: "98%", marginBottom: "20px" }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
        name={name}
      >
        {
          data && data.map((d) => <MenuItem key={d[key]} value={d[key]}>{d[text]}</MenuItem>)
        }
      </Select>
    </FormControl>
  );
}