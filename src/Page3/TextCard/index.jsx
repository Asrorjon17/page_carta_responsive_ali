import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import rasm1 from "../../assets/ImgPage3/explore-image-01.jpg";
import rasm2 from "../../assets/ImgPage3/explore-image-02.jpg";
const TextCard = () => {
	return (
		<div>
			<Container maxWidth="lg">
				<Grid
					container
					spacing={0}
					sx={{ display: "flex", flexDirection: "row" }}
				>
					<Grid
						lg={6}
						xs={12}
						sm={6}
						md={6}
						container
						spacing={0}
						sx={{
							display: "flex",
							flexDirection: "row",
						}}
					>
						<Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
							<Typography variant="h4">Explore Our Product</Typography>
							<Typography>
								You Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								reprehenderit dolorem nostrum itaque. Est, obcaecati. Lorem
								ipsum dolor sit amet.dolorem nostrum itaque. Est, obcaecati.
								Lorem ipsum dolor sit amet.
							</Typography>
							<Box sx={{ display: "flex", flexDirection: "row" }}>
								<Typography
									variant="h1"
									fontFamily="sans-serif"
									sx={{ paddingRight: "5%" }}
								>
									"
								</Typography>
								<Typography>
									You Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Eos reprehenderit dolorem nostrum itaque. Est, obcaecati.
									Lorem ipsum dolor sit amet
								</Typography>
							</Box>
							<Typography>
								You Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								reprehenderit dolorem nostrum itaque. Est, obcaecati. Lorem
								ipsum dolor sit amet.dolorem nostrum itaque. Est, obcaecati.
								Lorem ipsum dolor sit amet.
							</Typography>
							<Typography>
								You Lorem ipsum dolor sit amet consectetur{" "}
								<span>support uz</span>. Eos reprehenderit dolorem nostrum
								itaque. Est, obcaecati. Lorem ipsum dolor sit amet.dolorem
								nostrum itaque. Est, obcaecati. Lorem ipsum dolor sit amet.
							</Typography>
							<Button
								sx={{
									border: 2,
									borderColor: "black",
									color: "black",
									borderRadius: 0,
									padding: 1,
									width: "150px",
								}}
							>
								Discover More
							</Button>
						</Box>
					</Grid>
					<Grid
						lg={6}
						xs={12}
						sm={6}
						md={6}
						container
						spacing={0}
						sx={{
							display: "flex",
							flexDirection: "row",
							padding: 1,
						}}
					>
						<Grid
							lg={6}
							xs={12}
							sm={6}
							md={6}
							container
							spacing={0}
							sx={{
								padding: 1,
								display: "flex",
								flexDirection: "column",
								paddingX: "10px",
							}}
						>
							<Box
								sx={{
									display: "flex",

									justifyContent: "center",
								}}
							>
								<Typography
									variant="h4"
									fontWeight="bold"
									sx={{
										bgcolor: "#F8F8F8",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",

										width: "100%",
										height: "263px",
										textAlign: "center",
									}}
								>
									Leather Bags
									<Typography>Lorem ipsum dolor si</Typography>
								</Typography>
							</Box>
						</Grid>
						<Grid
							lg={6}
							xs={12}
							sm={6}
							md={6}
							container
							spacing={0}
							sx={{
								padding: 1,
								display: "flex",
								flexDirection: "row",

								justifyContent: "center",
							}}
						>
							<Typography
								variant="h4"
								fontWeight="bold"
								sx={{
									bgcolor: "#F8F8F8",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",

									width: "96%",
									height: "263px",
								}}
							>
								<img
									src={rasm1}
									alt=""
									style={{ width: "263px", height: "263px" }}
								/>
							</Typography>
						</Grid>
						<Grid
							lg={6}
							xs={12}
							sm={6}
							md={6}
							container
							spacing={0}
							sx={{
								display: "flex",
								flexDirection: "row",
								padding: 1,
								justifyContent: "center",
							}}
						>
							<Typography
								variant="h4"
								fontWeight="bold"
								sx={{
									bgcolor: "#F8F8F8",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",

									width: "96%",
									height: "263px",
								}}
							>
								<img
									src={rasm2}
									alt=""
									style={{ width: "263px", height: "263px" }}
								/>
							</Typography>
						</Grid>
						<Grid
							lg={6}
							xs={12}
							sm={6}
							md={6}
							container
							spacing={0}
							sx={{
								display: "flex",
								flexDirection: "column",

								paddingX: "10px",
								padding: 2,
							}}
						>
							<Typography
								variant="h4"
								fontWeight="bold"
								sx={{
									bgcolor: "#F8F8F8",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",

									width: "100%",
									height: "263px",
									textAlign: "center",
								}}
							>
								Leather Bags
								<Typography>Lorem ipsum dolor si</Typography>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default TextCard;
