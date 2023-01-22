import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react';

const PasswordControl = ({ showPassword, setShowPassword, valPassword, onHandleChange }) => {
    return (<OutlinedInput
        id="outlined-adornment-password"
        value={valPassword}
        type={showPassword ? 'text' : 'password'}
        onChange={onHandleChange}
        name="password"
        
        endAdornment={
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(pwd => !pwd)}

                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        }
        label="Password1234"
    />)
}
export default PasswordControl;