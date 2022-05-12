import React from "react";
import blog1 from "../../assets/ImgPage5/blog-item-01.png";
import blog2 from "../../assets/ImgPage5/blog-item-02.png";
import blog3 from "../../assets/ImgPage5/blog-item-03.png";

import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
const imgdata = [{ img: blog1 }, { img: blog2 }, { img: blog3 }];
const Img = imgdata.map((item) => (
	<Grid item lg={4} xs={12} sm={4} md={4} container spacing={0}>
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				textAlign: "center",
				// marginX: "10%",
				marginY: "10%",
				paddingX: "5%",
			}}
		>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<img src={item.img} alt="" />
			</Box>
			<Box sx={{ marginY: "10%" }}>
				<Typography
					fontSize="small"
					sx={{
						display: "flex",
						gap: 2,
						flexDirection: "column",
					}}
				>
					<Typography fontSize="large">Vivamus ac vehicula dui</Typography>
					<Typography fontSize="small" sx={{ marginX: "10%" }}>
						Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
						Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas
						augue.
					</Typography>
				</Typography>
			</Box>
			<Button variant="contained" sx={{ borderRadius: 50, bgcolor: "#8162EE" }}>
				READ MORE
			</Button>
		</Box>
	</Grid>
));
const PlanCard3 = () => {
	return (
		<div style={{ backgroundColor: "white" }} id="blog">
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					justifyContent: "center",
					paddingTop: "7%",
					flexDirection: "column",
					paddingX: "2%",
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							width: "50%",
							display: "flex",
						}}
					>
						<Typography
							variant="h4"
							fontWeight="500"
							sx={{ textAlign: "center" }}
						>
							Blog Entries
							<Typography sx={{ marginTop: "7%" }}>
								Integer molestie aliquam gravida. Nullam nec arcu finibus,
								imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
								molestie
							</Typography>
						</Typography>
					</Box>
				</Box>
				<Box>
					<Grid container spacing={2}>
						<Grid
							container
							spacing={1}
							sx={{
								display: "flex",
								justifyContent: "center",
								marginY: "5%",
							}}
						>
							{Img}
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default PlanCard3;
