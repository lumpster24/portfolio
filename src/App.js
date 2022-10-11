import { useState } from "react";
import NavItems from "./components/navbar/NavItems";
import Namecard from "./sections/hero/Namecard";
import Projects from "./sections/projects/Projects";
import Bio from "./sections/bio/Bio";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className={`flex-col ${styles["app-container"]}`}>
      <div className={`flex-col ${styles["name-card"]}`}>
        <div className={styles["component-container"]}>
          {page === "home" && <Namecard />}
          {page === "projects" && <Projects />}
          {page === "aboutme" && <Bio />}
          {page === "contactme" && <Contact />}
        </div>
        <NavItems
          setPage={setPage}
          ulClass={styles["nav"]}
          liClass={styles.li}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
