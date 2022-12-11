import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonComponent({ label, clickEvent }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={clickEvent}>{label}</Button>
    </Stack>
  );
}