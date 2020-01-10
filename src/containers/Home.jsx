import React, { useState } from 'react';
import HomeOver from '../components/HomeOver';
import { Container, Fade } from 'reactstrap';
import './Home.css';
import Login from '../views/Login';

const Home = () => {
    const [fadeIn, setFadeIn] = useState(true);
    const [loading, setLoading] = useState(true);

    if (loading,fadeIn) { 
        setTimeout( () => {
            setFadeIn(false);
        },2000); 
    } 
    else {
        setTimeout( () => {
            setLoading(false);
        },500); 
    };
    
    return (
        <div className="home">
            { loading
                ?
                    <Container>
                <Fade in={fadeIn} tag="h5" className="mt-3">
                        <HomeOver />
                </Fade>
                    </Container>
                :
                    <Login/>
            }
        </div>
    );
};

export default Home;
