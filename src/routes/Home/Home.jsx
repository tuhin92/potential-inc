import React from 'react';
import Banner from '../../Components/Banner';
import About_me from '../../Components/About_me';
import Services from '../../Components/Services';
import Projects from '../../Components/Projects';
import Together from '../../Components/Together';
import Testimonials from '../../Components/Testimonials';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About_me />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Together />
      </div>
    </div>
  );
};

export default Home;
