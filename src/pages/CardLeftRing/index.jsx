import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import rasmOne from "../../assets/rasm/security.svg";
import rasmTwo from "../../assets/rasm/data.svg";
const Imgdata = [
	{
		textBold: "Usage data",
		textP:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat quasi. Recusandae officiis tempora sit, tenetur provident laudantium minus repellendus dolore eius molestiae quos cupiditate aspernatur quidem nostrum. Harum, animi.",
		textBottom:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat quasi. Recusandae officiis tempora sit, tenetur",
		textBold2: "Lorem ipsum dolor sit amet consectetur",
		Image: rasmTwo,
		textBold2: "Absalut sekuritiy",
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

			justifyContent: "center",
			marginX: "7%",
			marginy: "7%",
			flexWrap: "wrap",
			width: "80%",
			gap: 5,
		}}
	>
		<Box sx={{ width: "500px", margin: "50px", margin: "20px" }}>
			<Typography variant="h4" sx={{ fontWeight: "bold" }}>
				{post.textBold}
			</Typography>
			<Typography sx={{ fontSize: "15px" }}>{post.textP}</Typography>
			<br />
			<hr />
			<br />

			<Typography>{post.textBottom}</Typography>
			<Typography sx={{ fontWeight: "bold" }}>{post.textBold2}</Typography>
		</Box>
		<Box sx={{ width: "500px", margin: "20px" }}>
			<img src={post.Image} alt="" style={{ width: "700px" }} />
		</Box>
		<br />
		<Box sx={{ width: "500px", margin: "20px" }}>
			<img src={post.Image2} alt="" style={{ width: "700px" }} />
		</Box>
		<Box sx={{ width: "500px", margin: "50px", margin: "20px" }}>
			<Typography variant="h4" sx={{ fontWeight: "bold" }}>
				{post.textBold2}
			</Typography>
			<Typography sx={{ fontSize: "15px" }}>{post.textP2}</Typography>
			<br />
			<hr />
			<br />

			<Typography>{post.textBottom2}</Typography>
			<Typography sx={{ fontWeight: "bold" }}>{post.textBold22}</Typography>
		</Box>
	</Box>
));
const CardLeftRing = () => {
	return (
		<div
			style={{
				backgroundColor: "#F2F2F2",
				height: "100%",
			}}
		>
			{CardsImgText}
		</div>
	);
};

export default CardLeftRing;
