import Destination from "./components/Destination";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Tour from "./components/Tour";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Offer/>
      <Tour/>
      <Testimonial/>
    </div>
  );
}
