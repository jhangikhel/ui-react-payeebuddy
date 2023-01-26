import * as React from 'react';
import {
  Card, CardContent, Checkbox, Divider, Grid, List, ListItemButton, ListItem, FormControl, ListItemText
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
  return (
    <>
      <Divider sx={{ marginBottom: "30px" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card elevation={3} style={{height:"100%"}}>
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
    </>
  );
}