import { useState } from "react";

import styles from "./Bio.module.css";

export default function Bio() {
  const [bioLength, setBioLength] = useState("short");

  const lengthHandler = (e) => {
    setBioLength(e.target.getAttribute("id"));
  };

  return (
    <div className="section">
      <div className={styles["bio-section"]}>
        <h2 className="title">About Me</h2>

        {/* Bio section */}
        <div className={styles["bio-container"]}>
          <div className={styles["bio-info"]}>
            {/* selectors */}
            <ul className={styles["length-container"]}>
              <li className={styles["selection-container"]}>
                <div
                  className={`${styles.dots} ${
                    bioLength === "short" ? styles.active : ""
                  }`}
                  id="short"
                  onClick={lengthHandler}
                ></div>
                <div className={styles["length-words"]}>Short</div>
              </li>
              <li className={styles["selection-container"]}>
                <div
                  className={`${styles.dots} ${
                    bioLength === "medium" ? styles.active : ""
                  }`}
                  id="medium"
                  onClick={lengthHandler}
                ></div>
                <div className={styles["length-words"]}>Medium</div>
              </li>
              <li className={styles["selection-container"]}>
                <div
                  className={`${styles.dots} ${
                    bioLength === "long" ? styles.active : ""
                  }`}
                  id="long"
                  onClick={lengthHandler}
                ></div>
                <div className={styles["length-words"]}>Long</div>
              </li>
            </ul>
            {bioLength === "short" && (
              <div className={styles["bio-fade"]}>
                <p>
                  I am a front-end developer who was born and raised in Hawaii.
                  Being naturally curious and creative, I have found web
                  development to be an excellent fit for me.
                </p>
              </div>
            )}

            {bioLength === "medium" && (
              <div className={styles["bio-fade"]}>
                <p>
                  I am a front-end developer who was born and raised in Hawaii.
                  Being naturally curious and creative, I have found web
                  development to be an excellent fit for me.
                </p>
                <p>
                  I have lived abroad for a total of 10 years and am proficient
                  in two foreign languages, the experience of which helps me
                  know exactly what I need in order to learn languages. That
                  naturally includes programming languages as well.
                </p>
              </div>
            )}

            {bioLength === "long" && (
              <div className={styles["bio-fade"]}>
                <p>
                  I am a front-end developer who was born and raised in Hawaii.
                  Being naturally curious and creative, I have found web
                  development to be an excellent fit for me.
                </p>
                <p>
                  I have lived abroad for a total of 10 years and am proficient
                  in two foreign languages, the experience of which helps me
                  know exactly what I need in order to learn languages. That
                  naturally includes programming languages as well.
                </p>
                <p>
                  My hobbies include weightlifting and playing video games. I've
                  found weightlifting to be great at molding not only the
                  physical body, but the mind as well. It has taught me how
                  important keeping to a routine, consistantly improving, and
                  the quality of your work can be. Video games have taught me
                  how to look at how to improve myself rather than to blame
                  outside forces for failure.
                </p>
              </div>
            )}
          </div>
          <div className={styles.pictures}>PICTURES</div>
        </div>
      </div>
    </div>
  );
}
