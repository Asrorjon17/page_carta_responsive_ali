import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/ImgPage4/trusted-01.png";
const Logotext = () => {
	return (
		<div style={{ backgroundColor: "#F0F0F0" }}>
			<Box>
				<Typography
					variant="h6"
					fontWeight="bold"
					sx={{ textAlign: "center", paddingY: "2%" }}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						// justifyContent: "space-between",
						marginX: "10%",
						paddingY: "3%",
						// flexWrap: "wrap",
						// gap: 10,
					}}
				>
					<Grid container spacing={0} sx={{ display: "flex" }}>
						<Grid lg={3} xs={12} sm={6} md={6} container spacing={0}>
							<Box sx={{ padding: "20px" }}>
								<img src={logo} alt="" />
							</Box>
						</Grid>
						<Grid lg={3} xs={12} sm={6} md={6} container spacing={0}>
							<Box sx={{ padding: "20px" }}>
								<img src={logo} alt="" />
							</Box>
						</Grid>
						<Grid lg={3} xs={12} sm={6} md={6} container spacing={0}>
							<Box sx={{ padding: "20px" }}>
								<img src={logo} alt="" />
							</Box>
						</Grid>
						<Grid lg={3} xs={12} sm={6} md={6} container spacing={0}>
							<Box sx={{ padding: "20px" }}>
								<img src={logo} alt="" />
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</div>
	);
};

export default Logotext;
