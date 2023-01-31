import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';

const home = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <Partners />
        </div>
    );
};

export default home;
