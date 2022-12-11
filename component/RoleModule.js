import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';

export default function RoleModule() {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormControlLabel
                    labelPlacement="start"
                    label="Admin"
                    control={
                        <>
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" /> View
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" /> Edit
                        </>
                    }

                />
                <Divider sx={{ marginBottom: "30px" }} />
                <FormGroup>
                    <FormControlLabel
                        labelPlacement="start"
                        control={
                            <>

                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                            </>
                        }

                        label="Manage User"
                    />
                    <FormControlLabel
                    labelPlacement="start"
                        control={
                            <>

                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                            </>
                        }
                        label="Manage Role"
                    />
                    <FormControlLabel
                    labelPlacement="start"
                        control={
                            <>

                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                            </>
                        }
                        label="Manage Account"
                    />
                </FormGroup>

            </FormControl>

        </Box>
    );
}