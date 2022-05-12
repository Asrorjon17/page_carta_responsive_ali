import React from "react";
import rasmCard from "../../assets/ImgPage5/work-process-item-01.png";

import {
	Box,
	Button,
	Container,
	Grid,
	Input,
	Paper,
	TextareaAutosize,
	TextField,
	Typography,
} from "@mui/material";

const PlanCard3 = () => {
	return (
		<div style={{ backgroundColor: "#F3F1FE" }} id="register">
			<Container
				sx={{
					display: "flex",
					justifyContent: "center",
					paddingTop: "7%",
					flexDirection: "column",
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							width: "50%",
							display: "flex",
						}}
					>
						<Typography
							variant="h4"
							fontWeight="500"
							sx={{ textAlign: "center" }}
						>
							Talk To Us
							<Typography sx={{ marginTop: "7%" }}>
								Maecenas pellentesque ante faucibus lectus vulputate
								sollicitudin Cras feugiat hendrerit semper.
							</Typography>
						</Typography>
					</Box>
				</Box>
				<Box>
					<Grid container spacing={1}>
						<Grid
							container
							spacing={1}
							sx={{
								display: "flex",
								justifyContent: "center",
								marginY: "10%",
							}}
						>
							<Grid item xs={12}>
								<Grid container spacing={3}>
									<Grid item lg={4} xs={12} sm={4} md={4} container spacing={0}>
										<Box
											sx={{
												display: "flex",
												// justifyContent: "center",
												flexDirection: "column",
												// alignItems: "center",
												textAlign: "start",
												// marginX: "10%",
												// marginY: "10%",
											}}
										>
											<Typography
												variant="h6"
												fontWeight="bold"
												sx={{ textAlign: "start", marginBottom: "2%" }}
											>
												Keep in touch
											</Typography>
											<Typography sx={{ marginY: "10%" }}>
												110-220 Quisque diam odio, maximus ac consectetur eu.
												10260 auctor non lorem
											</Typography>
											<Typography>
												You are NOT allowed to re-distribute Softy Pinko
												template on any template collection websites Thank you.
											</Typography>
										</Box>
									</Grid>
									<Grid item lg={8} xs={12} sm={8} md={8} container spacing={0}>
										<Box sx={{ width: "100%" }}>
											<Box>
												<TextField
													className="inputRounded"
													placeholder="Full Name"
													variant="outlined"
													size="small"
													sx={{
														bgcolor: "white",
														borderRadius: 50,
														width: "45%",
														marginX: "2%",
													}}
												/>
												<TextField
													className="inputRounded"
													placeholder="E-Mail Address"
													variant="outlined"
													size="small"
													sx={{
														bgcolor: "white",
														borderRadius: 50,
														width: "45%",
														marginX: "2%",
													}}
												/>
											</Box>
											{/* <input
												className="inputRounded"
												style={{
													bgcolor: "white",
													borderRadius: 50,
													width: "95%",
													height: "50%",
													marginX: "2%",
												}}
											/> */}
											<TextareaAutosize
												aria-label="minimum height"
												minRows={3}
												placeholder="Your Message"
												style={{
													width: "94%",
													margin: "2%",
													height: "70%",
													borderRadius: 20,
													padding: "3%",
												}}
											/>
											<Button
												variant="contained"
												sx={{
													margin: "2%",
													bgcolor: "#8162EE",
													borderRadius: 50,
												}}
											>
												SEND MESSAGE
											</Button>
										</Box>
									</Grid>
								</Grid>
								<br />
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default PlanCard3;
