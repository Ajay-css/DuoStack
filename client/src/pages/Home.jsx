import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Promotional from "../components/Promotional";
import Pricing from "../components/Pricing";
import TechStack from "../components/TechStack";
import BuildProcess from "../components/BuildProcess";
import CostCalculator from "../components/CostCalculator";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Projects />
        <CostCalculator />
        <Pricing />
        <Testimonials />
        <Promotional />
      </main>
      <Footer />
    </>
  );
}

export default Home;