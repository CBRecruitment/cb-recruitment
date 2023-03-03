import React from 'react';
import Footer from '../components/General/Footer/Footer';
import Nav from '../components/Navbar/Nav';

const ThankYou = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Nav />
      <div className='flex justify-center gray_bg h-full border-b-[1px]'>
        <h1 className='flex items-center text-[var(--orange)] text-4xl'>
          Your application was successful, thank you for applying!
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
