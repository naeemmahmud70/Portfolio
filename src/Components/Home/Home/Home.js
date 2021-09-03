import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import MyService from '../../MyService/MyService';
import Review from '../../Review/Review';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Header from './Header/Header';

const Home = () => {
    return (
        <div style={{ background: '#1E2749' }}>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <MyService></MyService>
            <Projects></Projects>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;