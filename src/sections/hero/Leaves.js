import leaves1 from "./leaves/leaves1.png";
import leaves2 from "./leaves/leaves2.png";
import leaves3 from "./leaves/leaves3.png";
import leaves4 from "./leaves/leaves4.png";

import styles from "./Leaves.module.css";

export default function Leaves() {
  return (
    <div className={styles["leaf-container"]}>
      <img
        className={`${styles.leaf} ${styles.leaf1}`}
        src={leaves1}
        alt="leaf"
      />
      <img
        className={`${styles.leaf} ${styles.leaf2}`}
        src={leaves2}
        alt="leaf"
      />
      <img
        className={`${styles.leaf} ${styles.leaf3}`}
        src={leaves3}
        alt="leaf"
      />
      <img
        className={`${styles.leaf} ${styles.leaf4}`}
        src={leaves4}
        alt="leaf"
      />
    </div>
  );
}
