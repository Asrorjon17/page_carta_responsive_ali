import { Box, Container, Typography } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "@mui/system";
import React from "react";
import logo from "../../assets/ImgPage3/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const dataNav = [
	{ nav: "Home", icon: "" },
	{ nav: "Men's", icon: "" },
	{ nav: "Women's", icon: "" },
	{ nav: "Kid's", icon: "" },
	{ nav: "Pages", icon: <ArrowDropDownIcon /> },
	{ nav: "Feature", icon: <ArrowDropDownIcon /> },
	{ nav: "Explore", icon: "" },
];
const NavText = dataNav.map((item) => (
	<Typography
		variant="button"
		fontWeight={600}
		sx={{ paddingX: "1vw", paddingY: "8px" }}
	>
		{item.nav}
		{item.icon}
	</Typography>
));
const Nav = () => {
	return (
		<div>
			<Box sx={{ borderBottom: 2, width: "100%", borderStyle: "dashed" }}>
				<Container maxWidth="lg">
					<Box
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							flexWrap: "wrap",
							marginY: "15px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<img src={logo} alt="" />
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
							{NavText}
						</Box>
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default Nav;
