import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import Login from '../views/Login';
import SignIn from '../views/SignIn';

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/signIn" component={ SignIn } />
        </Switch>
    </Router>
  );
}