import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import { Footer } from "./components";

function App() {
	return (
		<div className="App">
			<Hero />
			<Features />
			<Cta />
			<Faq />
			<Footer />
		</div>
	);
}

export default App;
