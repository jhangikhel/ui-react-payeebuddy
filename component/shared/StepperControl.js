import * as React from 'react';
import { Box, Grid, Stepper, Step, StepLabel } from '@mui/material';
export default function StepperControl({ activeStep, steps }) {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}