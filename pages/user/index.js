import React from 'react';
import Header from '../../component/shared/header';
import InputField from '../../component/shared/InputField';
import StepperControl from '../../component/shared/StepperControl';

import {
    Box, Divider, Grid, Paper, Typography
} from "@mui/material";
const ManageUserPage = () => {
    return (
        <>
            <Header />
                <Box sx={{ paddingTop: "30px", width: "calc(100% - 80px)", marginRight: "0px", marginLeft: "auto" }}>
                  <Box className="titleHolder">
                        <Typography variant='h2' component={"h2"}>User</Typography>
                    </Box>
                    <Paper sx={{marginTop:"30px", padding:"15px 15px"}}>

                            <Box><Typography variant='h6'>Please fill information</Typography></Box>
                            <Divider sx={{marginBottom:"30px"}} />

                        <StepperControl/>

 

                    <Box sx={{width:"100%"}}>
                        <Grid container>
                        <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                        <Grid item xs={12} md={10} xl={10} lg={10}>

                        </Grid>
                        <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                        </Grid>
                        </Box>
                        <Box sx={{width:"100%", margin:"20px 0px"}}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                        <Grid item xs={12} md={10} xl={10} lg={10}>

                            <Grid container spacing={2}>
                                <Grid items xs={12} xl={3} md={3} sm={6}>
                                    <InputField/>
                                </Grid>
                                <Grid items xs={12} xl={3} md={3} sm={6}>
                                    <InputField/>
                                </Grid>
                                <Grid items xs={12} xl={3} md={3} sm={6}>
                                    <InputField/>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                        </Grid>
                        </Box>
                        <Box sx={{width:"100%"}}>
                        <Grid container>
                        <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                        <Grid item xs={12} md={10} xl={10} lg={10}>

                        </Grid>
                        <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                        </Grid>
                        </Box>



                </Paper>
            </Box>
        </>
    );
};

export default ManageUserPage;