import React, { useState } from 'react';
import HomeOver from '../components/HomeOver';
import { Container} from 'reactstrap';
import './Home.css';
import Login from '../views/Login';

const Home = () => {

    const [loading, setLoading] = useState(true);

    setTimeout( () => {
        setLoading(false);
    },1200);

    return (
        <div className="home col-md-12">
            { loading
                ?
                    <Container>
                        <HomeOver />
                    </Container>
                :
                    <div className="options">
                        <Login/>
                    </div>
            }
        </div>
    );
};

export default Home;
