import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <div style={{ height: "200vh" }}>
      <Navbar />
      <Hero />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
