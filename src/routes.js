import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//importação dos components
import login from "./pages/login";

export default function Routes(){

    return(
        <Router>
            <Switch>
                <Route path={'/'} component={login} />
            </Switch>
        </Router>
    );

}