import React from "react";
import InputField from "../../component/shared/InputField";
import {
    Box, Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    Grid,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import BasicSelect from "../../component/shared/BasicSelect";
import ButtonFile from "../../component/shared/ButtonFile";
import RowRadioButtonsGroup from "../../component/shared/RadioButton";
import { useState } from "react";
import HeaderAuth from "../../component/shared/HeaderAuth";

const initialState = {
	video: "upload",
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
			text: "Upload Video",
			id: "upload"
		},
		{
			text: "Use Link",
			id: "link"
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
						ADS
					</Typography>
				</Box>
				<Paper sx={{ marginTop: "30px", padding: "15px 15px" }}>
					<Box>
						<Typography variant="h6">Please fill information</Typography>
					</Box>
					<Divider sx={{ marginBottom: "30px" }} />

					{activeStep === 0 && (
						<>
							<Box sx={{ width: "100%", padding: "60px 0px 10px" }}>
								<Grid container spacing={2}>
									<Grid item xs={12} md={4} xl={4} lg={4}></Grid>
									<Grid item xs={12} md={4} xl={4} lg={4}>
										<Grid container spacing={2}>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<RowRadioButtonsGroup
													key="id"
													label="Video"
													value={account.video}
													text="text"
													data={billingFlagData}
													name="video"
												/>
											</Grid>

											<Grid items xs={12} xl={12} md={12} sm={12}>
												<BasicSelect
													data={data}
													key="id"
													label="Select Account (Organization)"
													text="text"
													name="senderCountry"
													value={account.senderCountry}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<BasicSelect
													data={data}
													key="id"
													label="Select Category"
													text="text"
													name="senderCountry"
													value={account.senderCountry}
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
												<FormGroup>
													<FormControlLabel
														control={<Checkbox defaultChecked />}
														label="Skip"
													/>
												</FormGroup>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="senderEmail"
													label="Duration Of Skip"
													value={account.senderEmail}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="senderIFSC"
													label="Charge Per Video"
													value={account.senderIFSC}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<FormGroup>
													<FormControlLabel
														control={<Checkbox defaultChecked />}
														label="Location Specific"
													/>
												</FormGroup>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<InputField
													name="senderAddress"
													label="Minimum Transaction Required"
													value={account.senderAddress}
												/>
											</Grid>
											<Grid items xs={12} xl={12} md={12} sm={12}>
												<BasicSelect
													data={data}
													key="id"
													label="Location"
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

					<Divider sx={{ marginTop: "20px" }} />
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "20px"
						}}
					>
						<Stack direction="row" spacing={2}>
							<ButtonFile label="Submit" clickEvent={() => console.log()} />
						</Stack>
					</Box>
				</Paper>
			</Box>
		</>
	);
};

export default Payment;
