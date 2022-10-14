import { useEffect, useState } from "react";
import { database, collection, getDocs } from "../../firebase/config";

import SortFilter from "../../components/filter/SortFilter";
import Filter from "../../components/filter/Filter";
import dropdown from "./icons/dropdown.svg";

import styles from "./Projects.module.css";

export default function Projects() {
	const [projects, setProjects] = useState(null);
	// ib, cd: suggestion: use object for options - example { label: 'All languages', value: 'all' }
	const [filter, setFilter] = useState("All languages");
	const [sort, setSort] = useState("new");

	// ib, cd: suggestion: use the optional chaining operator ("?." - projects?.filter())
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

	// ib, cd: suggestion: only do projects.filter() if the filter is not "All languages"
	const filteredProjects = projects
		? projects.filter((project) => {
				if (filter === "All languages") return true;
				else {
					return project.languages.includes(filter);
				}
		  })
		: null;

	// ib, cd: thought: i'm guessing you're sorting by id because the ids are generated sequentially. but, sorting by "new"
	// should really be based off of time values (if there are any on the database record like created_at or updated_at)
	const sortedProjects =
		filteredProjects && sort === "new"
			? filteredProjects.sort(function (a, b) {
					return b.id - a.id;
			  })
			: filteredProjects;

	useEffect(() => {
		// ib, cd: suggestion: use an async iffy function since this function is only called once
		async function getProjects() {
			const projectsCol = collection(database, "projects");
			// ib, cd: issue: use a try/catch block
			const snapshot = await getDocs(projectsCol);
			const projectsList = snapshot.docs.map((doc) => doc.data());
			setProjects(projectsList);
		}
		getProjects();
	}, []);

	// ib, cd: question - is there a reason you're toggling both --open and --closed?
	const openDropdown = (e) => {
		e.currentTarget.nextElementSibling.classList.toggle(
			styles["bullet-dropdown--open"]
		);
		e.currentTarget.nextElementSibling.classList.toggle(
			styles["bullet-dropdown--closed"]
		);
	};

	return (
		<div className="section fadeIn">
			<div className={styles["filter-container"]}>
				<SortFilter setSort={setSort} />
				{/* ib, cd: nitpick: make h1 */}
				<p className="page-header">My Projects</p>
				<Filter setFilter={setFilter} />
			</div>

			{!sortedProjects ? (
				<p className={styles.loading}>Loading...</p>
			) : (
				<ul className={`${styles["projects-container"]} flex--col fadeIn`}>
					{sortedProjects.map((project) => (
						<li key={project.id} className={`fadeIn ${styles["project-card"]}`}>
							{/* title */}
							<div className={styles["project-header"]}>
								<p className={`subtitle ${styles["project-title"]}`}>
									{project.title}
								</p>
								{/* languages */}
								<ul className={styles.flex}>
									{project.languages.map((lang) => (
										<li key={lang}>
											<p className={styles.languages}>{lang}</p>
										</li>
									))}
								</ul>
								{/* links */}
								<ul className={`${styles.flex} ${styles.links}`}>
									{/* ib, cd: chore: don't think the 'key' prop is needed since it's not in a map function */}
									<li key={project.githubLink}>
										<a
											href={project.githubLink}
											target="_blank"
											rel="noreferrer noopener"
										>
											GitHub
										</a>
									</li>
									<li key={project.websiteLink}>
										<a
											href={project.websiteLink}
											target="_blank"
											rel="noreferrer noopener"
										>
											Website
										</a>
									</li>
								</ul>
							</div>

							{/* preview */}
							<img
								src={project.previewURL}
								alt="website preview gif"
								className={styles.gif}
							/>

							<div className={`flex--col ${styles["project-info-container"]}`}>
								{/* description */}
								<div>
									<span className={styles["project-subtitle"]}>
										Description:
									</span>
									<p className={styles.description}>{project.description}</p>
								</div>

								{/* bullet box */}
								<div className={styles["bullet-container"]}>
									{/* features */}
									{/* ib, cd: chore: try not to use inline css */}
									{/* ib, cd: suggestion: the Features section and Concepts learned section seem similar. I would make a
									reusable component */}
									<div style={{ width: "50%" }}>
										<div
											className={`${styles["project-subtitle"]} ${styles.dropdown}`}
											onClick={openDropdown}
										>
											<p>Features:</p>
											<img
												className={styles["dropdown-icon"]}
												src={dropdown}
												alt="dropdown menu icon"
											/>
										</div>
										<ul
											className={`${styles["small-text"]} ${styles["bullet-dropdown--closed"]}`}
										>
											{/* ib, cd: nitpick: the return can be shortened by using parenthesis */}
											{project.features.map((feature) => {
												return (
													// ib, cd: question: any reason you're doing .trim() for key and not for the li text?
													<li key={feature.trim()} className={styles.li}>
														{feature}
													</li>
												);
											})}
										</ul>
									</div>
									{/* learned list */}
									{/* ib, cd: chore: try not to us inline css */}
									<div style={{ width: "50%" }}>
										<div
											className={`${styles["project-subtitle"]} ${styles.dropdown}`}
											onClick={openDropdown}
										>
											<p>Concepts learned:</p>
											<img
												className={styles["dropdown-icon"]}
												src={dropdown}
												alt="dropdown menu icon"
											/>
										</div>
										<ul
											className={`${styles["small-text"]} ${styles["bullet-dropdown--closed"]}`}
										>
											{project.learnedList.map((concept) => {
												return (
													<li key={concept.trim()} className={styles.li}>
														{concept}
													</li>
												);
											})}
										</ul>
									</div>
								</div>

								{/* biggest challenge */}
								<div>
									<p className={styles["project-subtitle"]}>
										Biggest challenge in this project:
									</p>
									<p className={styles["small-text"]}>
										{project.biggestChallenge}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
