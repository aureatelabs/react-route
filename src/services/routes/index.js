import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Routes = () => {

    return (
        <Router>
            <Header/>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
            <Footer/>
        </Router>
    );
};


export default Routes;
