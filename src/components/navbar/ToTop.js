import toTop from "./toTop.svg";

import styles from "./Navbar.module.css";

export default function ToTop() {
  return (
    <div className={styles["to-top"]}>
      <a href="#hero">
        <img src={toTop} alt="up arrow" className={styles.arrow} />
        <p className={styles["to-top-text"]}>To top</p>
      </a>
    </div>
  );
}
