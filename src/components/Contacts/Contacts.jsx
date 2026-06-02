import React from "react";
import styles from "./Contacts.module.css";
import { getImageUrl } from "../../utils";

export const Contacts = () => {
  return (
    <footer className={styles.container} id="contacts">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.sectionLabel}>Get in touch</p>
          <h2 className={styles.title}>Let's work<br/>together.</h2>
          <p className={styles.subtitle}>
            I'm actively looking for internships and junior front-end roles. If you have an opportunity, I'd love to hear from you.
          </p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="" />
            <a href="mailto:zafonline23@gmail.com">zafonline23@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
            <a href="https://www.linkedin.com/in/zafar-parpiev" target="_blank" rel="noreferrer">linkedin.com/in/zafar-parpiev</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="" />
            <a href="https://github.com/Zafargit1" target="_blank" rel="noreferrer">github.com/Zafargit1</a>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>© 2025 Zafar Parpiev — built with React</p>
    </footer>
  );
};
