import React from 'react';
import Banner from '../../Components/Banner';
import About_me from '../../Components/About_me';
import Services from '../../Components/Services';
import Projects from '../../Components/Projects';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <About_me></About_me>
            <Services></Services>
            <Projects></Projects>
        </div>
    );
};

export default Home;