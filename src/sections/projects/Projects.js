import { useEffect, useState } from "react";
import { database, collection, getDocs } from "../../firebase/config";

import Card from "../../components/card/Card";

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
    <div>
      <p>project</p>
      {!projects ? (
        "loading..."
      ) : (
        <ul className={styles.flex}>
          {projects.map((project) => (
            <li>
              <Card class={styles["project-card"]}>
                {/* title */}
                <p>{project.title}</p>

                {/* preview */}

                {/* languages */}
                <ul className={styles.flex}>
                  {project.languages.map((lang) => (
                    <li>{lang}</li>
                  ))}
                </ul>

                {/* links */}
                <ul className={styles.flex}>
                  <li>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Github link
                    </a>
                  </li>
                  <li>
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Website link
                    </a>
                  </li>
                </ul>

                {/* description */}
                <p>{project.description}</p>

                {/* bullet box */}
                <div className={styles.flex}>
                  {/* features */}
                  <div>
                    <p>Features:</p>
                    <ul>
                      {project.features.map((feature) => {
                        return <li className={styles.li}>{feature}</li>;
                      })}
                    </ul>
                  </div>
                  {/* learned list */}
                  <div>
                    <p>Concepts learned through this project:</p>
                    <ul>
                      {project.learnedList.map((concept) => {
                        return <li className={styles.li}>{concept}</li>;
                      })}
                    </ul>
                  </div>
                </div>

                {/* biggest challenge */}
                <p>Biggest Challenge in this project:</p>
                <p>{project.biggestChallenge}</p>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
