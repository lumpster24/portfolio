import styles from "./Filter.module.css";

export default function SortFilter() {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>Sort by:</label>
      <select>
        <option>Date (oldest)</option>
        <option>Date (newest)</option>
      </select>
    </div>
  );
}
