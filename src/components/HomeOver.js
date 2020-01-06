import React, { Component } from "react";
import './HomeOver.css'
import Logo from '../img/logo.png'

class Home extends Component {
  render() {
    return (
        <div class="homeOver">
            <img src= { Logo } alt="logoSodimac" className="logoSodimac"></img>        
        </div>
    )
  }}

  export default Home;