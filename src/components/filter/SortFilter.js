import styles from "./Filter.module.css";

export default function SortFilter({ setSort }) {
  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <label className={styles.label}>Sort by:</label>
      <select onChange={sortHandler}>
        <option value="new">Date (newest)</option>
        <option value="old">Date (oldest)</option>
      </select>
    </div>
  );
}
