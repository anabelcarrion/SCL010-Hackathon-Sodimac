import React from 'react';
import {Link} from "react-router-dom";
//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

//import { Button } from 'reactstrap';
import './Login.css'

//import SignIn from './views/SignIn';
//import PrincipalPage from './views/PrincipalPage';

const Login = () => {
    return (
        <div className="Login">
            <div className="titleLogin">
                <h1>¡Bienvenido a Sodimac!</h1>
            </div>
            <form>
            <input placeholder="correo electronico"></input>
            <input placeholder="contraseña"></input>
            </form>
            <div>
            <Link to="/PrincipalPage">
                <button className="btnLogin"> Iniciar sesión</button>
            </Link>
            <Link to="/SignIn">
            <button className="btnSignIn" >Crear cuenta</button>
            </Link>
            <Link to="/PrincipalPage">
            <button className="btnSignIn" >Omitir</button>
            </Link>
            <p>¿Olvidaste tu contraseña?</p>
            </div>
        </div>
    );
};

export default Login;