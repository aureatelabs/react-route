import React from "react";
import styles from "./style.scss";
import {Helmet} from "react-helmet";

const About = () => {

    return (
        <div>
            <Helmet>
                <title>About us</title>
            </Helmet>
            <div className={styles.about}>
                <h1>I'm About us page.</h1>
            </div>
        </div>
    );
};

export default About;
