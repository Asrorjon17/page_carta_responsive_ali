import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: "#EEEEEE",

				display: "flex",
				paddingTop: "4%",
				paddingBottom: "3%",
				// justifyContent: "center",
			}}
		>
			<Box
				sx={{
					flexGrow: 1,
					marginX: "20%",
					width: "50%",
					height: "100%",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Grid container spacing={4}>
					<Grid item lg={6} md={6} sm={12} xs={12}>
						<Typography variant="h6" fontWeight="bold" color="teal">
							About Catalog-Z
						</Typography>
						<br />

						<Typography fontSize="15px" sx={{ maxWidth: "80%" }}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. In autem
							repudiandae cupiditate, quia quo perferendis distinctio, assumenda
							numquam nihil delectus libero explicabo porro
						</Typography>

						<Typography sx={{ marginTop: "10%" }}>
							Lorem ipsum dolor sit amet consectetur.
						</Typography>
					</Grid>
					<Grid item lg={3} md={3} sm={12} xs={12}>
						<Typography variant="h6" fontWeight="bold" color="teal">
							Our Links
						</Typography>
						<br />
						<Typography>
							Adventise
							<br /> Suppart
							<br /> Our Company <br /> Contact
						</Typography>
					</Grid>
					<Grid item lg={3} md={3} sm={12} xs={12}>
						<Stack direction="row" spacing={2} sx={{ paddingY: "5px" }}>
							<FacebookIcon color="disabled" />
							<TwitterIcon color="disabled" />
							<InstagramIcon color="disabled" />
							<AddLocationAltIcon color="disabled" />
						</Stack>
						<br />

						<Typography
							sx={{
								textAlign: { lg: "end", md: "center" },
								paddingRight: { lg: "32%", md: "0" },
							}}
						>
							ATrrems of Lise <br />
							Privacy Policy
						</Typography>

						<Typography sx={{ marginTop: "80px" }}>
							Lorem, ipsum dolor.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Footer;
