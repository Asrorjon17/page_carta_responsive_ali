import React from "react";
import rasmCard from "../../assets/ImgPage5/work-process-item-01.png";

import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

const PlanCard3 = () => {
	return (
		<div style={{ backgroundColor: "#F3F1FE" }} id="plan">
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
							Pricing Plans
							<Typography sx={{ marginTop: "7%" }}>
								Donec vulputate urna sed rutrum venenatis. Cras consequat magna
								quis arcu elementum. quis congue risus volutpat.
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
								marginY: "5%",
							}}
						>
							<Grid item xs={12}>
								<Grid container spacing={3}>
									{[1, 2, 3].map((value) => (
										<Grid
											key={value}
											item
											lg={4}
											xs={12}
											sm={4}
											md={4}
											container
											spacing={0}
										>
											<Paper
												elevation={3}
												style={{ width: "450px", marginX: 6, borderRadius: 20 }}
											>
												<Box
													sx={{
														display: "flex",
														justifyContent: "center",
														flexDirection: "column",
														alignItems: "center",
														textAlign: "center",
														marginX: "10%",
														marginY: "10%",
													}}
												>
													<Box
														sx={{
															display: "flex",
															justifyContent: "center",
															alignItems: "center",
															margin: "7%",
														}}
													>
														<Typography variant="h6" fontWeight="bold">
															Starter
														</Typography>
													</Box>
													<Box
														sx={{
															width: "100%",
															paddingX: "7%",
															borderRadius: 5,
															bgcolor: "#8162EE",
														}}
													>
														<Typography
															variant="h4"
															sx={{ margin: "7%", color: "white" }}
														>
															$14.50
															<Typography sx={{ paddingY: "2%" }}>
																monthly
															</Typography>
														</Typography>
													</Box>
													<Box sx={{ marginY: "10%" }}>
														<Typography
															fontSize="small"
															sx={{
																display: "flex",
																gap: 2,
																flexDirection: "column",
															}}
														>
															<Typography fontSize="small">
																250 GB space
															</Typography>
															<Typography fontSize="small">
																600 GB transfer
															</Typography>
															<Typography fontSize="small">
																Pro Design Panel
															</Typography>
															<Typography fontSize="small">
																15-minute support
															</Typography>
															<Typography fontSize="small">
																Unlimited Emails{" "}
															</Typography>
															<Typography fontSize="small">
																24/7 Security{" "}
															</Typography>
														</Typography>
													</Box>
													<Button
														variant="contained"
														sx={{ borderRadius: 50, bgcolor: "#8162EE" }}
													>
														PURCHASE NOW
													</Button>
												</Box>
											</Paper>
										</Grid>
									))}
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
