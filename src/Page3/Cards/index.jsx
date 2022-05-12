import { Box, Container, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/ImgPage3/instagram-01.jpg";
import img2 from "../../assets/ImgPage3/instagram-02.jpg";
import img3 from "../../assets/ImgPage3/instagram-03.jpg";
import img4 from "../../assets/ImgPage3/instagram-04.jpg";
import img5 from "../../assets/ImgPage3/instagram-05.jpg";
import img6 from "../../assets/ImgPage3/instagram-06.jpg";

const Cards = () => {
	return (
		<div>
			<Container maxWidth="lg">
				<Box sx={{ paddingY: "10%" }}>
					<Typography variant="h4" fontWeight="bold">
						Men's latest
					</Typography>
					<Typography>
						Lorem ipsum dolor sit amet consectetur Sapiente, voluptatem.
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "center",
							paddingY: "5%",
						}}
					>
						<img src={img1} alt="" width="190px" />
						<img src={img2} alt="" width="190px" />
						<img src={img3} alt="" width="190px" />
						<img src={img4} alt="" width="190px" />
						<img src={img5} alt="" width="190px" />
						<img src={img6} alt="" width="190px" />
					</Box>
				</Box>
			</Container>
			<hr />
		</div>
	);
};

export default Cards;
