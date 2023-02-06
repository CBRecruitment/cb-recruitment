import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';

const Home = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <Hero />
            <Partners />
        </div>
    );
};

export default Home;
