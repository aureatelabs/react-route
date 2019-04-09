import React from "react";
import styles from "./style.scss";
import {Helmet} from "react-helmet";

const Portfolio = () => {

    return (
        <div>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <div  className={styles.portfolio}>
                <h1>I'm Portfolio page.</h1>
            </div>
        </div>
    );
};

export default Portfolio;
