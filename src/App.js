import { useState } from "react";
import NavItems from "./components/navbar/NavItems";
import Namecard from "./sections/hero/Namecard";
import Projects from "./sections/projects/Projects";
import Bio from "./sections/bio/Bio";
import Contact from "./sections/contact/Contact";

import styles from "./App.module.css";

// ib, cd: suggestion: use react router rather than tracking the current page and switching out the component

function App() {
	const [page, setPage] = useState("home");

	return (
		<div className={`flex--col ${styles["app-container"]}`}>
			<div className={`flex--col ${styles["name-card"]}`}>
				<div className={styles["component-container"]}>
					{page === "home" && <Namecard />}
					{page === "projects" && <Projects />}
					{page === "aboutme" && <Bio />}
					{page === "contactme" && <Contact />}
				</div>
				<NavItems
					setPage={setPage}
					ulClass={styles["flex-nav"]}
					liClass={styles.li}
				/>
			</div>
		</div>
	);
}

export default App;
