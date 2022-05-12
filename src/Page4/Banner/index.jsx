import { Box, TextField } from "@material-ui/core";
import { Button, Checkbox, Input, Typography } from "@mui/material";

import React from "react";
import banner from "../../assets/ImgPage4/banner-bg.jpg";
import Nav from "../Nav";

const Banner = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${banner})`,
				backgroundRepeat: "repeat-y",
				backgroundSize: "auto",
				// height: "100vh",
				width: "100%",
				display: "none",
			}}
		>
			<Nav />
			<Box>
				<Typography
					variant="h4"
					fontWeight="bold"
					sx={{ color: "white", textAlign: "center", paddingY: "4%" }}
				>
					SEARCH YOUR DOMAIN
				</Typography>
			</Box>

			<Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
				<Input
					placeholder="Placeholder"
					sx={{
						width: "550px",
						border: 2,
						borderColor: "white",
						color: "white",
						margin: "5px",
						paddingX: "5px",
					}}
				/>
				<Button
					sx={{
						backgroundColor: "#00BCD5",
						borderRadius: 0,
						paddingX: "20px",

						color: "white",
						paddingY: "15px",
						margin: "5px",
					}}
				>
					SEARCH NOW
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					marginX: 10,
					paddingX: 10,
					marginTop: 5,
				}}
				// className="border-2"
			>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Checkbox sx={{ color: "white" }} />
					<Typography
						fontSize="20px"
						sx={{ color: "white", display: "flex", alignItems: "end" }}
					>
						.com($10/yr)
					</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Checkbox sx={{ color: "white" }} />
					<Typography
						fontSize="20px"
						sx={{ color: "white", display: "flex", alignItems: "end" }}
					>
						.com($10/yr)
					</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Checkbox sx={{ color: "white" }} />
					<Typography
						fontSize="20px"
						sx={{ color: "white", display: "flex", alignItems: "end" }}
					>
						.com($10/yr)
					</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Checkbox sx={{ color: "white" }} />
					<Typography
						fontSize="20px"
						sx={{ color: "white", display: "flex", alignItems: "end" }}
					>
						.com($10/yr)
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default Banner;
