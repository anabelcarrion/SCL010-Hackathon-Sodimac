import React from 'react';
import {Link} from "react-router-dom";
import CarouselOfImages from '../components/CarouselOfImages';
import Cards from '../components/Cards';
import FooterNav from '../components/FooterNav';

// vista incial, donde se va a crear el juego
const PrincipalPage  = () => {

  return (
    <div id="outer-section">
    <h1>Página principal</h1>
    <Link to="/Login">
            <button className="btnSignIn" >Volver</button>
    </Link>
    <div className="col-md-10">
    <CarouselOfImages/>
    </div>

    <div className="col-md-3">
    <Cards/>
    </div>
    <FooterNav />
    </div>   
  );
};

export default PrincipalPage;