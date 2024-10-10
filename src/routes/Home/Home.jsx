import React from 'react';
import Banner from '../../Components/Banner';
import About_me from '../../Components/About_me';
import Services from '../../Components/Services';
import Projects from '../../Components/Projects';
import Together from '../../Components/Together';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <About_me></About_me>
            <Services></Services>
            <Projects></Projects>
            <Together></Together>
        </div>
    );
};

export default Home;