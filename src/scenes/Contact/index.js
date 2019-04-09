import React from "react";
import styles from "./style.scss";
import {Helmet} from "react-helmet";

const Contact = () => {

    return (
        <div>
            <Helmet>
                <title>Contact us</title>
            </Helmet>
            <div className={styles.contact}>
                <h1>I'm Contact us page.</h1>
            </div>
        </div>
    );
};

export default Contact;
