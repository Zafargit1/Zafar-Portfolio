import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid} />
      <div className={styles.glow} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Front-end developer</span>
        <h1 className={styles.title}>
          Hi, I'm Zafar<br />
          <span className={styles.titleLine2}>Parpiev.</span>
        </h1>
        <p className={styles.description}>
          I build clean, fast, and accessible web applications. Focused on React, TypeScript, and modern UI that doesn't just look good — it works.
        </p>
        <div className={styles.actions}>
          <a href="mailto:zafonline23@gmail.com" className={styles.contactBtn}>
            Get in touch
          </a>
          <a href="#projects" className={styles.scrollBtn}>
            View my work <span className={styles.scrollArrow}>↓</span>
          </a>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNum}>5+</div>
          <div className={styles.statLabel}>projects built</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>2+</div>
          <div className={styles.statLabel}>years learning</div>
        </div>
      </div>
    </section>
  );
};
