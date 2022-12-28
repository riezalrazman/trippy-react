import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Navbar from "./components/Navbar.jsx";
import Offers from "./components/Offers.jsx";
import Plan from "./components/Plan.jsx";
import Rooms from "./components/Rooms.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
    </div>
  );
}

export default App;
