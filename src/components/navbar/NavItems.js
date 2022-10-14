import "./NavItems.module.css";

import styles from "./NavItems.module.css";

export default function NavItems({ ulClass, liClass, setPage }) {
	// ib, cd: suggestion - have the parent component define pageHandler
	const pageHandler = (e) => {
		//setPage found in Hero.js
		setPage(e.target.value);
	};

	return (
		<>
			<ul className={ulClass}>
				{/* ib, cd: suggestion: use a map function for the li's since they're all pretty similar */}
				<li className={`${liClass}`}>
					<button
						value="home"
						className={styles["page-nav"]}
						onClick={pageHandler}
					>
						Home
					</button>
				</li>

				<li className={`${liClass}`}>
					<button
						value="projects"
						className={styles["page-nav"]}
						onClick={pageHandler}
					>
						My Projects
					</button>
				</li>

				<li className={`${liClass}`}>
					<button
						value="aboutme"
						className={styles["page-nav"]}
						onClick={pageHandler}
					>
						About Me
					</button>
				</li>

				<li className={`${liClass}`}>
					<button
						value="contactme"
						className={styles["page-nav"]}
						onClick={pageHandler}
					>
						Contact Me
					</button>
				</li>

				<li className={`${styles.li} ${liClass}`}>
					<a
						href="https://github.com/Knikkey"
						target="_blank"
						rel="noreferrer noopener"
						className={styles.a}
					>
						GitHub
					</a>
				</li>

				<li className={`${styles.li} ${liClass}`}>
					<a href="/" className={styles.a}>
						Resume
					</a>
				</li>
			</ul>
		</>
	);
}
