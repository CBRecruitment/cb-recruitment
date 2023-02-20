import React from 'react';
import Footer from '../components/General/Footer/Footer';
import Navbar from '../components/Navbar/Nav';

const ThankYou = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex justify-center bg-[var(--darkgray)] h-full'>
        <h1 className='flex items-center text-[var(--orange)] text-4xl'>
          Your application was successful, thank you for applying!
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
