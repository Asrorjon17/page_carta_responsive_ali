import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/ImgPage5/banner-bg.png";
import Nav5 from "../Nav5";
import rasmCard from "../../assets/ImgPage5/featured-item-01.png";

const Banner = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${banner})`,
				backgroundRepeat: "repeat-x",
				backgroundColor: "white",

				height: "100%",
				width: "100%",
			}}
		>
			<Nav5 />
			<Container maxWidth="sm">
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginY: "25%",
					}}
				>
					<Typography
						variant="h4"
						fontFamily="inherit"
						sx={{ textAlign: "center", color: "white", marginY: "2%" }}
					>
						We provide the best strategy to grow up your business
						<Typography sx={{ marginY: "5%" }}>
							Softy Pinko is a professional Bootstrap 4.0 theme designed by
							Template Mo for your company at absolutely free of charge
						</Typography>
					</Typography>

					<Button
						variant="contained"
						sx={{ borderRadius: 50, bgcolor: "#FD589D" }}
					>
						DISCOVER MORE
					</Button>
				</Box>
			</Container>
			<Container maxWidth="lg">
				<Grid
					container
					spacing={1}
					sx={{ display: "flex", justifyContent: "center", marginTop: "20%" }}
				>
					<Grid item xs={12}>
						<Grid container justifyContent="center" spacing={5}>
							{[1, 2, 3].map((value) => (
								<Grid
									key={value}
									item
									lg={4}
									xs={12}
									sm={6}
									md={6}
									container
									spacing={0}
								>
									<Paper
										style={{ width: "450px", marginX: 5, borderRadius: 20 }}
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
												gap: 5,
											}}
										>
											<Box
												sx={{
													bgcolor: "#8162EE",
													width: "85px",
													height: "85px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													borderRadius: 50,
												}}
											>
												<img src={rasmCard} alt="" />
											</Box>
											<Typography fontWeight="bold" variant="h6">
												Modern Strategy
												<Typography sx={{ paddingY: "2%" }}>
													Customize anything in this template to fityour website
													needs
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
			</Container>
		</div>
	);
};

export default Banner;
