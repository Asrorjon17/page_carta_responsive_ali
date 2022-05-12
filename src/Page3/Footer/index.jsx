import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/ImgPage3/white-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: "black",
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
							<img src={logo} alt="" width="90%" color="white" />
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
							Shopping & Catigores
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
							Shopping & Catigores
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
							Shopping &<Typography>Men's Shopping</Typography>
							<Typography>Women's Shopping</Typography>
							<Typography>Kid's Shopping</Typography>
						</Typography>
					</Grid>
				</Grid>
				<hr />
				<Box sx={{ textAlign: "center" }}>
					<h6>Lorem ipsum dolor sit amet Lorem, ipsum.</h6>
					<p>Lorem ipsum dolor sit amet.</p>
					<div
						style={{
							display: "flex",
							gap: 10,
							justifyContent: "center",
						}}
					>
						<FacebookIcon />
						<TwitterIcon />
						<InstagramIcon />
						<AddLocationAltIcon />
					</div>
				</Box>
			</Container>
		</div>
	);
};

export default Footer;
