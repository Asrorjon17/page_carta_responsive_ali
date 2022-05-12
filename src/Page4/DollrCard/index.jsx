import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import StorageIcon from "@mui/icons-material/Storage";
import { HiDatabase } from "react-icons/hi";
import { CardActionArea } from "@mui/material";
import banner1 from "../../assets/ImgPage4/pricing-bg.jpg";
import CheckIcon from "@mui/icons-material/Check";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));
const Cardlar = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "300px",
				height: "100%",
				bgcolor: "white",
				padding: "5vh",
				border: 2,
				borderColor: "#F8F8F8",
				marginY: "20px",
				position: "relative",
			}}
			// className="border-2"
		>
			<Typography fontWeight="bold">BASIC CLOUD 5X</Typography>
			<Box>
				<Typography
					variant="h5"
					fontWeight="bold"
					sx={{
						color: "white",
						marginY: "11%",
						bgcolor: "#00BCD5",
						paddingY: "10%",
					}}
				>
					$15.50
					<Typography fontWeight="bold" fontSize="12px">
						MONTHLY
					</Typography>
				</Typography>
			</Box>
			<Typography
				fontSize="11px"
				sx={{ textAlign: "center", marginBottom: "25%" }}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
				dolores,deserunt nisi possimus assumenda nesciunt
			</Typography>
			<hr />
			<Box
				sx={{
					textAlign: "start",
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}
			>
				<Typography fontSize="13px">
					<CheckIcon fontSize="small" />
					500 GB Lorem, ipsum.
				</Typography>
				<Typography fontSize="13px">
					<CheckIcon fontSize="small" />
					3TB Lorem, ipsum.
				</Typography>
				<Typography fontSize="13px">
					<CheckIcon fontSize="small" />
					500 GB Lorem, ipsum.
				</Typography>
				<Typography fontSize="13px">
					<CheckIcon fontSize="small" />
					24/7 GB Lorem, ipsum.
				</Typography>
				<Typography fontSize="13px">
					<CheckIcon fontSize="small" />
					100 Lorem, ipsum.
				</Typography>
				<Typography fontSize="13px">
					<CheckIcon fontSize="small" />
					CancelLorem, ipsum.
				</Typography>
			</Box>
			<Button
				sx={{
					marginX: "20%",
					position: "absolute",
					bottom: -15,
					borderRadius: 0,
					bgcolor: "#00BCD5",
				}}
				variant="contained"
			>
				START PLAN
			</Button>
		</Box>
	);
};
const DollrCard = () => {
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();
	return (
		<div
			style={{
				backgroundImage: `url(${banner1})`,
				backgroundRepeat: "no-repeat",

				width: "99.8%",
			}}
		>
			<Container maxWidth="lg">
				<Box sx={{ marginY: "5%", textAlign: "center" }}>
					<Typography
						variant="h5"
						fontWeight="bold"
						sx={{ paddingY: "10%", color: "white" }}
					>
						Lorem ipsum dolor
						<Typography sx={{ marginX: "10%", textAlign: "center" }}>
							Hosting Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Exercitationem consequuntur a consequuntur aliquid molestiae ullam
							saepe doloremque aliquid molestiae ullam saepe doloremque
						</Typography>
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							marginBottom: "20px",
						}}
					>
						<Grid container className={classes.root} spacing={2}>
							<Grid item xs={12}>
								<Grid container justifyContent="center" spacing={spacing}>
									{[0, 1, 2].map((value) => (
										<Grid key={value} item>
											<Cardlar />
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default DollrCard;
