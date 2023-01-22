import React from "react";
import InputField from "../../component/shared/InputField";
import StepperControl from "../../component/shared/StepperControl";
import {
    Box, Divider,
    Grid,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import BasicSelect from "../../component/shared/BasicSelect";
import ButtonFile from "../../component/shared/ButtonFile";
import { useState } from "react";
import HeaderAuth from "../../component/shared/HeaderAuth";
const steps = ["Sender Detail", "Transation Information"];
const initialState = {
	senderName: "",
	amount: 0,
	senderAddress: "",
	senderBankDetail: "",
	senderAccountNo: "",
	senderCountry: null,
	senderIFSC: "",
	gatewayCharge: null,
	discount: "",
	senderEmail: "",
	senderMobileNo: "",
	totalAmount: 0
};
const Payment = () => {
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
			<HeaderAuth />
			<Box
				sx={{
					width: "calc(100% - 80px)",
					marginRight: "0px",
					marginLeft: "auto"
				}}
			>
				<Box className="titleHolder">
					<Typography variant="h2" component={"h2"}>
						Payment
					</Typography>
				</Box>
				<Paper sx={{ marginTop: "30px", padding: "15px 15px" }}>
					<Box>
						<Typography variant="h6">Please fill information</Typography>
					</Box>
					<Divider sx={{ marginBottom: "30px" }} />

					<Box sx={{ width: "100%" }}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={3} xl={3} lg={3}></Grid>
							<Grid item xs={12} md={6} xl={6} lg={6}>
								<StepperControl steps={steps} activeStep={activeStep} />
							</Grid>
							<Grid item xs={12} md={3} xl={3} lg={3}></Grid>
						</Grid>
					</Box>

					{activeStep === 0 && (
						<>
							<Box sx={{ width: "100%", padding: "60px 0px 10px" }}>
								<Grid container spacing={2}>
									<Grid item xs={12} md={4} xl={4} lg={4}></Grid>
									<Grid item xs={12} md={4} xl={4} lg={4}>
										<Grid container spacing={2}>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="name"
													label="Sender Name"
													value={account.name}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="senderAddress"
													label="Sender Address"
													value={account.senderAddress}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="senderBankDetail"
													label="Sender Bank Name"
													value={account.senderBankDetail}
												/>
											</Grid>

											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="senderMobileNo"
													label="Sender Mobile No."
													value={account.senderMobileNo}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="senderIFSC"
													label="Sender IFSC"
													value={account.senderIFSC}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="senderEmail"
													label="Sender Email"
													value={account.senderEmail}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<BasicSelect
													data={data}
													key="id"
													label="Sender Country"
													text="text"
													name="senderCountry"
													value={account.senderCountry}
												/>
											</Grid>
										</Grid>
									</Grid>
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
												<InputField
													name="amount"
													label="Amount"
													value={account.amount}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="discount"
													label="Discount (IF any)"
													value={account.discount}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="gatewayCharge"
													label="Gateway Charge (IF any)"
													value={account.gatewayCharge}
												/>
											</Grid>

											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="billingContactNumber"
													label="Billing Contact Number"
													value={account.billingContactNumber}
												/>
											</Grid>

											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													disabled
													name="totalAmount"
													label="Total Amount"
													value={
														account.amount +
														account.gatewayCharge -
														account.discount
													}
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
				</Paper>
			</Box>
		</>
	);
};

export default Payment;
