import React, { useCallback, useState, useContext } from "react";
import { CircularProgress, Grid } from "@mui/material";
import {
  FormControl, FormControlLabel, Checkbox, Button
} from "@mui/material";
import LoginContext from "../ContextStore/LoginContext";
import { useRouter } from "next/router";
import InputField from '../component/shared/InputField';
import InputLabel from '@mui/material/InputLabel';
import PasswordControl from "./shared/PasswordControl";
import axios from "axios";
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from "next/link";
import useHttp from "../hooks/use-http";
export async function getServerSideProps(context) {
  const res = await axios('https://jsonplaceholder.typicode.com/posts')
  return {
    props: {
      product: [{ id: 1, title: "Product 1" }]
    }
  }
}
const initialAuthState = {
  userName: '',
  password: ''
}
const LoginPage = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { login, authIsLoading } = useContext(LoginContext);
  const [authState, setauthState] = useState(initialAuthState);
  const { error, isLoading, sendRequest } = useHttp({
    url: 'https://jsonplaceholder.typicode.com/posts'
  })
  const router = useRouter();
  const handleClick = async () => {
    const result = await signIn('credentials', { redirect: false, ...authState, callbackUrl: "http://localhost:4000/login" });
    if (result.ok) {
      sendRequest();
      router.push("/user");
    }
  };
  const onHandleChange = useCallback((_event) => {
    console.log(authState);
    setauthState({ ...authState, [_event.target.name]: _event.target.value })
  }, [authState]);
  return (
    <>
      <InputField
        label="Username"
        name="userName"
        value={authState.userName}
        onChangeHandler={onHandleChange}
      />
      <FormControl
        sx={{ background: "#fff", marginBottom: "15px", width: "98%" }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <PasswordControl
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          valPassword={authState.password}
          onHandleChange={onHandleChange}
        />
      </FormControl>
      <FormControlLabel
        sx={{ marginBottom: "15px" }}
        control={<Checkbox defaultChecked />}
        label="Trust me for 30 days"
      />
      <Grid container>
        <Grid item xs={6} md={6}>
          <Link href={"/forgotPassword"} >Forgot Password ?</Link>
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
      {authIsLoading === true || isLoading == true && <CircularProgress color="inherit" />}
    </>
  );
}
export default LoginPage;