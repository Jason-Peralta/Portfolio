import React from 'react';
import './components.css';
import Home from "./routes/home.js";
import About from "./routes/about.js"
import Contact from "./routes/contact.js"
import Resume from "./routes/resume.js"
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
                    <Route exact path="/resume" component={Resume}/>
                    <Route exact path="/aboutme" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
    );
}
