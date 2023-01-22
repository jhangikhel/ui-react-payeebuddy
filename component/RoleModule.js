import * as React from 'react';
import {
  Card, CardContent, Box, Checkbox, Divider, Grid, Paper, Typography,
  List, ListItemButton, ListItem, FormControl, ListItemText
} from '@mui/material';

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
    <>


      <Box className="titleHolder">
        <Typography variant='h2' component={"h2"}>User</Typography>
      </Box>
      <Paper sx={{ marginTop: "30px", padding: "15px 15px" }}>

        <Box><Typography variant='h6'>Please Select Role information</Typography></Box>
        <Divider sx={{ marginBottom: "30px" }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card elevation={3}>
              <CardContent sx={{ padding: "20px" }}>
                <FormControl fullWidth component="fieldset" variant="standard">

                  <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText sx={{ fontSize: "22px" }} primary="Admin" />
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ marginBottom: "30px" }} />

                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Admin" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Role" />
                      </ListItemButton>
                    </ListItem>



                  </List>



                </FormControl>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card elevation={3}>
              <CardContent sx={{ padding: "20px" }}>
                <FormControl fullWidth component="fieldset" variant="standard">

                  <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText sx={{ fontSize: "22px" }} primary="Admin" />
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ marginBottom: "30px" }} />

                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Admin" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Role" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Account" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Role" />
                      </ListItemButton>
                    </ListItem>

                  </List>



                </FormControl>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card elevation={3}>
              <CardContent sx={{ padding: "20px" }}>
                <FormControl fullWidth component="fieldset" variant="standard">

                  <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText sx={{ fontSize: "22px" }} primary="Admin" />
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ marginBottom: "30px" }} />

                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Admin" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Role" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Account" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Role" />
                      </ListItemButton>
                    </ListItem>

                  </List>



                </FormControl>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card elevation={3}>
              <CardContent sx={{ padding: "20px" }}>
                <FormControl fullWidth component="fieldset" variant="standard">

                  <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText sx={{ fontSize: "22px" }} primary="Admin" />
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ marginBottom: "30px" }} />

                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Admin" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Role" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Account" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem fullWidth
                      secondaryAction={
                        <>
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton>

                        <ListItemText primary="Manage Role" />
                      </ListItemButton>
                    </ListItem>

                  </List>



                </FormControl>
              </CardContent>
            </Card>

          </Grid>


        </Grid>

      </Paper>




    </>
  );
}