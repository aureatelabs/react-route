import React from "react";
import styles from "./style.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="collapse navbar-collapse offset" id={styles.navbarSupportedContent}>
            <ul className={styles.nav}>
                <li className={styles["nav-item"]}>
                    <Link to="/" className={styles["nav-link"]}>Home</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/about" className={styles["nav-link"]}>About</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/services" className={styles["nav-link"]}>Services</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/portfolio" className={styles["nav-link"]}>Portfolio</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/blog" className={styles["nav-link"]}>Blog</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/contact" className={styles["nav-link"]}>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
