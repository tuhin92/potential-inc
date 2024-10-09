import React from 'react';
import Banner from '../../Components/Banner';
import About_me from '../../Components/About_me';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <About_me></About_me>
        </div>
    );
};

export default Home;