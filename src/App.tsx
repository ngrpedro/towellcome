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
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
