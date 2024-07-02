import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Mousewheel } from "swiper/modules";
import "./App.css";
import Navbar from "./Components/navbar";
import Hero from "./Home/Hero";
import MobileSection from "./Home/MobileSection/page";
import WhoWeAre from "./Home/WhoWeAre/WhoWeAre";
import Footer from "./Components/footer";
import ImageScroller2 from "./Home/MobileSectionMobileView/page";
import Intro from "./Intro/intro";
import HowItWorks from "./howItWorks/page";

// Install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);

function App() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024); // Set your laptop screen width threshold
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Navbar className='h-36'/>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={{ thresholdDelta: 20 }}
        className="mySwiper"
        style={{ height: "100vh" }}
      >
        <SwiperSlide>
          <div id="hero" className="min-h-screen">
            <Hero />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="who-we-are" className="min-h-screen">
            <WhoWeAre />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="intro" className="min-h-screen">
            <Intro />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="how-it-works" className="min-h-screen">
            <HowItWorks />
          </div>
        </SwiperSlide>

        {isLaptop && (
          <SwiperSlide id="mobile-section" className="mobilesection">
            <div className="min-h-screen">
              <MobileSection />
            </div>
          </SwiperSlide>
        )}
        {!isLaptop && (
          <SwiperSlide id="image-scroller" className="mobilesection">
            <div>
              <ImageScroller2 />
            </div>
          </SwiperSlide>
        )}
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
