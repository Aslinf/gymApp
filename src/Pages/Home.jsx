import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Trainers from "../components/Trainers";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import BMICalc from "../components/BMICalc";
import Pricing from "../components/Pricing";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import About from "../components/About";


function Home(){
  return(
    <>
      <Hero />
      <About />
      <Featured />
      <CTA />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BMICalc />
      <Pricing />
      <Banner />
      <Footer />
    </>
  )
}

export default Home;
