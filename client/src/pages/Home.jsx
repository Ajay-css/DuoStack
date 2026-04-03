import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Promotional from "../components/Promotional";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Promotional />
      </main>
      <Footer />
    </>
  );
}

export default Home;