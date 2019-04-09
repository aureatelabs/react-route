import React from "react";
import styles from "./style.scss";
import { Link } from "react-router-dom";
import logo from './images/logo.png';

const Logo = () => {

    return (
        <Link to="/" className={styles["navbar-brand"]} >
            <img src={logo} alt="Logo" />
        </Link>
    );
};

export default Logo;
