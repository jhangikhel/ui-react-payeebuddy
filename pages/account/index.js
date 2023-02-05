import React, { useState } from "react";
import InputField from "../../component/shared/InputField";
import StepperControl from "../../component/shared/StepperControl";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import ParentSelect from "../../component/shared/ParentSelect";
import BasicSelect from "../../component/shared/BasicSelect";
import ButtonFile from "../../component/shared/ButtonFile";
import RowRadioButtonsGroup from "../../component/shared/RadioButton";
import HeaderAuth from "../../component/shared/HeaderAuth";
const steps = ["Select Parent", "Billing INformation"];
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
};
const ManageUserPage = () => {
	const [account, setAccount] = useState(initialState);
	const [activeStep, setactiveStep] = useState(0);
	const data = [
		{
			text: "Test",
			id: 1
		},
		{
			text: "Test 2",
			id: 2
		}
	];
	const billingFlagData = [
		{
			text: "Yes",
			id: true
		},
		{
			text: "No",
			id: false
		}
	];
	return (
		<>
			<Box>
				<Typography variant="h6">Please fill information</Typography>
			</Box>
			<Divider sx={{ marginBottom: "30px" }} />
			<Box sx={{ width: "100%" }}>
				<Grid container spacing={2}>
					 
					<Grid item xs={12} md={12} xl={12} lg={12}>
						<StepperControl steps={steps} activeStep={activeStep} />
					</Grid>
					<Grid item xs={12} md={3} xl={3} lg={3}></Grid>
				</Grid>
			</Box>
			{activeStep === 0 && (
				<>
					<Box sx={{ width: "100%", padding: "60px 0px 10px" }}>
						<Grid container spacing={2}>
							 
							<Grid item xs={12} md={6} xl={6} lg={6}>
								<ParentSelect />
							</Grid>

                            <Grid item xs={12} md={6} xl={6} lg={6}>
								<Grid container item >
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<InputField
											name="name"
											label="Account Name"
											value={account.name}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<BasicSelect
											data={data}
											key="id"
											label="Organization Type"
											text="text"
											name="organiztionType"
											value={account.organiztionType}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<BasicSelect
											data={data}
											key="id"
											label="Country"
											text="text"
											name="country"
											value={account.country}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<BasicSelect
											data={data}
											key="id"
											label="Currency"
											text="text"
											name="currency"
											value={account.currency}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<BasicSelect
											data={data}
											key="id"
											label="Account Type"
											text="text"
											name="accountType"
											value={account.accountType}
										/>
									</Grid>
								</Grid>
							</Grid>
							 
						</Grid>
					</Box>
					<Box sx={{ width: "100%", padding: "60px 0px 10px" }}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={4} xl={4} lg={4}></Grid>
							
						</Grid>
					</Box>
				</>
			)}
			{activeStep === 1 && (
				<>
					<Box sx={{ width: "100%", padding: "60px 0px 10px" }}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={4} xl={4} lg={4}></Grid>
							<Grid item xs={12} md={4} xl={4} lg={4}>
								<Grid container spacing={2}>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<RowRadioButtonsGroup
											key="id"
											label="Billing Flag"
											value={account.billingFlag}
											text="text"
											data={billingFlagData}
											name="billingFlag"
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<BasicSelect
											data={data}
											key="id"
											label="Billing Date"
											text="text"
											name="billingDate"
											value={account.billingDate}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<BasicSelect
											data={data}
											key="id"
											label="Billing Frequency"
											text="text"
											name="billingFrequency"
											value={account.billingFrequency}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<InputField
											name="taxId"
											label="Tax Id"
											value={account.taxId}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<InputField
											name="billingContactNumber"
											label="Billing Contact Number"
											value={account.billingContactNumber}
										/>
									</Grid>
									<Grid
										items
										xs={12}
										xl={12}
										md={12}
										sm={12}
										sx={{ paddingBottom: "15px" }}
									>
										<InputField
											name="billingAddress"
											label="Billing Address"
											value={account.billingAddress}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
					<Box sx={{ width: "100%" }}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={4} xl={4} lg={4}></Grid>
							<Grid item xs={12} md={4} xl={4} lg={4}>
								<Grid container spacing={2}>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<InputField
											name="billingEmail"
											label="Billing Email"
											value={account.billingEmail}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<InputField
											name="billingSecondaryEmail"
											label="Billing Secondary Email"
											value={account.billingSecondaryEmail}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<InputField
											name="billingPrimaryNumber"
											label="Billing Primary Number"
											value={account.billingPrimaryNumber}
										/>
									</Grid>
									<Grid items xs={12} xl={12} md={12} sm={12}>
										<InputField
											name="billingSecondaryNumber"
											label="Billing Secondary Number"
											value={account.billingSecondaryNumber}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</>
			)}
			<Divider sx={{ marginTop: "20px" }} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "20px"
				}}
			>
				<Stack direction="row" spacing={2}>
					{" "}
					<ButtonFile label="Cancel" variant="Secondary" />
					{activeStep > 0 && (
						<ButtonFile
							label="Previous"
							clickEvent={() => setactiveStep(p => p - 1)}
						/>
					)}
				</Stack>
				<Stack direction="row" spacing={2}>
					{" "}
					{activeStep < 1 && (
						<ButtonFile
							label="Next"
							clickEvent={() => setactiveStep(p => p + 1)}
						/>
					)}
					{activeStep === 1 && (
						<ButtonFile label="Submit" clickEvent={() => console.log()} />
					)}
				</Stack>
			</Box>
		</>
	);
};
export default ManageUserPage;
 