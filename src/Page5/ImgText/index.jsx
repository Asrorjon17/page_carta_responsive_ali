import { Box } from "@material-ui/core";
import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import rasmOne from "../../assets/ImgPage5/left-image.png";
import rasmTwo from "../../assets/ImgPage5/right-image.png";

const Imgdata = [
	{
		textBold: "Let's discuss about you project",
		textP:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat quasi. Recusandae officiis tempora sit, tenetur provident laudantium minus repellendus dolore eius molestiae quos cupiditate aspernatur quidem nostrum. Harum, animi.",
		textBottom:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat quasi. Recusandae officiis tempora sit, tenetur",
		textBold2: "Lorem ipsum dolor sit amet consectetur",
		Image: rasmTwo,
		textBold2: "Let's discuss about you project",
		textP2:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat quasi. Recusandae officiis tempora sit, tenetur provident laudantium minus repellendus dolore eius molestiae quos cupiditate aspernatur quidem nostrum. Harum, animi.",
		textBottom2:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat quasi. Recusandae officiis tempora sit, tenetur",
		textBold22: "Lorem ipsum dolor sit amet consectetur",
		Image2: rasmOne,
	},
];

const CardsImgText = Imgdata.map((post, index) => (
	<Box
		sx={{
			textAlign: "start",
			display: "flex",
			backgroundColor: "white",

			justifyContent: "space-between",
			marginX: "10%",
			// marginY: "5%",
			paddingY: "7%",
			flexWrap: "wrap",
			width: "80%",
			gap: 10,
		}}
	>
		<Grid
			container
			justifyContent="center"
			spacing={0}
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Grid
				item
				lg={6}
				xs={12}
				sm={12}
				md={6}
				container
				spacing={0}
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						width: "400px",
						margin: "20px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<img src={post.Image2} alt="" />
				</Box>
			</Grid>

			<Grid
				item
				lg={6}
				xs={12}
				sm={12}
				md={6}
				container
				spacing={0}
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						width: "400px",
						margin: "20px",

						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography variant="h6" sx={{ fontWeight: "bold" }}>
						{post.textBold2}
					</Typography>
					<br />

					<Typography sx={{ fontSize: "15px" }}>{post.textP2}</Typography>
				</Box>
			</Grid>

			<Grid
				item
				lg={6}
				xs={12}
				sm={12}
				md={6}
				container
				spacing={0}
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						width: "400px",
						margin: "20px",

						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography variant="h6" sx={{ fontWeight: "bold" }}>
						{post.textBold2}
					</Typography>
					<br />

					<Typography sx={{ fontSize: "15px" }}>{post.textP2}</Typography>
				</Box>
			</Grid>

			<Grid
				item
				lg={6}
				xs={12}
				sm={12}
				md={6}
				container
				spacing={0}
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						width: "350px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<img src={post.Image} alt="" />
				</Box>
			</Grid>
		</Grid>
		<br />

		<br />
	</Box>
));
const CardLeftRing = () => {
	return (
		<div
			style={{
				backgroundColor: "#F2F2F2",
				height: "100%",
				backgroundColor: "white",
			}}
			id="about"
		>
			<Container maxWidth="xl">{CardsImgText}</Container>
		</div>
	);
};

export default CardLeftRing;
