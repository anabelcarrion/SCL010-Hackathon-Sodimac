import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
        return (
            <div className="signIn">
                <div className="titleSignIn">
                    <h1>Se parte de la comunidad de Sodimac</h1>
                    <p>acumula puntos y accede a descuentos especiales</p>
                </div>
                    <form>
                        <input placeholder="Nombre"></input>
                        <input placeholder="Rut"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="Contraseña"></input>
                        <input placeholder="Contraseña"></input>
                    </form>
                    <Link to="/PrincipalPage">
                        <button className="btnCreateAccount">Crear cuenta</button>
                    </Link>
            </div>
        );
    };
    
export default SignIn;
