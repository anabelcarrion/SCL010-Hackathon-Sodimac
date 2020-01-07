import React, { useState } from 'react';
import HomeOver from '../components/HomeOver';
import { Container, Fade, Button} from 'reactstrap';
import './Home.css';
import Login from '../views/Login';

const Home = (props) => {

   
    const [fadeIn, setFadeIn] = useState(true);
    const toggle = () => setFadeIn(!fadeIn);
    
    const [loading, setLoading] = useState(true);

    setTimeout( () => {
        setFadeIn(false);
        setLoading(false);
    },3200);

    return (
        <div className="home col-md-12">
            { loading
                ?
                    <Container>
                <Fade in={fadeIn} tag="h5" className="mt-3">
                        <HomeOver />
                        <Button color="primary" onClick={toggle}>Toggle Fade</Button>
                </Fade>
                    </Container>
                :
                    <div className="options">
                        <Login />
                    </div>
            }
        </div>
    );
};

export default Home;
