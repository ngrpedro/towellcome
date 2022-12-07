import { useState } from "react";
import reactLogo from "./assets/react.svg";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ height: "75vh" }}>
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
