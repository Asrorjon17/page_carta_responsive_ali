import { Box, Card } from "@material-ui/core";
import {
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from "@mui/material";
import React from "react";
import card1 from "../../assets/rasm/assign.svg";
import card2 from "../../assets/rasm/connected.svg";
import card3 from "../../assets/rasm/search.svg";
import card4 from "../../assets/rasm/vault.svg";
import card5 from "../../assets/rasm/messaging.svg";
import card6 from "../../assets/rasm/mail.svg";
const dataImg = [
	{ text: "lorem ipsin", img: card1 },
	{ text: "lorem ipsin", img: card2 },
	{ text: "lorem ipsin", img: card3 },
	{ text: "lorem ipsin", img: card4 },
	{ text: "lorem ipsin", img: card5 },
	{ text: "lorem ipsin", img: card6 },
];
const CardsItem = dataImg.map((post) => (
	<Box
		sx={{
			width: "200px",
			height: "200px",
			textAlign: "center",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			marginX: "7%",
			marginy: "7%",
		}}
	>
		<Box>
			<img src={post.img} alt="" style={{ width: "150px" }} />
		</Box>
		<Typography gutterBottom variant="h5" component="div">
			{post.text}
		</Typography>
	</Box>
));
const Cards = () => {
	return (
		<div style={{ backgroundColor: "#F2F2F2" }}>
			<Container>
				<Box
					sx={{
						paddingY: "5vh",
						with: "100%",
						height: "85%",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					<h5 style={{ textAlign: "center" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.
					</h5>
					<Box
						sx={{
							paddingY: "5vh",
							with: "100%",
							height: "85%",
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
						}}
					>
						{CardsItem}
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Cards;
