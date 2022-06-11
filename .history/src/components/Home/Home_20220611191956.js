import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About />
            <Skill />
        </div>
    );
};

export default Home;