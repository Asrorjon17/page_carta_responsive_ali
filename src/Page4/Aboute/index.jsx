// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function App() {
	return (
		<>
			<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
				<Grid
					container
					spacing={1}
					sx={{ display: "flex", justifyContent: "center" }}
				>
					<Grid item xs={12}>
						<Grid container justifyContent="center" spacing={1}>
							{[0, 1, 2].map((value) => (
								<Grid
									key={value}
									item
									lg={6}
									xs={12}
									sm={6}
									md={6}
									container
									spacing={0}
								>
									<Paper sx={{ paddingY: "15%" }}>
										<SwiperSlide
											style={{
												display: "flex",
												flexDirection: "column",
												textAlign: "center",
												paddingTop: "5%",
												paddingBottom: "5%",
											}}
										>
											<Container maxWidth="md">
												<Typography
													fontSize="15px"
													fontWeight="bold"
													sx={{ color: "#00BCD5" }}
												>
													Loremipsum
												</Typography>
												<Typography fontWeight="bold" variant="h4">
													Lorem ipsum dolor sit amet.
												</Typography>
												<Box
													sx={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}
												>
													<Typography
														variant="h2"
														fontWeight="bold"
														sx={{
															marginY: "10%",
															width: "100px",
															height: "100px",
															borderRadius: 50,
															bgcolor: "#582AD2",
															display: "flex",
															justifyContent: "center",
															alignItems: "center",
															fontFamily: "initial",
															color: "white",
														}}
													>
														"
													</Typography>
												</Box>
												<Typography fontFamily="sans-serif" fontSize="15px">
													"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
													amet consectetur, adipisicing elit. Commodi obcaecati
													cum odit quaerat, delectus, soluta ad quasi fugiat,
													facilis nisi"
												</Typography>
												<Typography
													fontWeight="bold"
													variant="h4"
													sx={{ marginY: "6%" }}
												>
													Lorem ipsum{" "}
													<Typography
														fontSize="15px"
														fontWeight="bold"
														sx={{ color: "#00BCD5" }}
													>
														Lorem ipsum{" "}
													</Typography>
												</Typography>
											</Container>
										</SwiperSlide>
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Swiper>
		</>
	);
}
