import { Box, Button, ButtonBase, Grid, Typography } from "@mui/material";
import React from "react";
import rasm1 from "../../assets/ImgPage3/left-banner-image.jpg";
import rasm2 from "../../assets/ImgPage3/baner-right-image-01.jpg";
import rasm3 from "../../assets/ImgPage3/baner-right-image-02.jpg";
import rasm4 from "../../assets/ImgPage3/baner-right-image-03.jpg";
import rasm5 from "../../assets/ImgPage3/baner-right-image-04.jpg";
import "./style.css";
const FullCard = () => {
	return (
		<div>
			<Grid container spacing={0}>
				<Grid
					xs={12}
					sm={12}
					md={12}
					lg={6}
					container
					spacing={0}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<div className="rasm2" style={{ position: "relative" }}>
						<div>
							<img
								src={rasm1}
								alt=""
								width="100%"
								style={{ padding: "20px" }}
							/>
						</div>

						<Typography
							sx={{
								position: "absolute",
								bottom: "32%",
								display: "flex",
								// alignItems: "center",
								flexDirection: "column",
								width: "70%",
								color: "white",
								marginX: "20%",
							}}
						>
							<Typography
								variant="h2"
								fontWeight="bold"
								sx={{ marginY: 1, textAlign: "start" }}
							>
								We Are Hexashop
							</Typography>
							<Typography>
								{" "}
								Best Lorem ipsum dolor sit Lorem dolor sit amet.
							</Typography>
							<Button
								sx={{
									width: "40%",
									border: 2,
									borderRadius: 0,
									paddingY: "10px",
									paddingX: "20px",
									color: "white",
									borderColor: "white",
									marginY: "20px",
								}}
							>
								Pruchase Now!
							</Button>
						</Typography>
					</div>
				</Grid>

				<Grid
					lg={3}
					xs={12}
					sm={6}
					md={6}
					container
					spacing={0}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						rowGap: 1,
						gap: "-50px",
					}}
				>
					<div className="rasm2" style={{ position: "relative" }}>
						<div>
							<img
								src={rasm2}
								alt=""
								width="100%"
								style={{ padding: "20px" }}
							/>
						</div>

						<Typography
							sx={{
								position: "absolute",
								bottom: "40%",
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								width: "100%",
								color: "white",
							}}
						>
							<Typography variant="h4" fontWeight="bold" sx={{ marginY: 1 }}>
								Women
							</Typography>
							<Typography> Best Lorem ipsum dolor sit.</Typography>
						</Typography>
					</div>
					<div className="rasm2" style={{ position: "relative" }}>
						<div>
							<img
								src={rasm4}
								alt=""
								width="100%"
								style={{ padding: "20px" }}
							/>
						</div>

						<Typography
							sx={{
								position: "absolute",
								bottom: "40%",
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								width: "100%",
								color: "white",
							}}
						>
							<Typography variant="h4" fontWeight="bold" sx={{ marginY: 1 }}>
								Kid`s
							</Typography>
							<Typography> Best Lorem ipsum dolor sit.</Typography>
						</Typography>
					</div>
				</Grid>
				<Grid
					lg={3}
					xs={12}
					sm={6}
					md={6}
					container
					spacing={0}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						rowGap: 0,
					}}
				>
					<div className="rasm2" style={{ position: "relative" }}>
						<div>
							<img
								src={rasm3}
								alt=""
								width="100%"
								style={{ padding: "20px" }}
							/>
						</div>

						<Typography
							sx={{
								position: "absolute",
								bottom: "40%",
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								width: "100%",
								color: "white",
							}}
						>
							<Typography variant="h4" fontWeight="bold" sx={{ marginY: 1 }}>
								Men
							</Typography>
							<Typography> Best Lorem ipsum dolor sit.</Typography>
						</Typography>
					</div>

					<div className="rasm2" style={{ position: "relative" }}>
						<div>
							<img
								src={rasm5}
								alt=""
								width="100%"
								style={{ padding: "20px" }}
							/>
						</div>

						<Typography
							sx={{
								position: "absolute",
								bottom: "40%",
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								width: "100%",
								color: "white",
							}}
						>
							<Typography variant="h4" fontWeight="bold" sx={{ marginY: 1 }}>
								Accorsiates
							</Typography>
							<Typography> Best Lorem ipsum dolor sit.</Typography>
						</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default FullCard;
