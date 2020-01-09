import React  from 'react';
import './FooterNav.css';
import homeIcon from '../img/home.svg';
import catalogue from '../img/catalogue.svg'
import scanner from '../img/scanner.svg';
import storemap from '../img/storemap.svg'

const FooterNav = () => {
      
  return (
      <footer className="store-nav">
        <img src={homeIcon}></img>
        <img src={catalogue}></img>
        <img src={scanner}></img>
        <img src={storemap}></img>
      </footer>
  );
};

export default FooterNav;