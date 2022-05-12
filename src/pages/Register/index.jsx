import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";

import text from "../../assets/rasm/text.svg";

const Register = () => {
	return (
		<div
			style={{
				backgroundColor: "#252B39",
				height: "80%",
				padding: "15vh",
				display: "flex",
				alignContent: "center",
				flexDirection: "column",
				textAlign: "center",
			}}
		>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<img src={text} alt="" style={{ width: "140px" }} />
			</Box>
			<Typography gutterBottom variant="h4" component="div" color="white">
				We`ll text you the app
			</Typography>
			<Typography gutterBottom variant="h6" component="div" color="white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<TextField
					id="outlined-basic"
					// label="Phote number"
					placeholder="Phote number"
					variant="outlined"
					sx={{
						bgcolor: "white",
						width: "320px",
						borderRadius: "10px",
						margin: "10px",
					}}
				/>
				<Button
					variant="contained"
					color="success"
					sx={{
						borderRadius: "50px",
						width: "120px",
						height: "55px",
						color: "black",

						margin: "10px",
					}}
				>
					Send
				</Button>
			</Box>
		</div>
	);
};

export default Register;
