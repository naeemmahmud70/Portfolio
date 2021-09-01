import React from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;