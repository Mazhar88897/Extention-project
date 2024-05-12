import { useEffect } from "react";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navigation-bar/navbar";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  useEffect(() => {
    function disableRightClick(event) {
      event.preventDefault();
    }

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []); 
  // handle your logout from here
  // const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	window.location.reload();
	// };
  return (
    <>
      <div className="bg_color fixed inset-0 w-screen h-screen opacity-40 z-[-5]"></div>
      <Navbar />
      <Hero />
      <CTA />
      <Testimonial/>
      <Footer />
    </>
  );
}

export default App;
