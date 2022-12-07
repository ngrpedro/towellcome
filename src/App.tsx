import { useState } from "react";
import reactLogo from "./assets/react.svg";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ height: "75vh" }}></div>
      <Footer />
    </div>
  );
}

export default App;
