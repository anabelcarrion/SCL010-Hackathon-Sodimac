import React from 'react';
import {Link} from "react-router-dom";


// vista incial, donde se va a crear el juego
const PrincipalPage  = () => {

  return (
    <div id="outer-section">
    <h1> estoy en la pagina principal</h1>
    <Link to="/Login">
            <button className="btnSignIn" >regresar</button>
    </Link>
    </div>   
  );
};

export default PrincipalPage;