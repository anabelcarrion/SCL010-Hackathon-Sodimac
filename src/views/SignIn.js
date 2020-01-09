import React from 'react';
import { Link } from "react-router-dom";
import './SignIn.css'

const SignIn = () => {
        return (
            <div className="signIn">
                <div className="titleSignIn">
                    <h1>Crear cuenta</h1>
                    <p>acumula puntos y accede a descuentos exclusivos</p>
                </div>
                    <form>
                        <input placeholder="Nombre"></input>
                        <input placeholder="Rut"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="Contraseña"></input>
                        <input placeholder="Contraseña"></input>
                    </form>
                    <div className="checkboxDiv">
                        <input type="checkbox"></input>
                        <p className="checkbocP">Acepto términos</p>
                    </div>
                    <Link to="/PrincipalPage">
                        <button className="btnCreateAccount">Registrar</button>
                    </Link>
            </div>
        );
    };
    
export default SignIn;
