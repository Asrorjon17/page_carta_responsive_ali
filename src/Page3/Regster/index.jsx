import {
	Box,
	Button,
	Container,
	Grid,
	Input,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

const Regster = () => {
	return (
		<div>
			<Container maxWidth="lg" sx={{ marginY: "7%" }}>
				<Grid container spacing={0} sx={{ display: "flex" }}>
					<Grid
						xs={12}
						sm={12}
						md={12}
						lg={8}
						container
						spacing={0}
						sx={{
							display: "flex",
							flexDirection: "row",
							// justifyContent: "center",
							marginY: "20px	",
						}}
					>
						<Box>
							<Typography
								variant="h3"
								fontWeight="bold"
								sx={{ marginY: "20px	" }}
							>
								By Subscribing To Our Lorem ipsum dolor 30% Off
								<Typography>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Typography>
							</Typography>
						</Box>
						<Box sx={{ display: "flex", flexWrap: "wrap", width: "80%" }}>
							<Input
								placeholder="Your Name"
								sx={{
									borderColor: "black",
									border: 2,
									color: "black",
									borderRadius: 0,
									height: "45px",
									padding: "18px",
									bgcolor: "#FFFFFF",
									marginRight: "3%",
									marginBottom: 1,
								}}
								variant="outlined"
							/>
							<Input
								placeholder="Your Email Adres"
								sx={{
									borderColor: "black",
									border: 2,
									color: "black",
									borderRadius: 0,
									height: "45px",
									padding: "18px",
									bgcolor: "#FFFFFF",
									marginRight: "3%",
									marginBottom: 1,
								}}
								variant="outlined"
							/>

							<TelegramIcon
								sx={{
									color: "#fff",
									width: "45px",
									height: "45px",
									padding: "10px",
									bgcolor: "black",
								}}
							/>
						</Box>
					</Grid>

					<Grid
						xs={12}
						sm={12}
						md={12}
						lg={4}
						container
						spacing={0}
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							gap: 5,
						}}
					>
						<Grid
							container
							spacing={0}
							sx={{ display: "flex", marginX: "2%" }}
							// sx={{
							// 	display: "flex",
							// 	flexDirection: "row",
							// 	// justifyContent: "center",
							// 	gap: 5,
							// }}
						>
							<Grid
								lg={6}
								xs={12}
								sm={6}
								md={3}
								container
								spacing={0}
								sx={{ marginY: "2%" }}
							>
								<Box>
									<Typography variant="h6" fontWeight="bold">
										Lorem, ipsum.
										<Typography>
											Lorem ipsum dolor sit. <br /> Lorem ipsum dolor sit.
											<br />
										</Typography>
									</Typography>
								</Box>
							</Grid>
							<Grid
								lg={6}
								xs={12}
								sm={6}
								md={3}
								container
								spacing={0}
								sx={{ marginY: "2%" }}
							>
								<Box>
									<Typography variant="h6" fontWeight="bold">
										Lorem, ipsum.
										<Typography>Lorem ipsum dolor sit.</Typography>
									</Typography>
								</Box>
							</Grid>
							<Grid
								lg={6}
								xs={12}
								sm={6}
								md={3}
								container
								spacing={0}
								sx={{ marginY: "2%" }}
							>
								<Box>
									<Typography variant="h6" fontWeight="bold">
										Lorem, ipsum.
										<Typography>Lorem ipsum dolor sit.</Typography>
									</Typography>
								</Box>
							</Grid>
							<Grid
								lg={6}
								xs={12}
								sm={6}
								md={3}
								container
								spacing={0}
								sx={{ marginY: "2%" }}
							>
								<Box>
									<Typography variant="h6" fontWeight="bold">
										Lorem, ipsum.
										<Typography>Lorem ipsum dolor sit.</Typography>
									</Typography>
								</Box>
							</Grid>
							<Grid
								lg={6}
								xs={12}
								sm={6}
								md={3}
								container
								spacing={0}
								sx={{ marginY: "2%" }}
							>
								{" "}
								<Box>
									<Typography variant="h6" fontWeight="bold">
										Lorem, ipsum.
										<Typography>Lorem ipsum dolor sit.</Typography>
									</Typography>
								</Box>
							</Grid>
							<Grid
								lg={6}
								xs={12}
								sm={6}
								md={3}
								container
								spacing={0}
								sx={{ marginY: "2%" }}
							>
								<Box>
									<Typography variant="h6" fontWeight="bold">
										Lorem, ipsum.
										<Typography>
											Lorem ipsum dolor sit. <br /> Lorem, ipsum dolor.
										</Typography>
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Regster;
