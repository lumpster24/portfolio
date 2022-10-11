import styles from "./Filter.module.css";

export default function Filter({ setFilter }) {
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={`flex-col ${styles.filter}`}>
      <label className={styles.label}>Filter by language:</label>
      <select className={styles.select} onChange={filterHandler}>
        <option>All languages</option>
        <option>Vanilla JavaScript</option>
        <option>React</option>
        <option>Firebase</option>
      </select>
    </div>
  );
}
