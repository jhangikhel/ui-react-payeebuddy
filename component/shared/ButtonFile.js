import * as React from 'react';
import { Button, Stack } from '@mui/material';
export default function ButtonComponent({ label, clickEvent }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={clickEvent}>{label}</Button>
    </Stack>
  );
}