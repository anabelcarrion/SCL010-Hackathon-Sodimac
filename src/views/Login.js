import React from 'react';
import { Link } from "react-router-dom";
import './Login.css'
import firebase from '../config/firebase'

const Login = () => {
    
    return (
        <div className="Login">
            <div className="titleLogin">
                <h1>¡Bienvenido!</h1>
            </div>
                <form>
                    <input placeholder="correo electronico"></input>
                    <input placeholder="contraseña"></input>
                </form>
                <Link to="/PrincipalPage">
                    <button className="btnLogin"> Iniciar sesión</button>
                </Link>

                <Link to="/SignIn">
                    <button className="btnSignIn" >Crear cuenta</button>
                </Link>

                <Link to="/PasswordLost">
                    <p className="passwordLink">¿Olvidaste tu contraseña?</p>
                </Link>

                <Link to="/PrincipalPage">
                    <p className="omitirLink">Omitir</p>
                </Link>
        </div>
    );
};

export default Login;