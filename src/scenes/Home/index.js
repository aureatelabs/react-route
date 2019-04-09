import React from "react";
import { Helmet } from 'react-helmet';
import styles from "./style.scss";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div  className={styles.home}>
                <h1>I'm home page.</h1>
            </div>
        </div>
    );
};

export default Home;
