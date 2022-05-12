import { Box } from "@material-ui/core";
import { Container } from "@mui/material";
import React from "react";
import rasmcarta from "../../assets/rasm/logo.svg";
import rasm1 from "../../assets/rasm/22.jpg";
import rasm2 from "../../assets/rasm/2.jpg";
const Banner = () => {
	return (
		<div
			style={{
				backgroundColor: "#F2F2F2",
			}}
		>
			<div
				style={{
					backgroundColor: "#F2F2F2",
					height: "95%",
					marginLeft: "15%",
					marginRight: "15%",
				}}
			>
				<Box
					sx={{
						width: "100%",

						paddingY: "5vh",
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<img src={rasmcarta} alt="" style={{ width: "42%", height: "50%" }} />
					<h1
						style={{
							fontWeight: "700",
							textAlign: "center",
							fontSize: "200%",
							fontFamily: "Georgia",
							marginTop: "5vh",
							marginBottom: "5vh",
						}}
					>
						A new tahe on <br /> collaborative docs.
					</h1>
					<Box
						sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
					>
						<img src={rasm2} alt="" style={{ width: "30%", height: "50%" }} />
						<img src={rasm1} alt="" style={{ width: "30%", height: "50%" }} />
					</Box>
				</Box>
				<hr style={{ margin: 0 }} />
			</div>
		</div>
	);
};

export default Banner;
