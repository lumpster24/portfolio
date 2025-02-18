import { useEffect, useRef, useState } from "react";

import pics from "./pics";
import styles from "./Bio.module.css";

export default function Bio() {
  const [bioLength, setBioLength] = useState("short");

  const prevBioLength = useRef();

  useEffect(() => {
    prevBioLength.current = bioLength;
  }, [bioLength]);

  useEffect(() => {
    let i = 0;

    let changePic = setInterval(() => {
      if (i >= pics.length) i = 0;
      pic.current.style.backgroundImage = `url(${pics[i]})`;

      i++;
    }, 6000);
    return () => clearInterval(changePic);
  }, []);

  const lengthHandler = (e) => {
    setBioLength(e.target.getAttribute("id"));
  };

  const pic = useRef();

  const shortBio = `I am a front-end developer who was born and raised in Hawaii.
  Being naturally curious and creative, I have found web
  development to be an excellent fit for me.`;

  const mediumBio = `I have lived abroad for a total of 10 years and am proficient
  in two foreign languages, which helps me
  know exactly what I need in order to learn languages, including programming languages. This along with my 8 years of teaching experience has helped me hone my communication skills, making me a valuble team member.`;

  const longBio = `My hobbies include weightlifting and playing video games. I've
  found weightlifting to be great at molding not only the
  physical body, but the mind as well. It has taught me how
  important qualities such as keeping to a routine, consistantly improving, and
  producing quality work can be. Video games have taught me
  how to look at how to improve myself rather than to blame
  outside forces for failure.`;

  return (
    <div className="section fadeIn">
      <div className={`flex-col section`}>
        <h2 className="page-header">About Me</h2>

        {/* Bio section */}
        <div className={styles["bio-container"]}>
          <div className={`flex-col ${styles["bio-info"]}`}>
            {/* selectors */}
            <ul className={styles["length-container"]}>
              <li key="1" className={styles["selection-container"]}>
                <div
                  className={`${styles.dots} ${
                    bioLength === "short" ? styles.active : ""
                  }`}
                  id="short"
                  onClick={lengthHandler}
                ></div>
                <div className={styles["length-words"]}>Short</div>
              </li>
              <li key="2" className={styles["selection-container"]}>
                <div
                  className={`${styles.dots} ${
                    bioLength === "medium" ? styles.active : ""
                  }`}
                  id="medium"
                  onClick={lengthHandler}
                ></div>
                <div className={styles["length-words"]}>Medium</div>
              </li>
              <li key="3" className={styles["selection-container"]}>
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
            {/* bio text */}
            <div>
              <p>{shortBio}</p>
              {bioLength === "medium" || bioLength === "long" ? (
                <p
                  className={
                    prevBioLength.current === "short" ? styles["bio-fade"] : ""
                  }
                >
                  {mediumBio}
                </p>
              ) : (
                ""
              )}

              {bioLength === "long" && (
                <p
                  className={
                    prevBioLength.current === "short" ||
                    prevBioLength.current === "medium"
                      ? styles["bio-fade"]
                      : ""
                  }
                >
                  {longBio}
                </p>
              )}
            </div>
          </div>
          {/* bio pictures */}
          <div ref={pic} className={styles.pictures}></div>
        </div>
      </div>
    </div>
  );
}
