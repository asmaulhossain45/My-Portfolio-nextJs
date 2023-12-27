import About from "./Sections/About/About.jsx";
import Contact from "./Sections/Contact/Contact.jsx";
import Home from "./Sections/Home/Home.jsx";
import Projects from "./Sections/Projects/Projects.jsx";
import Services from "./Sections/Services/Services.jsx";
import Testimonials from "./Sections/Testimonials/Testimonials.jsx";

export default function MainLayout() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
