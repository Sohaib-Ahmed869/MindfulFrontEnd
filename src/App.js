import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import Hero from "./Home/Hero";
import MobileSection from "./Home/MobileSection/page";
import WhoWeAre from "./Home/WhoWeAre/WhoWeAre";
import Footer from "./Components/footer";
import ImageScroller2 from "./Home/MobileSectionMobileView/page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="who-we-are">
        <WhoWeAre />
      </div>
      <div id="mobile-section" className="laptopsection">
        <MobileSection />
      </div>
      <div id="image-scroller">
        <ImageScroller2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
