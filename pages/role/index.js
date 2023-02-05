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
            <Box><Typography variant='h6'>Please fill information</Typography></Box>
            <Divider sx={{ marginBottom: "30px" }} />
            <Box sx={{ width: "100%", margin: "20px 0px" }}>
                <Grid container spacing={2}>
                     
                    <Grid item xs={12} md={12} xl={12} lg={12}>
                        <Grid container item >
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
                <Grid container >
                    <Grid items xs={12} xl={12} md={12} sm={12}>
                        <RoleModule />
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ marginTop: "20px" }} />
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <ButtonFile label="Submit" clickEvent={() => console.log("Test")} />
            </Box>
        </>
    );
};
export default ManageUserPage;