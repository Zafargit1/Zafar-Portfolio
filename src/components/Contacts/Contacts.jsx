import React from "react";
import styles from "./Contacts.module.css";
import { getImageUrl } from "../../utils";

export const Contacts = () => {
    return(
        <footer className={styles.container} id="contacts">
            <div className={styles.text}>
                <h2>Contacts</h2>
                <p>Feel free to reach out</p>
            </div>

            {/* Contact Links */}
            <ul className={styles.links}> 
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                    <a href="mailto:zafonline23@gmail.com">@zafonline23@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedIn Icon" />
                    <a href="https://www.linkedin.com/in/zafar-parpiev" target="_blank">linkedin.com/zafar-parpiev</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="GitHub Icon" />
                    <a href="https://github.com/Zafargit1" target="_blank">github.com/Zafargit1</a>
                </li>
            </ul>
        </footer>
    )
}