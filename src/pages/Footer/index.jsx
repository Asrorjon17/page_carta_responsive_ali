import React from "react";
import { Container } from "react-bootstrap";
import rasm1 from "../../assets/rasm/22.jpg";
import rasm2 from "../../assets/rasm/2.jpg";

import youtube from "../../assets/rasm/youtube.svg";
import twitter from "../../assets/rasm/twitter.svg";
import facebook from "../../assets/rasm/facebook.svg";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: "#F2F2F2",
				height: "22%",
				paddingBottom: "20px",
				paddingLeft: "5vw",
				paddingRight: "5vw",
			}}
		>
			<Container>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					}}
				>
					<Box sx={{ display: "flex", flexWrap: "wrap", paddingTop: "8vh" }}>
						<img src={rasm2} alt="" style={{ width: "150px" }} />
						<img src={rasm1} alt="" style={{ width: "150px" }} />
					</Box>
					<Box
						sx={{ display: "flex", alignItems: "center", paddingTop: "8vh" }}
					>
						<img src={youtube} alt="" style={{ width: "43px" }} />
						<img src={twitter} alt="" style={{ width: "43px" }} />
						<img src={facebook} alt="" style={{ width: "35px" }} />
					</Box>
				</Box>
				<Typography>Lorem ipsum dolor sit amet.</Typography>
			</Container>
		</div>
	);
};

export default Footer;
