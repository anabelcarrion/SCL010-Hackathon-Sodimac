import React from 'react';
import Home from './containers/Home';
import firebase from './config/firebase'

function App() {

    const db = firebase.firestore();
    const docRef = db.collection("sodimac").doc("ArQYrzeC1yVXp1z24xTt");
    docRef.get().then(function(doc) {
      console.log("documento de firebase", doc.data()) 
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
    
    return (
      <div className="App">
        <Home />
        </div>
    );
  }


export default App;