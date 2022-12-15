import * as React from "react";
import { CircularProgress, Grid } from "@mui/material";
import {
  IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl,
  TextField, FormControlLabel, Checkbox, Button, Link
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useContext } from "react";
import LoginContext from "../ContextStore/LoginContext";
import { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";

const initialAuthState = {
  userName: '',
  password: ''
}
const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { login, authIsLoading } = useContext(LoginContext);
  const [authState, setauthState] = useState(initialAuthState);
  const router = useRouter();
  const handleClick = () => {
    router.push("/user");
    
  };
  const onHandleChange = useCallback((_event) => {
    setauthState({ ...authState, [_event.target.name]: _event.target.value })
  }, []);


  return (
    <>
      <TextField
        fullWidth
        label="Username"
        id="Username"
        sx={{ background: "#fff", marginBottom: "15px" }}
        name="userName"
        value={authState.userName}
        onChange={onHandleChange}
      />

      <FormControl
        sx={{ background: "#fff", marginBottom: "15px", width: "100%" }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          name="password"
          value={authState.password}
          id="outlined-adornment-password"
          type={!showPassword ? "password" : "text"}
          onChange={onHandleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(pwd => !pwd)}
                //  onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {!showPassword ?
                  <VisibilityOff /> : <Visibility />
                }
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <FormControlLabel
        sx={{ marginBottom: "15px" }}
        control={<Checkbox defaultChecked />}
        label="Trust me for 30 days"
      />

      <Grid container>
        <Grid item xs={6} md={6}>
          <Link>Forgot Password ?</Link>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          justifyContent="flex-end"
          sx={{ textAlign: "right" }}
        >
          <Button disabled={authIsLoading} variant="contained" onClick={handleClick}>
            Login
          </Button>
        </Grid>
      </Grid>
      {authIsLoading === true && <CircularProgress color="inherit" />}
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      product: [{ id: 1, title: "Product 1" }]
    }
  }
}
export default LoginPage;