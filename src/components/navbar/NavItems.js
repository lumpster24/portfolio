import "./NavItems.module.css";

import styles from "./NavItems.module.css";

export default function NavItems({ ulClass, liClass }) {
  return (
    <div>
      <ul className={ulClass}>
        <li className={`${styles.li} ${liClass}`}>
          <a href="/" className={styles.a}>
            My Projects
          </a>
        </li>

        <li className={`${styles.li} ${liClass}`}>
          <a href="/" className={styles.a}>
            About me
          </a>
        </li>

        <li className={`${styles.li} ${liClass}`}>
          <a href="/" className={styles.a}>
            Qualifications
          </a>
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
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
}
