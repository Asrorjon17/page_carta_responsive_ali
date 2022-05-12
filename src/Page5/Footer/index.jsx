import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
const icons = [
	{ icon: <FacebookIcon /> },
	{ icon: <TwitterIcon /> },
	{ icon: <InstagramIcon /> },
	{ icon: <AddLocationAltIcon /> },
	{ icon: <TwitterIcon /> },
];
const iconss = icons.map((i) => (
	<Box
		sx={{
			width: "40px",
			height: "40px",
			bgcolor: "white",
			padding: "9px",
			marginX: "10px",
			borderRadius: 50,
		}}
	>
		{i.icon}
	</Box>
));
const Footer = () => {
	return (
		<div style={{ backgroundColor: "#9B52D8", width: "100%" }}>
			<Container maxWidth="lg">
				<Box sx={{ paddingY: "2%" }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							paddingY: "2%",
							color: "#9B52D8",
						}}
					>
						{iconss}
					</Box>
					<hr style={{ backgroundColor: "white" }} />
					<Typography sx={{ color: "white", textAlign: "center" }}>
						COPYRIGHT © 2020 SOFTY PINKO COMPANY - DESIGN: TEMPLATEMO
					</Typography>
				</Box>
			</Container>
		</div>
	);
};

export default Footer;
