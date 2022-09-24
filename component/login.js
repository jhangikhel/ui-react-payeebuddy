import * as React from "react";
import {
  Grid,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Typography,
  FormControl,
  TextField,
  Visibility,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Box,
  Alert,
  Stack,
  Header
} from "@mui/material";

export default function LoginComponent() {
  return (
    <>
     <Header></Header>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "100vh" }}
      >
        <Grid item xs={6} md={6}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              background: "#fff",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              component={"div"}
              variant="h1"
              sx={{ color: "#0038D4", textAlign: "center" }}
            >
              WATCH{" "}
              <Typography
                component={"span"}
                variant="span"
                sx={{ color: "#FEC42D" }}
              >
                {" "}
                More
              </Typography>{" "}
            </Typography>
            <Typography
              component={"div"}
              variant="h1"
              sx={{ color: "#0038D4", textAlign: "center" }}
            >
              {" "}
              <Typography
                component={"span"}
                variant="span"
                sx={{ color: "#FEC42D" }}
              >
                {" "}
                Earn
              </Typography>{" "}
              MORE{" "}
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              LoginIMage
            {/*  <img src={LogoImg} alt="Login" /> */}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          SX={{
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <Box sx={{ maxWidth: "500px", margin: "auto" }}>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
            </Stack>
            <Box sx={{ margin: "20px auto" }}>
              {/* <Login/>  */}
              {/*  <Forgotpassword /> */}
              <>
                <TextField
                  fullWidth
                  label="Usrname"
                  id="Username"
                  sx={{ background: "#fff", marginBottom: "15px" }}
                />

                <FormControl
                  sx={{
                    background: "#fff",
                    marginBottom: "15px",
                    width: "100%",
                  }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={"password"}
                    // onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          //  onClick={handleClickShowPassword}
                          //  onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          <Visibility />
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
                  <Grid item xs="6" md={6}>
                    <Link>Forgot Password ?</Link>
                  </Grid>
                  <Grid
                    item
                    xs="6"
                    md={6}
                    justifyContent="flex-end"
                    sx={{ textAlign: "right" }}
                  >
                    <Button variant="contained" onClick={() => alert("Hello")}>
                      Contained
                    </Button>
                  </Grid>
                </Grid>
              </>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
