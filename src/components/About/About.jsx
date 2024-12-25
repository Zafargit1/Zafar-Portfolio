import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>

            <div className={styles.content}>
                <img src={getImageUrl("about/hero.webp")} alt="My picture" className={styles.aboutImage}/>

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-end development</h3>
                            <p>I'm front-end React developer and I build responsive nice designed websites.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Back-end side</h3>
                            <p>I mainly use in my projects Firebase, and at the same time I'm learning Python to use it in back-end in future projects.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Responsive design</h3>
                            <p>I have great experince in designing responsive websites.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}