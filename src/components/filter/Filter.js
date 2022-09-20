import styles from "./Filter.module.css";

export default function filter() {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>Filter by language:</label>
      <select>
        <option>Vanilla JavaScript</option>
        <option>React</option>
        <option>Firebase</option>
      </select>
    </div>
  );
}
