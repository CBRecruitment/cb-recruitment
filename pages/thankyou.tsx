import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const thankyou = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center bg-gray-900 h-full'>
                <h1 className='flex justify-center items-center py-56 text-white text-3xl'>
                    Your CV was successfully uploaded, thank you for applying!
                </h1>
            </div>
            <Footer />
        </>
    );
};

export default thankyou;
