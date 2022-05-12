import {
	Box,
	Button,
	Container,
	Pagination,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import rasm1 from "../../assets/imgPage2/img-01.jpg";
import rasm2 from "../../assets/imgPage2/img-02.jpg";
import rasm3 from "../../assets/imgPage2/img-03.jpg";
import rasm4 from "../../assets/imgPage2/img-04.jpg";
import rasm5 from "../../assets/imgPage2/img-05.jpg";
import rasm6 from "../../assets/imgPage2/img-06.jpg";
import rasm7 from "../../assets/imgPage2/img-07.jpg";
import rasm8 from "../../assets/imgPage2/img-08.jpg";
import rasm9 from "../../assets/imgPage2/img-09.jpg";
import rasm10 from "../../assets/imgPage2/img-10.jpg";

import rasm11 from "../../assets/imgPage2/img-11.jpg";
import rasm12 from "../../assets/imgPage2/img-12.jpg";
import rasm13 from "../../assets/imgPage2/img-13.jpg";
import rasm14 from "../../assets/imgPage2/img-14.jpg";
import rasm15 from "../../assets/imgPage2/img-15.jpg";
import rasm16 from "../../assets/imgPage2/img-16.jpg";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const data = [
	{ rasm: rasm1 },
	{ rasm: rasm2 },
	{ rasm: rasm3 },
	{ rasm: rasm4 },
	{ rasm: rasm5 },
	{ rasm: rasm6 },
	{ rasm: rasm7 },
	{ rasm: rasm8 },
	{ rasm: rasm9 },
	{ rasm: rasm10 },
	{ rasm: rasm11 },
	{ rasm: rasm12 },
	{ rasm: rasm13 },
	{ rasm: rasm14 },
	{ rasm: rasm15 },
	{ rasm: rasm16 },
];

const Cards = data.map((item, i) => (
	<Grid item xs={12} sm={6} md={3}>
		<Paper elevation={0} sx={{ border: 0 }}>
			<Box>
				<img src={item.rasm} alt="" width="100%" />
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						paddingTop: "10px",
						paddingBottom: "15px",
						paddingX: "1px",
					}}
				>
					<Typography fontSize="10px" color="teal">
						24 Sep.2022
					</Typography>
					<Typography fontSize="10px" color="teal">
						10.460 views
					</Typography>
				</Box>
			</Box>
		</Paper>
	</Grid>
));
const Videos = () => {
	return (
		<div>
			<Container maxWidth="xl">
				<Box
					sx={{
						paddingX: "5%",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							paddingY: "1%",
						}}
					>
						<Typography variant="h6" color="teal">
							Letest Videos
						</Typography>
						<Typography fontSize="10px" color="teal">
							Page 1 of 180
						</Typography>
					</Box>
					<Box>
						<Grid container spacing={1}>
							{Cards}
						</Grid>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							marginY: "70px",
						}}
					>
						<Button
							variant="contained"
							sx={{
								display: { xs: "none", md: "flex" },
								bgcolor: "#009997",
								paddingX: "3%",
							}}
						>
							Provius
						</Button>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								gap: 2,
								width: "260px",
							}}
						>
							<Button variant="contained" sx={{ bgcolor: "#009997" }}>
								1
							</Button>
							<Button
								variant="contained"
								disabled
								sx={{ bgcolor: "#009997", paddingY: "10px" }}
								size="small"
							>
								2
							</Button>
							<Button variant="contained" disabled sx={{ bgcolor: "#009997" }}>
								3
							</Button>
							<Button variant="contained" disabled sx={{ bgcolor: "#009997" }}>
								4
							</Button>
						</Box>
						<Button
							variant="contained"
							sx={{
								display: { xs: "none", md: "flex" },
								bgcolor: "#009997",
								paddingX: "3%",
							}}
						>
							Next Page
						</Button>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Videos;
