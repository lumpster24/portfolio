import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>&copy; Nicholas Bingham 2022</span>
      <span>
        No rights reserved. There's no actual copyright. I just wanna look
        fancy.
      </span>
      <a
        href="https://www.flaticon.com/free-icons/hipster"
        title="hipster icons"
      >
        favicon: Hipster icons created by Freepik - Flaticon
      </a>
    </div>
  );
}
