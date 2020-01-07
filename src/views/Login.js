import React from 'react';
import './Login.css'

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
            <button className="btnLogin"> Iniciar sesión</button>
            <button className="btnSignIn">Crear cuenta</button>
            <p>¿Olvidaste tu contraseña?</p>
        </div>
    );
};

export default Login;