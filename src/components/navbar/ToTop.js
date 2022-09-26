import toTop from "./toTop.svg";

import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

export default function ToTop() {
  const [scrollY300, setScrollY300] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setScrollY300(true) : setScrollY300(false);
    });
  }, [setScrollY300]);

  return (
    <>
      {scrollY300 && (
        <a href="#hero" className={styles["to-top"]}>
          <img src={toTop} alt="up arrow" className={styles.arrow} />
          <p className={styles["to-top-text"]}>To top</p>
        </a>
      )}
    </>
  );
}
