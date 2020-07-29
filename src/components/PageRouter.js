import React from 'react';
import './components.css';
import Home from "./home.js";
import About from "./about.js"
import Contact from "./contact.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

/**
 * The routing function, will render differently depending on the hash shortcode of the url. Each route should be it's
 * own component in it's own file imported to this .js file, but for the sake of speed and testing, that will be done
 * later.
 *
 * EX: "/profile" will render whatever Route component has "/profile" as the path.
 * @returns a route.
 */

export default function PageRouter() {
    return (
            <Router basename={"/"}>
                <Switch>

                    <Route exact path="/aboutme" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
    );
}
