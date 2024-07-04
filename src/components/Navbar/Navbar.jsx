import React, { useState } from "react";
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>

            <div className={styles.menu}>
                <img 
                src={ menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                alt="menu-button" className={styles.menuBtn}
                onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li className={styles.navbarLink}>
                        <a href="#about">About</a>
                    </li>
                    <li className={styles.navbarLink}>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className={styles.navbarLink}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className={styles.navbarLink}>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}