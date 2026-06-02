import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  index,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrap}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`${title} preview`}
          className={styles.image}
        />
        <span className={styles.indexTag}>0{index + 1}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={demo} className={`${styles.link} ${styles.linkPrimary}`} target="_blank" rel="noreferrer">
            ↗ Live demo
          </a>
          <a href={source} className={styles.link} target="_blank" rel="noreferrer">
            ⌥ Source code
          </a>
        </div>
      </div>
    </div>
  );
};
