import NavItems from "../../components/navbar/NavItems";
import html5Icon from "./icons/html5Icon.svg";
import css3Icon from "./icons/css3Icon.svg";
import javascriptIcon from "./icons/javascriptIcon.svg";
import reactIcon from "./icons/reactIcon.svg";
import firebaseIcon from "./icons/firebaseIcon.svg";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles["hero-container"]}>
      <h1 className={styles.name}>Nicholas Bingham</h1>
      <h3>Web developer</h3>
      <ul className={styles["logo-box"]}>
        <li className={styles.logo}>
          <img src={html5Icon} alt="html logo" />
        </li>
        <li className={styles.logo}>
          <img src={css3Icon} alt="css logo" />
        </li>
        <li className={styles.logo}>
          <img src={javascriptIcon} alt="javascript logo" />
        </li>
        <li className={styles.logo}>
          <img src={reactIcon} alt="react logo" />
        </li>
        <li className={styles.logo}>
          <img src={firebaseIcon} alt="firebase logo" />
        </li>
      </ul>
      <div className={styles.pic}>Pic?</div>

      <NavItems ulClass={styles["flex-nav"]} />
    </div>
  );
}
