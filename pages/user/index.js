import React from 'react';
import InputField from '../../component/shared/InputField';
import {
    Box, Divider, Grid, Typography
} from "@mui/material";
import BasicSelect from '../../component/shared/BasicSelect';
import ButtonFile from '../../component/shared/ButtonFile';
import RowRadioButtonsGroup from '../../component/shared/RadioButton';
import { useState } from 'react';
const initialState = {
    account: null,
    userName: "",
    firstName: "",
    lastName: "",
    primaryPhone: "",
    secondaryPhone: "",
    emailId: "",
    confirmEmailId: "",
    role: null,
    userLock: false,
    country: null
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
                <Grid item xs={12} md={2} xl={2} lg={2}></Grid>
                    <Grid item xs={12} md={4} xl={4} lg={4}>
                        <Grid container item >
                            <Grid items xs={12} xl={12} md={12} sm={6}>
                                <BasicSelect data={data} key="id" label="Account" text="text" name="account"
                                    value={account.account} />
                            </Grid>
                            <Grid items xs={12} xl={12} md={12} sm={6}>
                                <InputField name="userName" label="User Name" value={account.userName} />
                            </Grid>
                            <Grid items xs={12} xl={6} md={6} sm={6}>
                                <InputField name="firstName" label="First Name" value={account.firstName} />
                            </Grid>
                            <Grid items xs={12} xl={6} md={6} sm={6}>
                                <InputField name="lastName" label="Last Name" value={account.lastName} />
                            </Grid>
                            <Grid items xs={12} xl={6} md={6} sm={6}>
                                <InputField name="primaryPhone" label="Primary Phone" value={account.primaryPhone} />
                            </Grid>
                            <Grid items xs={12} xl={6} md={6} sm={6}>
                                <InputField name="secondaryPhone" label="Secondary Phone" value={account.secondaryPhone} />
                            </Grid>
                            <Grid items xs={12} xl={12} md={12} sm={12}>
                                <BasicSelect data={data} key="id" label="Country" text="text" name="country"
                                    value={account.country} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} xl={4} lg={4}>
                        <Grid container item  >
                            <Grid items xs={12} xl={12} md={12} sm={12}>
                                <InputField name="emailId" label="Email Id" value={account.emailId} />
                            </Grid>
                            <Grid items xs={12} xl={12} md={12} sm={12}>
                                <InputField name="confirmEmailId" label="Confirm Email Id" value={account.confirmEmailId} />
                            </Grid>
                            <Grid items xs={12} xl={12} md={12} sm={12}>
                                <BasicSelect data={data} key="id" label="Role" text="text" name="role"
                                    value={account.role} />
                            </Grid>
                            <Grid items xs={12} xl={12} md={12} sm={12}>
                                <RowRadioButtonsGroup key="id" label="User Lock" value={account.userLock} text="text" data={billingFlagData} name="userLock" />
                            </Grid>
                           
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} xl={2} lg={2}></Grid>


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