import React from 'react';
import Header from '../../component/shared/header';
import InputField from '../../component/shared/InputField';
import {
    Box, Divider, Grid, Paper, Typography
} from "@mui/material";
import BasicSelect from '../../component/shared/BasicSelect';
import ButtonFile from '../../component/shared/buttonFile';
import RowRadioButtonsGroup from '../../component/shared/RadioButton';
import { useState } from 'react';
import RoleModule from '../../component/RoleModule';
import HeaderAuth from '../../component/shared/HeaderAuth';
const initialState = {
    account: null,
    roleName: "",
    roleDescription: ""
}
const ManageUserPage = () => {
    const [account, setAccount] = useState(initialState);

    const data = [{
        text: "Test",
        id: 1
    },
    {
        text: "Test 2",
        id: 2
    }];
    const billingFlagData = [{
        text: "Yes",
        id: true
    },
    {
        text: "No",
        id: false
    }]
    return (
        <>
            <HeaderAuth />
            <Box sx={{ paddingTop: "30px", width: "calc(100% - 80px)", marginRight: "0px", marginLeft: "auto" }}>
                <Box className="titleHolder">
                    <Typography variant='h2' component={"h2"}>User</Typography>
                </Box>
                <Paper sx={{ marginTop: "30px", padding: "15px 15px" }}>

                    <Box><Typography variant='h6'>Please fill information</Typography></Box>
                    <Divider sx={{ marginBottom: "30px" }} />



                    <Box sx={{ width: "100%", margin: "20px 0px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                            <Grid item xs={12} md={10} xl={10} lg={10}>

                                <Grid container spacing={2}>
                                    <Grid items xs={12} xl={4} md={4} sm={6}>
                                        <BasicSelect data={data} key="id" label="Account" text="text" name="account"
                                            value={account.account} />
                                    </Grid>
                                    <Grid items xs={12} xl={4} md={4} sm={6}>
                                        <InputField name="roleName" label="Role Name" value={account.roleName} />
                                    </Grid>

                                    <Grid items xs={12} xl={4} md={4} sm={6}>
                                        <InputField name="roleDescription" label="Role Description Name" value={account.roleDescription} />
                                    </Grid>


                                </Grid>

                            </Grid>

                        </Grid>
                    </Box>
                    <Box sx={{ width: "100%", margin: "20px 0px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                <RoleModule />
                            </Grid>
                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                <RoleModule />
                            </Grid>
                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                <RoleModule />
                            </Grid>
                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                <RoleModule />
                            </Grid>
                        </Grid>
                    </Box>


                    <Divider sx={{ marginTop: "20px" }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                        <ButtonFile label="Submit" clickEvent={() => console.log("Test")} />
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default ManageUserPage;