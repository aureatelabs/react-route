import React from "react";
import styles from "./style.scss";

const Footer = () => {

    const year = (new Date()).getFullYear();

    return (
        <footer className={styles.footer_area}>
            Copyright &copy; {year} All rights reserved
        </footer>
    );
};


export default Footer;
