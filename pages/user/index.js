import React from 'react';
import Header from '../../component/shared/header';
import InputField from '../../component/shared/InputField';
import StepperControl from '../../component/shared/StepperControl';
import {
    Box, Card, CardContent, Divider, Grid, Paper, Stack, Typography
} from "@mui/material";
import ParentSelect from '../../component/shared/ParentSelect';
import BasicSelect from '../../component/shared/BasicSelect';
import ButtonFile from '../../component/shared/buttonFile';
import RowRadioButtonsGroup from '../../component/shared/RadioButton';
import { useState } from 'react';
import HeaderAuth from '../../component/shared/HeaderAuth';
import Masterpage from '../../component/MasterPage';
import UserIndex from './UserIndex';
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
            <Masterpage/>
             
        </>
    );
};

export default ManageUserPage;