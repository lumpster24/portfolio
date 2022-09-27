import "./NavItems.module.css";

import styles from "./NavItems.module.css";

const pages = ["Home", "My Projects", "About Me"];
const externalPages = ["GitHub", "Resume"];

export default function NavItems({ ulClass, liClass, setPage }) {
  const pageHandler = (e) => {
    setPage(e.target.value);
  };

  return (
    <>
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
          <a href="/" className={styles.a}>
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}
