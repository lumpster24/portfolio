import { useState } from "react";
import styles from "./Navbar.module.css";

import menuIcon from "./menuIcon.svg";
import NavItems from "./NavItems";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setTimeout(
      setNavOpen((prev) => !prev),
      300
    );
  };

  return (
    <nav>
      <button className={styles["menu-btn"]} onClick={toggleMenu}>
        <img src={menuIcon} alt="menu icon" />
      </button>
      {navOpen && <NavItems ulClass={navOpen ? styles["open-menu"] : ""} />}
    </nav>
  );
}
