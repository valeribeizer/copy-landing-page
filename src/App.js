import Brands from './components/Brands/Brands';
import GreenBanner from './components/GreenBanner/GreenBanner';
import CAR from './components/HARCAR/CAR';
import HAR from './components/HARCAR/HAR';
import HPSlider from './components/HomePage Slider/HPSlider';
import LandingBanner from './components/Landing Banner/LandingBanner';
import Navbar from './components/Navbar/Navbar';
import RepairProcess from './components/RepairProcess/RepairProcess';
import Trust from './components/Trust/Trust';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "1200px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          marginLeft: "100px",
        }}
      >
        <LandingBanner />
        <HPSlider />
        <GreenBanner />
        <HAR />
        <CAR />
        <Trust />
        <Brands />
        <RepairProcess />
      </div>
      <Footer />
    </div>
  );
}

export default App;
