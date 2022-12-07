import { useState } from "react";
import reactLogo from "./assets/react.svg";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Hero />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
