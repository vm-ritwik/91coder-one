import {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./modules/home/home";
import ProblemPage from "./modules/problems/problemPage";

function App() {


    useEffect(() => {
    }, []);

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path={"/problem/:problemId"} component={ProblemPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;