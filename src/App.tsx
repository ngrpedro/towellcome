import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PartnerProfile from "./pages/PartnerProfile";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnerProfile/:id" element={<PartnerProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
