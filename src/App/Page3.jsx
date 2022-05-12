import React from "react";
import Nav from "../Page3/Nav";
import FullCard from "../Page3/FullCard";
import CaruselHome from "../Page3/CaruselHome";
import TextCard from "../Page3/TextCard";
import Cards from "../Page3/Cards";
import Regster from "../Page3/Regster";
import Footer from "../Page3/Footer";
import CoruselOne from "../Page3/CaruselHome/CaruselOne";
import Caruseltwo from "../Page3/CaruselHome/Caruseltwo";
import CaruselThree from "../Page3/CaruselHome/CaruselThree";
const Page3 = () => {
	return (
		<div>
			<Nav />
			<FullCard />
			<CoruselOne />
			<Caruseltwo />
			<CaruselThree />

			<TextCard />
			<Cards />
			<Regster />
			<Footer />
		</div>
	);
};

export default Page3;
