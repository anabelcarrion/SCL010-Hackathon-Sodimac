import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import firebase from './config/firebase'

//importando las vistas
import Login from './views/Login';
import SignIn from './views/SignIn';
import PrincipalPage from './views/PrincipalPage';
import Home from './containers/Home';

const App=()=> {

  const db = firebase.firestore();
  const docRef = db.collection("sodimac").doc("ArQYrzeC1yVXp1z24xTt");
  docRef.get().then(function(doc) {
    console.log("documento de firebase", doc.data()) 
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
  
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
              path="/PrincipalPage"
              component={PrincipalPage} />
          </Switch>
        </React.Fragment>
      </Router>
  );
}
export default App;
