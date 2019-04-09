import React from "react";
import Home from "../../scenes/Home"
import About from "../../scenes/About"
import Contact from "../../scenes/Contact"
import Services from "../../scenes/Services";
import Portfolio from "../../scenes/Portfolio";
import Blog from "../../scenes/Blog";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/services",
        component: Services
    },
    {
        path: "/portfolio",
        component: Portfolio
    },
    {
        path: "/blog",
        component: Blog
    },
    {
        path: "/contact",
        component: Contact
    }
];

export default routes;
