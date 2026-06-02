import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        zafar<span className={styles.titleAccent}>.</span>dev
      </a>
      <div className={styles.menu}>
        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}>
          <li className={styles.navbarLink}><a href="#about">About</a></li>
          <li className={styles.navbarLink}><a href="#experience">Skills</a></li>
          <li className={styles.navbarLink}><a href="#projects">Projects</a></li>
          <li className={styles.navbarLink}><a href="#contacts">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
