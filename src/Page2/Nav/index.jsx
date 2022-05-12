import React from "react";
import { Box, Container, Typography } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "@mui/system";
const Nav = () => {
	return (
		<div>
			<Container maxWidth="xl">
				<Box
					sx={{
						paddingX: "5%",
						paddingRight: "10px",
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
						<TheatersIcon color="primary" fontSize="large" />
						<Typography color="primary" fontSize="large">
							Catalog-Z
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
						<Typography
							fontSize="large"
							sx={{ paddingX: "1vw", paddingY: "8px" }}
						>
							Photos{" "}
						</Typography>
						<Typography
							fontSize="large"
							sx={{
								borderBottom: 4,
								borderColor: "#BC8F92",
								paddingX: "1vw",
								paddingY: "8px",
							}}
						>
							Videos
						</Typography>
						<Typography
							sx={{ paddingX: "1vw", paddingY: "8px" }}
							fontSize="large"
						>
							About
						</Typography>
						<Typography
							sx={{ paddingX: "1vw", paddingY: "8px" }}
							fontSize="large"
						>
							Contact
						</Typography>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Nav;
