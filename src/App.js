import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Bio from "./sections/bio/Bio";
import Contact from "./sections/contact/Contact";
import { useState } from "react";

function App() {
  const [seeContactForm, setSeeContactForm] = useState(false);

  return (
    <div style={{ height: "200vh" }}>
      <Navbar setSeeContactForm={setSeeContactForm} />
      <Hero setSeeContactForm={setSeeContactForm} />
      <Projects />
      <Bio />
      {seeContactForm && <Contact setSeeContactForm={setSeeContactForm} />}
    </div>
  );
}

export default App;
