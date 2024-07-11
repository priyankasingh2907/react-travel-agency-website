import Destination from "./components/Destination";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Tour from "./components/Tour";
import Scroll from "./components/Scroll";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Offer />
      <Tour />
      <Testimonial />
      <DownloadApp />
      <Footer />
      <Scroll />
    </div>
  );
}
