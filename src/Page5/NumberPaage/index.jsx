import { Box, Container, Typography } from "@mui/material";
import React from "react";
import rasm from "../../assets/ImgPage5/circle-dec.png";
import banner from "../../assets/ImgPage5/fun-facts-bg.png";
const NumberPage = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${banner})`,
				backgroundRepeat: "repeat-x",
				backgroundColor: "white",
				// height: "50vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				width: "100%",
			}}
		>
			<Container
				sx={{
					display: "flex",
					justifyContent: "space-around",
					marginY: "9%",
					paddingX: "3%",
				}}
			>
				<Typography variant="h3" sx={{ color: "white", marginX: "1%" }}>
					126
					<Typography sx={{ textAlign: "center" }}> Projects</Typography>
				</Typography>
				<Box
					sx={{ width: "100px", height: "10%", marginX: "2%", marginY: "2%" }}
				>
					<img src={rasm} alt="" style={{ width: "100%" }} />
				</Box>
				<Typography variant="h3" sx={{ color: "white", marginX: "1%" }}>
					63
					<Typography sx={{ textAlign: "center" }}> Projects</Typography>
				</Typography>
				<Box
					sx={{ width: "100px", height: "10%", marginX: "2%", marginY: "2%" }}
				>
					<img src={rasm} alt="" style={{ width: "100%" }} />
				</Box>
				<Typography variant="h3" sx={{ color: "white", marginX: "1%" }}>
					18
					<Typography sx={{ textAlign: "center" }}> Projects</Typography>
				</Typography>
				<Box
					sx={{ width: "100px", height: "10%", marginX: "2%", marginY: "2%" }}
				>
					<img src={rasm} alt="" style={{ width: "100%" }} />
				</Box>
				<Typography variant="h3" sx={{ color: "white", marginX: "1%" }}>
					27
					<Typography sx={{ textAlign: "center" }}> Projects</Typography>
				</Typography>
			</Container>
		</div>
	);
};

export default NumberPage;
