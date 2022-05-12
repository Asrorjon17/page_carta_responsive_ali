import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import foo from "../../assets/ImgPage4/footer-bg.jpg";
const Footer = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${foo})`,

				width: "100%",
				color: "white",
				paddingTop: "5%",
				padding: "20px",
			}}
		>
			<Container maxWidth="lg">
				<Grid
					container
					spacing={0}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
						gap: 1,
					}}
				>
					<Grid
						lg={2}
						xs={12}
						sm={6}
						md={2}
						container
						spacing={0}
						sx={{ marginY: "2%" }}
					>
						<Typography
							sx={{ display: "flex", gap: 2, flexDirection: "column" }}
						>
							<Typography
								variant="h6"
								fontWeight="bold"
								sx={{ display: "flex", gap: 2, flexDirection: "column" }}
							>
								ABOUT US
							</Typography>
							<Typography>
								Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
								adipisicing
							</Typography>
							<Typography>ipsum dolor sit. Lorem ipsum dolor sit.</Typography>
							<Typography>1234 25 66</Typography>
						</Typography>
					</Grid>
					<Grid
						lg={2}
						xs={12}
						sm={6}
						md={2}
						container
						spacing={0}
						sx={{ marginY: "2%" }}
					>
						<Typography
							variant="h6"
							fontWeight="bold"
							sx={{ display: "flex", gap: 2, flexDirection: "column" }}
						>
							ABOUT US
							<Typography>Men's Shopping</Typography>
							<Typography>Women's Shopping</Typography>
							<Typography>Kid's Shopping</Typography>
						</Typography>
					</Grid>
					<Grid
						lg={2}
						xs={12}
						sm={6}
						md={2}
						container
						spacing={0}
						sx={{ marginY: "2%" }}
					>
						<Typography
							variant="h6"
							fontWeight="bold"
							sx={{ display: "flex", gap: 2, flexDirection: "column" }}
						>
							ABOUT US
							<Typography>Men's Shopping</Typography>
							<Typography>Women's Shopping</Typography>
							<Typography>Kid's Shopping</Typography>
						</Typography>
					</Grid>
					<Grid
						lg={2}
						xs={12}
						sm={6}
						md={2}
						container
						spacing={0}
						sx={{ marginY: "2%" }}
					>
						<Typography
							variant="h6"
							fontWeight="bold"
							sx={{ display: "flex", gap: 2, flexDirection: "column" }}
						>
							ABOUT US<Typography>Men's Shopping</Typography>
							<Typography>Women's Shopping</Typography>
							<Typography>Kid's Shopping</Typography>
						</Typography>
					</Grid>
				</Grid>
				<hr />
				<Box sx={{ textAlign: "center", marginTop: "5%" }}>
					<h6>Lorem ipsum dolor sit amet Lorem, ipsum.</h6>
				</Box>
			</Container>
		</div>
	);
};

export default Footer;
