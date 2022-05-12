import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import rasm from "../../assets/ImgPage4/feature-01.png";
import Paper from "@material-ui/core/Paper";
import { Box, Container, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
	},
	control: {
		padding: theme.spacing(2),
	},
}));
const Card = () => {
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					paddingY: "5%",
					paddingX: "5%",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center", marginX: "2%" }}>
					<img
						src={rasm}
						alt=""
						width="100px"
						height="50px"
						style={{ margin: "2%" }}
					/>
				</Box>
				<Typography fontSize="large" fontWeight="bold">
					Lorem ipsum dolor sit amet.
					<Typography fontSize="small">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						mollitia illum molestias?
					</Typography>
				</Typography>
			</Box>
		</Box>
	);
};

export default function SpacingGrid() {
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<Typography
				fontSize="small"
				fontWeight="bold"
				sx={{ textAlign: "center", marginY: "14%" }}
				color="blue"
			>
				Lorem ipsum dolor sit amet.
				<Typography variant="h4" fontWeight="bold" color="black">
					CLOUD FEATURES
				</Typography>
			</Typography>
			<Grid
				container
				className={classes.root}
				spacing={1}
				sx={{ display: "flex", justifyContent: "center" }}
			>
				<Grid item xs={12}>
					<Grid container justifyContent="center" spacing={1}>
						{[0, 1].map((value) => (
							<Grid
								key={value}
								item
								lg={6}
								xs={12}
								sm={6}
								md={6}
								container
								spacing={0}
							>
								<Paper style={{ width: "450px", marginX: 5 }}>
									<Card />
								</Paper>
							</Grid>
						))}
					</Grid>
					<Grid container justifyContent="center" spacing={1}>
						{[0, 1].map((value) => (
							<Grid
								key={value}
								item
								lg={6}
								xs={12}
								sm={6}
								md={6}
								container
								spacing={0}
							>
								<Paper style={{ width: "450px", marginX: 5 }}>
									<Card />
								</Paper>
							</Grid>
						))}
					</Grid>
					<Grid container justifyContent="center" spacing={1}>
						{[0, 1].map((value) => (
							<Grid
								key={value}
								item
								lg={6}
								xs={12}
								sm={6}
								md={6}
								container
								spacing={0}
							>
								<Paper style={{ width: "450px", marginX: 5 }}>
									<Card />
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
