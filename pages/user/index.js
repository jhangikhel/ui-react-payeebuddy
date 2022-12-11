import React from 'react';
import Header from '../../component/shared/header';
import InputField from '../../component/shared/InputField';
import StepperControl from '../../component/shared/StepperControl';
import {
    Box, Divider, Grid, Paper, Typography
} from "@mui/material";
import ParentSelect from '../../component/shared/ParentSelect';
import BasicSelect from '../../component/shared/BasicSelect';
import ButtonFile from '../../component/shared/buttonFile';
import RowRadioButtonsGroup from '../../component/shared/RadioButton';
import { useState } from 'react';
const initialState = {
    name: "",
    organiztionType: null,
    country: null,
    currency: null,
    accountType: null,
    billingFlag: true,
    billingDate: null,
    billingFrequency: null,
    taxId: "",
    billingContactNumber: "",
    billingAddress: "",
    billingEmail: "",
    billingSecondaryEmail: "",
    billingPrimaryNumber: "",
    billingSecondaryNumber: ""
}
const ManageUserPage = () => {
    const [account, setAccount] = useState(initialState);
    const [activeStep, setactiveStep] = useState(0);
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
            <Header />
            <Box sx={{ paddingTop: "30px", width: "calc(100% - 80px)", marginRight: "0px", marginLeft: "auto" }}>
                <Box className="titleHolder">
                    <Typography variant='h2' component={"h2"}>User</Typography>
                </Box>
                <Paper sx={{ marginTop: "30px", padding: "15px 15px" }}>

                    <Box><Typography variant='h6'>Please fill information</Typography></Box>
                    <Divider sx={{ marginBottom: "30px" }} />

                    <StepperControl activeStep={activeStep} />
                    {activeStep === 0 &&
                        <>
                            <Box sx={{ width: "100%" }}>
                                <Grid container>
                                    <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                                    <Grid item xs={12} md={10} xl={10} lg={10}>
                                        <ParentSelect />
                                    </Grid>
                                    <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ width: "100%", margin: "20px 0px" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                                    <Grid item xs={12} md={10} xl={10} lg={10}>

                                        <Grid container spacing={2}>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <InputField name="name" label="Account Name" value={account.name} />
                                            </Grid>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <BasicSelect data={data} key="id" label="Organization Type" text="text" name="organiztionType"
                                                    value={account.organiztionType} />
                                            </Grid>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <BasicSelect data={data} key="id" label="Country" text="text" name="country"
                                                    value={account.country} />
                                            </Grid>

                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <BasicSelect data={data} key="id" label="Currency" text="text" name="currency"
                                                    value={account.currency} />
                                            </Grid>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <BasicSelect data={data} key="id" label="Account Type" text="text" name="accountType"
                                                    value={account.accountType} />
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Box>
                        </>
                    }
                    {activeStep === 1 &&
                        <>
                            <Box sx={{ width: "100%" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                                    <Grid item xs={12} md={10} xl={10} lg={10}>

                                        <Grid container spacing={2}>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>

                                                <RowRadioButtonsGroup key="id" label="Billing Flag" value={account.billingFlag} text="text" data={billingFlagData} name="billingFlag" />

                                            </Grid>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <BasicSelect data={data} key="id" label="Billing Date" text="text" name="billingDate"
                                                    value={account.billingDate} />
                                            </Grid>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <BasicSelect data={data} key="id" label="Billing Frequency" text="text" name="billingFrequency"
                                                    value={account.billingFrequency} />
                                            </Grid>

                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <InputField name="taxId" label="Tax Id" value={account.taxId} />
                                            </Grid>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <InputField name="billingContactNumber" label="Billing Contact Number" value={account.billingContactNumber} />
                                            </Grid>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <InputField name="billingAddress" label="Billing Address" value={account.billingAddress} />
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={1} xl={1} lg={1}></Grid>
                                    <Grid item xs={12} md={10} xl={10} lg={10}>

                                        <Grid container spacing={2}>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <InputField name="billingEmail" label="Billing Email" value={account.billingEmail} />
                                            </Grid>

                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <InputField name="billingSecondaryEmail" label="Billing Secondary Email" value={account.billingSecondaryEmail} />
                                            </Grid>

                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <InputField name="billingPrimaryNumber" label="Billing Primary Number" value={account.billingPrimaryNumber} />
                                            </Grid>
                                            <Grid items xs={12} xl={4} md={4} sm={6}>
                                                <InputField name="billingSecondaryNumber" label="Billing Secondary Number" value={account.billingSecondaryNumber} />
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Box>
                        </>
                    }

                    <Divider sx={{ marginTop: "20px" }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                        {activeStep > 0 && <ButtonFile label="Previous" clickEvent={() => setactiveStep(p => p - 1)} />}
                        {activeStep < 1 && <ButtonFile label="Next" clickEvent={() => setactiveStep(p => p + 1)} />}
                        {activeStep === 1 && <ButtonFile label="Submit" clickEvent={() => setactiveStep(p => p + 1)} />}
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default ManageUserPage;