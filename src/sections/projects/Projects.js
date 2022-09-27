import { useEffect, useState } from "react";
import { database, collection, getDocs } from "../../firebase/config";

import SortFilter from "../../components/filter/SortFilter";
import Filter from "../../components/filter/Filter";
import dropdown from "./icons/dropdown.svg";

import styles from "./Projects.module.css";

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const [filter, setFilter] = useState("All languages");
  const [sort, setSort] = useState("new");

  const filteredProjects = projects
    ? projects.filter((project) => {
        if (filter === "All languages") return true;
        else {
          return project.languages.includes(filter);
        }
      })
    : null;

  const sortedProjects =
    filteredProjects && sort === "new"
      ? filteredProjects.sort(function (a, b) {
          return b.id - a.id;
        })
      : filteredProjects;

  useEffect(() => {
    async function getProjects() {
      const projectsCol = collection(database, "projects");
      const snapshot = await getDocs(projectsCol);
      const projectsList = snapshot.docs.map((doc) => doc.data());
      setProjects(projectsList);
    }
    getProjects();
  }, []);

  const openDropdown = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle(
      styles["bullet-dropdown--open"]
    );
    e.currentTarget.nextElementSibling.classList.toggle(
      styles["bullet-dropdown--closed"]
    );
  };

  return (
    <div className="section page">
      <div className={styles["filter-container"]}>
        <SortFilter setSort={setSort} />
        <p className={styles.header}>My Projects</p>
        <Filter setFilter={setFilter} />
      </div>

      {!sortedProjects ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <ul className={`${styles.container} page`}>
          {sortedProjects.map((project) => (
            <li key={project.id} className={styles["project-card"]}>
              {/* title */}
              <div className={styles["project-header"]}>
                <h3 className={styles["project-title"]}>{project.title}</h3>
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

              <div className={styles["project-info-container"]}>
                {/* description */}
                <div>
                  <span className={styles.subtitle}>Description:</span>
                  <p className={styles.description}>{project.description}</p>
                </div>

                {/* bullet box */}
                <div className={styles["bullet-box"]}>
                  {/* features */}
                  <div style={{ width: "50%" }}>
                    <div
                      className={`${styles.subtitle} ${styles.dropdown}`}
                      onClick={openDropdown}
                    >
                      <p>Features:</p>
                      <img
                        className={styles["dropdown-icon"]}
                        src={dropdown}
                        alt="dropdown menu icon"
                      />
                    </div>
                    <ul className={styles["bullet-dropdown--closed"]}>
                      {project.features.map((feature) => {
                        return (
                          <li key={feature.trim()} className={styles.li}>
                            {feature}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* learned list */}
                  <div style={{ width: "50%" }}>
                    <div
                      className={`${styles.subtitle} ${styles.dropdown}`}
                      onClick={openDropdown}
                    >
                      <p>Concepts learned:</p>
                      <img
                        className={styles["dropdown-icon"]}
                        src={dropdown}
                        alt="dropdown menu icon"
                      />
                    </div>
                    <ul className={styles["bullet-dropdown--closed"]}>
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
                <div className={styles.bottom}>
                  <p className={styles.subtitle}>
                    Biggest challenge in this project:
                  </p>
                  <p className={styles.text}>{project.biggestChallenge}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
