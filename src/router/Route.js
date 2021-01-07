
import React from 'react'
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
// import User from "./views/users/User";
// import Header from "./components/partial/Header";
import Login from "./";


function Route() {
    return (
        <div>
        <Switch>
        <Route path="/users">
    
        </Route>
        <Route path="/">
        <Login></Login>
        </Route>
      </Switch> 
        </div>
    )
}

export default Route
