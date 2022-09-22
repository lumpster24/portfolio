import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Bio from "./sections/bio/Bio";
import Contact from "./sections/contact/Contact";
import { useState } from "react";

function App() {
  const [seeContactForm, setSeeContactForm] = useState(false);

  return (
    <>
      <Navbar setSeeContactForm={setSeeContactForm} />

      <section id="hero">
        <Hero setSeeContactForm={setSeeContactForm} />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="bio">
        <Bio />
      </section>

      {seeContactForm && <Contact setSeeContactForm={setSeeContactForm} />}
    </>
  );
}

export default App;
