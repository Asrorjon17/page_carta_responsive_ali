import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "@mui/system";
const link = [
	{
		link: "Home",
	},
	{
		link: "AboutUs",
	},
	{
		link: "Our Services",
	},
	{
		link: "Contact Us",
	},
];
const Navs = link.map((item) => (
	<Typography
		fontSize="large"
		color="white"
		sx={{ paddingX: "1vw", spaddingY: "8px" }}
	>
		{item.link}
	</Typography>
));
const Nav = () => {
	return (
		<div
			style={{
				backgroundColor: "transparent",

				height: "20%",
				paddingTop: "20px",
			}}
		>
			<Container maxWidth="xl">
				<Box
					sx={{
						paddingX: "5%",
						paddingRight: "10%",
						height: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						flexWrap: "wrap",
					}}
				>
					<Box
						sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
					>
						<Typography
							variant="h4"
							fontWeight="bold"
							color="white"
							sx={{ display: "flex", flexDirection: "row" }}
						>
							HOST
							<Typography
								fontWeight="bold"
								variant="h5"
								sx={{ display: "flex", alignItems: "end" }}
							>
								CLOUD
							</Typography>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",

							flexWrap: "wrap-reverse",
							display: { xs: "flex", md: "none" },
						}}
						onClik={style.display}
					>
						{" "}
						<MenuIcon sx={{ color: "white" }} />
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",

							flexWrap: "wrap-reverse",
							display: { xs: "none", md: "flex" },
							// paddingX: "20px",
						}}
					>
						{/* <Typography
							fontSize="large"
							sx={{ paddingX: "1vw", spaddingY: "8px" }}
						>
							Photos{" "}
						</Typography> */}
						{Navs}
						<Button
							sx={{
								border: 2,
								borderRadius: 0,
								paddingX: "20px",
								color: "white",
								borderColor: "white",
							}}
						>
							LOG IN
						</Button>
						<Button
							sx={{
								backgroundColor: "#00BCD5",
								borderRadius: 0,
								paddingX: "20px",
								color: "white",
								paddingY: "8px",
								marginX: "5px",
								marginY: "5px",
							}}
						>
							SNG UP
						</Button>
					</Box>
				</Box>
			</Container>
			<hr style={{ backgroundColor: "white" }} />
		</div>
	);
};

export default Nav;
