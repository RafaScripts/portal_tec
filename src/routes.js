import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//importação dos components
import login from "./pages/login";
import home from "./pages/home";

export default function Routes(){

    return(
        <Router>
            <Switch>
                <Route path={'/'} exact component={login} />
                <Route path={'/home'} exact component={home} />
            </Switch>
        </Router>
    );

}