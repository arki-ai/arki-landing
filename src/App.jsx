import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Explain from "./components/Explain";
import { Footer } from "./components";

function App() {
	return (
		<div className="App  bg-[#0A1525] ">
			<Hero />
			<Features />
			<Explain />
			<Cta />
			{/* <Faq /> */}
			<Footer />
		</div>
	);
}

export default App;
