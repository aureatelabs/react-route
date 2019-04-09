import React from "react";
import styles from "./style.scss";
import {Helmet} from "react-helmet";

const Blog = () => {

    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <div className={styles.blog}>
                <h1>I'm Blog Page.</h1>
            </div>
        </div>
    );
};

export default Blog;
