import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ThankYou = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex justify-center bg-[var(--darkgray)] h-full'>
                <h1 className='flex items-center text-[var(--orange)] text-4xl'>
                    Your CV was successfully uploaded, thank you for applying!
                </h1>
            </div>
            <Footer />
        </div>
    );
};

export default ThankYou;
