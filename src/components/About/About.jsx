import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>

            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="My picture" className={styles.aboutImage}/>

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-end developer</h3>
                            <p>I'm front end react developer and I build responsive nice designed websites.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Back-end developer</h3>
                            <p>I'm front end react developer and I build responsive nice designed websites.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>UI developer</h3>
                            <p>I'm front end react developer and I build responsive nice designed websites.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}