import NavItems from "../../components/navbar/NavItems";
import html5Icon from "./icons/html5Icon.svg";
import css3Icon from "./icons/css3Icon.svg";
import javascriptIcon from "./icons/javascriptIcon.svg";
import reactIcon from "./icons/reactIcon.svg";
import firebaseIcon from "./icons/firebaseIcon.svg";

import styles from "./Hero.module.css";

const codingLanguages = [
  { logo: html5Icon, text: "HTML", alt: "html logo" },
  { logo: css3Icon, text: "CSS", alt: "css logo" },
  { logo: javascriptIcon, text: "JavaScript", alt: "javascript logo" },
  { logo: reactIcon, text: "React", alt: "react logo" },
  { logo: firebaseIcon, text: "Firebase", alt: "firebase logo" },
];

<li className={styles.flex}>
  <img src={html5Icon} alt="html logo" className={styles.logo} />
  <p className={styles.languages}>HTML</p>
</li>;

export default function Hero({ setSeeContactForm }) {
  return (
    <div className={styles["hero-container"]}>
      <h1>Nicholas Bingham</h1>
      <h3>Web developer</h3>
      <ul className={styles["logo-box"]}>
        {codingLanguages.map((lang) => {
          return (
            <li key={lang.text} className={styles.flex}>
              <img src={lang.logo} alt={lang.alt} className={styles.logo} />
              <p className={styles.languages}>{lang.text}</p>
            </li>
          );
        })}
      </ul>
      <div className={styles.pic}>Pic?</div>

      <NavItems
        setSeeContactForm={setSeeContactForm}
        ulClass={styles["flex-nav"]}
      />
    </div>
  );
}
