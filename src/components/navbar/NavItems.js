import styles from "./NavItems.module.css";
import resume from "../resume/Nicholas Bingham Resume.pdf";

const pages = ["Home", "My Projects", "About Me"];
const externals = [
  {
    name: "Github",
    link: "https://github.com/Knikkey",
  },
  {
    name: "Resume",
    link: { resume },
  },
];

export default function NavItems({ ulClass, liClass, setPage }) {
  const pageHandler = (e) => {
    //setPage found in App.js
    setPage(e.target.value);
  };

  return (
    <nav>
      <ul className={ulClass}>
        <li className={`${liClass}`}>
          <button
            value="home"
            className={styles["page-nav"]}
            onClick={pageHandler}
          >
            Home
          </button>
        </li>

        <li className={`${liClass}`}>
          <button
            value="projects"
            className={styles["page-nav"]}
            onClick={pageHandler}
          >
            My Projects
          </button>
        </li>

        <li className={`${liClass}`}>
          <button
            value="aboutme"
            className={styles["page-nav"]}
            onClick={pageHandler}
          >
            About Me
          </button>
        </li>

        <li className={`${liClass}`}>
          <button
            value="contactme"
            className={styles["page-nav"]}
            onClick={pageHandler}
          >
            Contact Me
          </button>
        </li>

        <li className={`${styles.li} ${liClass}`}>
          <a
            href="https://github.com/Knikkey"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.a}
          >
            GitHub
          </a>
        </li>

        <li className={`${styles.li} ${liClass}`}>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.a}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
