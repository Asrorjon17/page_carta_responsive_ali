import { Container } from "@material-ui/core";
import React from "react";
import Banner from "../pages/Banner";
import Brend from "../pages/Brend";
import CardLeftRing from "../pages/CardLeftRing";
import Cards from "../pages/Cards";
import Footer from "../pages/Footer";
import Register from "../pages/Register";

const App = () => {
	return (
		<>
			<Banner />

			<Cards />

			<CardLeftRing />

			<Brend />

			<Register />

			<Footer />
		</>
	);
};

export default App;
