import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.sectionLabel}>About me</p>
          <h2 className={styles.title}>Building interfaces people enjoy using</h2>
          <p className={styles.bio}>
            I'm a self-taught front-end developer currently based in Latvia, focused on building modern web applications with React. I care deeply about clean code, good UX, and performance.
          </p>
          <p className={styles.bio}>
            Currently looking for my first professional role — internship or junior position — where I can contribute, grow, and work with a team.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>⚡</div>
            <div>
              <div className={styles.cardTitle}>Front-end development</div>
              <div className={styles.cardText}>Building responsive, accessible UIs with React and modern CSS. I focus on component architecture and clean, maintainable code.</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🔗</div>
            <div>
              <div className={styles.cardTitle}>Back-end & APIs</div>
              <div className={styles.cardText}>Experience with Firebase for real-time data and authentication. Currently expanding my back-end skills with Node.js.</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📐</div>
            <div>
              <div className={styles.cardTitle}>Responsive design</div>
              <div className={styles.cardText}>Every project I build works beautifully across all screen sizes. Mobile-first is the default, not an afterthought.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
