import React from 'react';
import {Link} from "react-router-dom";


// vista incial, donde se va a crear el juego
const PasswordLost  = () => {

  return (
    <div id="outer-section">
    <h1> estoy en recuperar contraseña</h1>
    <Link to="/Login">
            <button className="btnSignIn" >regresar</button>
    </Link>
    </div>   
  );
};

export default PasswordLost;