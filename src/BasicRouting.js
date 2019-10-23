import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CounterGroup from "./components/counters/CounterGroup";
import FetchTodoFromApi from "./components/Fetch/FetchTodoFromApi";

function BasicRouting() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/counterGroup"}>counterGroup</Link></li>
                    <li><Link to={"/todoList"}>todoList</Link></li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/counterGroup">
                        <CounterGroup/>
                    </Route>
                    <Route path="/todoList">
                        <FetchTodoFromApi/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default BasicRouting;