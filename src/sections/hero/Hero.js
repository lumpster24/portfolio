import NavItems from "../../components/navbar/NavItems";
import html5Icon from "./icons/html5Icon.svg";
import css3Icon from "./icons/css3Icon.svg";
import javascriptIcon from "./icons/javascriptIcon.svg";
import reactIcon from "./icons/reactIcon.svg";
import firebaseIcon from "./icons/firebaseIcon.svg";

import styles from "./Hero.module.css";

export default function Hero({ setSeeContactForm }) {
  return (
    <div className={styles["hero-container"]}>
      <h1 className={styles.name}>Nicholas Bingham</h1>
      <h3>Web developer</h3>
      <ul className={styles["logo-box"]}>
        <li className={styles.flex}>
          <img src={html5Icon} alt="html logo" className={styles.logo} />
          <p className={styles.languages}>HTML</p>
        </li>
        <li className={styles.flex}>
          <img src={css3Icon} alt="css logo" className={styles.logo} />
          <p className={styles.languages}>CSS</p>
        </li>
        <li className={styles.flex}>
          <img
            src={javascriptIcon}
            alt="javascript logo"
            className={styles.logo}
          />
          <p className={styles.languages}>JavaScript</p>
        </li>
        <li className={styles.flex}>
          <img src={reactIcon} alt="react logo" className={styles.logo} />
          <p className={styles.languages}>React</p>
        </li>
        <li className={styles.flex}>
          <img src={firebaseIcon} alt="firebase logo" className={styles.logo} />
          <p className={styles.languages}>Firebase</p>
        </li>
      </ul>
      <div className={styles.pic}>Pic?</div>

      <NavItems
        setSeeContactForm={setSeeContactForm}
        ulClass={styles["flex-nav"]}
      />
    </div>
  );
}
