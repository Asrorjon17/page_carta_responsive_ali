import {
	Box,
	Button,
	IconButton,
	Input,
	InputAdornment,
	OutlinedInput,
	TextField,
} from "@mui/material";
import React from "react";
import { FormControl } from "react-bootstrap";
import video from "../../assets/imgPage2/hero.mp4";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "50vh",
				backgroundColor: "#000",
				background: video,
				backgroundSize: "cover",
			}}
		>
			<video
				autoPlay
				loop
				muted
				style={{
					width: "100%",
					height: "100%",
					minWidth: "100%",
					background: "cover",
					objectFit: "cover",
				}}
			>
				<source src={video} type="video/mp4" />
			</video>
			<Box
				sx={{
					width: "100%",

					position: "relative",
					display: "flex",
					justifyContent: "center",
					// right: "45%",
					bottom: "55%",
				}}
				// className="border-4"
			>
				<Input
					placeholder="Search"
					sx={{
						color: "#009997",
						borderRadius: 0,
						height: "36px",
						paddingLeft: "5px",
						bgcolor: "#FFFFFF",
					}}
				/>
				<Button
					variant="contained"
					sx={{ bgcolor: "#009997", borderRadius: 0 }}
				>
					<SearchIcon color="#fff" />
				</Button>
			</Box>
		</div>
	);
};

export default Search;
