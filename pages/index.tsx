import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import LearnMore from '../components/LearnMore';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';

const Home = () => {
    return (
        <>
            <div className=''>
                <Navbar />
                <Hero />
                <Partners />
                <LearnMore />
            </div>
        </>
    );
};

export default Home;
