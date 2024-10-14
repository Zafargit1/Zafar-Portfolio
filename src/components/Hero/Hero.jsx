import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I am Zafar</h1>
            <p className={styles.description}>I am a web developer specialized in front-end development using React.js.</p>
            <a href="mailto:zafonline23@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/React.webp")} alt="My image" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    )
}