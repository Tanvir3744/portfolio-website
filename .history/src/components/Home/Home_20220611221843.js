import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Serivces from '../Services/Serivces';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About />
            <Skill />
            <Serivces/>
        </div>
    );
};

export default Home;