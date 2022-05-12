import React from "react";
import rasmCard from "../../assets/ImgPage5/testimonial-icon.png";

import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
const SeyCard3 = () => {
	return (
		<div style={{ backgroundColor: "white" }} id="sey">
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
							What do they say?
							<Typography sx={{ marginTop: "7%" }}>
								Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
								nulla, at accumsan elit eros a turpis. Ut sagittis lectus
								libero.
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
												elevation={8}
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
														marginY: "6%",
													}}
												>
													<Box
														sx={{
															display: "flex",
															justifyContent: "center",
															alignItems: "center",
															margin: "5%",
														}}
													>
														<img src={rasmCard} alt="" />
													</Box>
													<Box>
														<Typography
															sx={{ paddingY: "2%", textAlign: "start" }}
														>
															Proin a neque nisi. Nam ipsum nisi, venenatis ut
															nulla quis, egestas scelerisque orci. Maecenas a
															finibus odio .
														</Typography>
														<Box
															sx={{
																display: "flex",
																flexDirection: "row",
																marginY: "2%",
															}}
														>
															<Box
																sx={{
																	bgcolor: "#CCCCCC",
																	width: "80px",
																	height: "80px",
																	borderRadius: 50,
																	display: "flex",
																	justifyContent: "center",
																	alignItems: "center",
																	marginRight: "5%",
																}}
															>
																80x80
															</Box>
															<Typography
																fontSize="large"
																sx={{
																	textAlign: "start",
																	fontWeight: 550,
																	marginY: "5%",
																}}
															>
																Catherine Soft
																<Typography sx={{ color: "red" }}>
																	Managing Director
																</Typography>
															</Typography>
														</Box>
													</Box>
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

export default SeyCard3;
