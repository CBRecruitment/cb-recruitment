import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FAQs = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex flex-grow justify-center items-center bg-[var(--cream)]'>
                <h1 className='text-7xl text-[var(--orange)] Magnify-Bold'>
                    Coming soon...
                </h1>
            </div>
            <Footer />
        </div>
    );
};

export default FAQs;
