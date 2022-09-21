import { useState } from "react";
import styles from "./Navbar.module.css";

import menuIcon from "./menuIcon.svg";
import NavItems from "./NavItems";

export default function Navbar({ setSeeContactForm }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className={navOpen ? styles.navbar : ""}>
      <button className={styles["menu-btn"]} onClick={toggleMenu}>
        <img src={menuIcon} alt="menu icon" />
      </button>
      {navOpen && (
        <NavItems
          ulClass={styles["open-menu"]}
          toggleMenu={toggleMenu}
          setSeeContactForm={setSeeContactForm}
        />
      )}
    </nav>
  );
}
