import React from "react";
import styles from "./style.scss";
import {Helmet} from "react-helmet";

const Services = () => {

    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div  className={styles.services}>
                <h1>I'm Services page.</h1>
            </div>
        </div>
    );
};

export default Services;
