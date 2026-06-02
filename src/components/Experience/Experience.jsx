import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Tech stack</p>
        <h2 className={styles.title}>Skills & tools</h2>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
