import React from 'react';
import Banner from '../Banner/Banner';
import Consult from '../Consult/Consult';
import Services from '../Services/Services';
import About from '../../About/About'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Consult></Consult>
            <About></About>
        </div>
    );
};

export default Home;