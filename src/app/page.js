import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Home from "@/Components/Home/Home";
import Navbar from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";
import Services from "@/Components/Services/Services";
import Skills from "@/Components/Skills/Skills";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function MainLayout() {
  return (
    <main className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
