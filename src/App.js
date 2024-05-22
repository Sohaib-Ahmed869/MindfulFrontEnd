import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Hero from './Home/Hero';
import MobileSection from './Home/MobileSection/page';
import WhoWeAre from './Home/WhoWeAre/WhoWeAre';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhoWeAre style={{height: '100vh'}} />
      <MobileSection />
    </div>
  );
}

export default App;
