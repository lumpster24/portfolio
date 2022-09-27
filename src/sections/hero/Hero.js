import { useState } from "react";
import NavItems from "../../components/navbar/NavItems";
import Namecard from "./Namecard";
import Projects from "../projects/Projects";
import Bio from "../bio/Bio";
import Contact from "../contact/Contact";

import styles from "./Hero.module.css";

export default function Hero({ setSeeContactForm }) {
  const [page, setPage] = useState("home");

  return (
    <div className={styles["hero-container"]}>
      <div className={styles["name-card"]}>
        <div className={styles["component-container"]}>
          {page === "home" && <Namecard />}
          {page === "projects" && <Projects />}
          {page === "aboutme" && <Bio />}
          {page === "contactme" && <Contact />}
        </div>
        <NavItems
          setPage={setPage}
          ulClass={styles["flex-nav"]}
          liClass={styles.li}
        />
      </div>
    </div>
  );
}
