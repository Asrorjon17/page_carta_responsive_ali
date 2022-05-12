import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import mentioned from "../../assets/rasm/mentioned.svg";
const Brend = () => {
	return (
		<div
			style={{
				backgroundColor: "#F2F2F2",
				height: "30vh",
				paddingTop: "10px",
			}}
		>
			<Box sx={{ marginLeft: "15%", marginRight: "15%", textAlign: "center" }}>
				<Typography style={{ fontWeight: "bold", padding: "30px" }}>
					Menttonent in
				</Typography>
				<img src={mentioned} alt="" />
			</Box>
		</div>
	);
};

export default Brend;
