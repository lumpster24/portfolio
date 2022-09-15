import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <div>
      <h1>Portfolio</h1>
      <h2>Navbar:</h2>
      <Navbar />
      <h2>Hero section:</h2>
      <Hero />
      <h2>Projects section:</h2>
      <Projects />
      <h2>Contact section:</h2>
      <Contact />
    </div>
  );
}

export default App;
