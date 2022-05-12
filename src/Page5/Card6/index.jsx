import React from "react";
import banner from "../../assets/ImgPage5/work-process-bg.png";
import rasmCard from "../../assets/ImgPage5/work-process-item-01.png";

import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
const Card6 = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${banner})`,
				backgroundRepeat: "repeat-x",

				width: "100%",
			}}
			id="card6"
		>
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
							sx={{ color: "white", textAlign: "center" }}
						>
							Work Process
							<Typography sx={{ marginTop: "7%" }}>
								Aenean nec tempor metus. Maecenas ligula dolor, commodo in
								imperdiet interdum, vehicula ut ex. Donec ante diam.
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
									{[1, 2, 3, 4, 5, 6].map((value) => (
										<Grid
											key={value}
											item
											lg={2}
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
														<img src={rasmCard} alt="" />
													</Box>
													<Typography variant="h6" sx={{ margin: "7%" }}>
														Get Ideas
														<Typography sx={{ paddingY: "2%" }}>
															Godard pabst prism fam cliche
														</Typography>
													</Typography>
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

export default Card6;
