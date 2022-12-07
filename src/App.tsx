import { useState } from "react";
import reactLogo from "./assets/react.svg";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Banner from "./components/Banner";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import ContactUs from "./sections/ContactUs";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Hero />
        <Banner />
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

export default App;
