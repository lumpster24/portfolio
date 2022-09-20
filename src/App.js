import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Bio from "./sections/bio/Bio";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <div style={{ height: "200vh" }}>
      <Navbar />
      <Hero />

      <Projects />

      <Bio />

      <Contact />
    </div>
  );
}

export default App;
