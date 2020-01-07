import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="home col-md-12">
            <h1>Sign In</h1>
            <Link to="/Login">
            <button className="btnSignIn" >regresar</button>
    </Link>
        </div>
    );
};

export default SignIn;
