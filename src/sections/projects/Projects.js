import { useEffect, useState } from "react";
import { database, collection, getDocs } from "../../firebase/config";

import SortFilter from "../../components/filter/SortFilter";
import Filter from "../../components/filter/Filter";

import styles from "./Projects.module.css";

export default function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function getProjects() {
      const projectsCol = collection(database, "projects");
      const snapshot = await getDocs(projectsCol);
      const projectsList = snapshot.docs.map((doc) => doc.data());
      setProjects(projectsList);
    }
    getProjects();
  }, []);

  console.log(projects);

  return (
    <div className="section">
      <h2 className="title">My Projects</h2>
      <div className={styles["filter-container"]}>
        <SortFilter />
        <Filter />
      </div>

      {!projects ? (
        "loading..."
      ) : (
        <ul className={styles.container}>
          {projects.map((project) => (
            <li class={styles["project-card"]}>
              {/* title */}
              <h3 className={styles["project-title"]}>{project.title}</h3>

              {/* preview */}
              <img
                src={project.previewURL}
                alt="website preview gif"
                className={styles.gif}
              />

              {/* languages */}
              <ul className={styles.flex}>
                {project.languages.map((lang) => (
                  <li>
                    <p className={styles.languages}>{lang}</p>
                  </li>
                ))}
              </ul>

              {/* links */}
              <ul className={`${styles.flex} ${styles.links}`}>
                <li>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Website
                  </a>
                </li>
              </ul>

              {/* description */}
              <p className={`${styles.text} ${styles.description}`}>
                {project.description}
              </p>

              {/* bullet box */}
              <div className={styles["bullet-box"]}>
                {/* features */}
                <div style={{ width: "50%" }}>
                  <p className={styles.subtitle}>Features:</p>
                  <ul className={styles.text}>
                    {project.features.map((feature) => {
                      return <li className={styles.li}>{feature}</li>;
                    })}
                  </ul>
                </div>
                {/* learned list */}
                <div style={{ width: "50%" }}>
                  <p className={styles.subtitle}>Concepts learned:</p>
                  <ul className={styles.text}>
                    {project.learnedList.map((concept) => {
                      return <li className={styles.li}>{concept}</li>;
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
