import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Hero from './Home/Hero';
import MobileSection from './Home/MobileSection/page';
import WhoWeAre from './Home/WhoWeAre/WhoWeAre';
import Footer from './Components/footer';
import ImageScroller2 from './Home/MobileSectionMobileView/page';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhoWeAre style={{height: '100vh'}} />
      <MobileSection className="laptopsection"/>
      <ImageScroller2 className="mobilesection"/>
      <Footer />
    </div>
  );
}

export default App;
