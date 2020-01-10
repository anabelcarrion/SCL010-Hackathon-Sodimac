import React from 'react';
import CarouselOfImages from '../components/CarouselOfImages';
import Cards from '../components/Cards';
import FooterNav from '../components/FooterNav';
import SearchNavbar from '../components/SearchNavbar';

// vista incial, donde se va a crear el juego
const PrincipalPage  = () => {

  return (
    <div id="outer-section">
    <SearchNavbar />
    <br/> 
    <CarouselOfImages/>
    <br/> 
    <Cards/>
    
    <FooterNav />
    </div>   
  );
};

export default PrincipalPage;