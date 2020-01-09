import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

//importando las vistas
import Login from './views/Login';
import SignIn from './views/SignIn';
import PrincipalPage from './views/PrincipalPage';
import Home from './containers/Home';
import PasswordLost from './views/PasswordLost';

const App=()=> {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Redirect
            exact
            from="/"
            to="/Home" />
          <Switch>
            <Route
              path="/Home"
              component={Home} />
              <Route
              path="/Login"
              component={Login} />
              <Route
              path="/SignIn"
              component={SignIn} />
              <Route
              path="/PasswordLost"
              component={PasswordLost} />
              <Route
              path="/PrincipalPage"
              component={PrincipalPage} />
          </Switch>
        </React.Fragment>
      </Router>
  );
}
export default App;
