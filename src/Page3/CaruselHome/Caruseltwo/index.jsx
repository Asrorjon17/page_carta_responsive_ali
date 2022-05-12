import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import men1 from "../../../assets/ImgPage3/women-01.jpg";
import men2 from "../../../assets/ImgPage3/women-02.jpg";
import men3 from "../../../assets/ImgPage3/women-03.jpg";
import StarIcon from "@mui/icons-material/Star";
const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const data = [
	{ rasm: men1, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
	{ rasm: men2, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
	{ rasm: men3, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
	{ rasm: men1, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
	{ rasm: men2, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
	{ rasm: men3, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
];
const Mencard = data.map((item) => (
	<Box sx={{ width: "350px", displey: "felx", justifyContent: "center" }}>
		<img src={item.rasm} alt="" width="90%" />
		<Box
			sx={{
				width: "100%",
				display: { md: "flex", sm: "none", sm: "flex" },
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Typography sx={{ displey: "flex", flexWrap: "wrap" }}>
				<Typography variant="h6" fontWeight="bold">
					{item.text1}
				</Typography>
				<Typography>{item.Narx}</Typography>
			</Typography>
			<Typography>
				<StarIcon fontSize="string" />
				<StarIcon fontSize="string" />
				<StarIcon fontSize="string" />
				<StarIcon fontSize="string" />
				<StarIcon fontSize="string" />
			</Typography>
		</Box>
	</Box>
));

const Gallery = () => {
	return (
		<div>
			<Container maxWidth="lg">
				<Box sx={{ paddingY: "10%" }}>
					<Typography variant="h4" fontWeight="bold">
						Women's latest
					</Typography>
					<Typography>
						Lorem ipsum dolor sit amet consectetur Sapiente, voluptatem.
					</Typography>
					<Box sx={{ paddingY: "50px" }}>
						<Carousel responsive={responsive}>{Mencard}</Carousel>
					</Box>
				</Box>
			</Container>
			<hr />
		</div>
	);
};
export default Gallery;
