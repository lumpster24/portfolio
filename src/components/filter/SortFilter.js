import styles from "./Filter.module.css";

// ib, cd: thought: it looks like <SortFilter /> and <Filter /> are similar. I would create a reusable component
// that can be used for both
export default function SortFilter({ setSort }) {
	// ib, cd: suggestion - have the parent component define sortHandler
	const sortHandler = (e) => {
		setSort(e.target.value);
	};

	return (
		<div className={`flex--col ${styles.filter}`}>
			<label className={styles.label}>Sort by:</label>
			<select className={styles.select} onChange={sortHandler}>
				<option value="new">Date (newest)</option>
				<option value="old">Date (oldest)</option>
			</select>
		</div>
	);
}
