import styles from "./Filter.module.css";

export default function SortFilter({ setSort }) {
  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className={`flex-col ${styles.filter}`}>
      <label className={styles.label}>Sort by:</label>
      <select className={styles.select} onChange={sortHandler}>
        <option value="new">Date (newest)</option>
        <option value="old">Date (oldest)</option>
      </select>
    </div>
  );
}
