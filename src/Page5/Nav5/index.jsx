import React from "react";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "@mui/system";
import logo from "../../assets/ImgPage5/logo.png";
const link = [
	{
		link: "Home",
		lik: "#home",
	},
	{
		link: "About",
		lik: "#about",
	},
	{
		link: " Work Process",
		lik: "#card6",
	},
	{
		link: " Testimonials",
		lik: "#sey",
	},
	{
		link: " Pricing Tables",
		lik: "#plan",
	},
	{
		link: " Blog Entries",
		lik: "#blog",
	},
	{
		link: " Contact Us",
		lik: "#register",
	},
];
const Navs = link.map((item) => (
	<Link
		href={item.lik}
		underline="none"
		fontSize="small"
		fontWeight="bold"
		sx={{ paddingX: "1vw", paddingY: "8px" }}
	>
		{item.link}
	</Link>
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
			<Container maxWidth="lg">
				<Box
					sx={{
						// paddingX: "2%",

						height: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						flexWrap: "wrap",
						paddingY: "2%",
						paddingX: "2%",
						// border: 2,
						borderRadius: 50,
						bgcolor: "white",
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
							<img src={logo} alt="" />
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
						<MenuIcon />
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
						{Navs}
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Nav;
