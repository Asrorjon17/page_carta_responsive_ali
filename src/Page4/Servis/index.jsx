import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import StorageIcon from "@mui/icons-material/Storage";
import { HiDatabase } from "react-icons/hi";
import { CardActionArea } from "@mui/material";
const Cards1 = () => {
	return (
		<Card
			sx={{
				maxWidth: 340,
				height: "60vh",
				display: "flex",
				alignItems: "center",
				marginX: 2,
				marginY: 5,
				paddingY: "5%",
				bgcolor: "#F7F7F7",
			}}
		>
			<CardActionArea
				sx={{
					maxWidth: 345,
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<HiDatabase
						style={{
							fontSize: "100px",
							backgroundColor: "#00BCD5",
							color: "white",
							padding: 20,
							borderRadius: 50,
						}}
					/>
				</Box>
				<CardContent sx={{ textAlign: "center" }}>
					<Typography gutterBottom variant="h5" component="div">
						10x Linght Cloud
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
const Servis = () => {
	return (
		<div>
			<Container maxWidth="lg">
				<Box sx={{ marginY: "5%" }}>
					<Typography variant="h6" fontWeight="bold" color="blue">
						Hosting services{" "}
					</Typography>
					<Typography variant="h5" fontWeight="bold">
						Services we provid{" "}
					</Typography>
					<Typography>
						Hosting Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem consequuntur aliquid molestiae ullam saepe doloremque
						reiciendis explicabo eos ea consectetur nobis, quisquam fugiat
						delectus rem eveniet dolorum, nam possimus adipisci!{" "}
					</Typography>
					<Box>
						<Grid
							container
							spacing={0}
							sx={{ display: "flex", justifyContent: "space-around" }}
						>
							<Grid lg={4} xs={12} sm={4} md={4} container spacing={0}>
								<Cards1 />
							</Grid>
							<Grid lg={4} xs={12} sm={4} md={4} container spacing={0}>
								<Cards1 />
							</Grid>
							<Grid lg={4} xs={12} sm={4} md={4} container spacing={0}>
								<Cards1 />
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Servis;
