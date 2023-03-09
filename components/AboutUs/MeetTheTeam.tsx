import React, { useState } from 'react';

const MeetTheTeam = () => {
  const [expandTeam, setExpandTeam] = useState(false);

  const handleInputClick = () => {
    setExpandTeam(!expandTeam);
  };

  return (
    <div className='h-full relative pt-4 mt-10 lg:mt-[200px] xl:mt-[350px]'>
      <div className='bg-[#272727] h-[200px] w-[50px] md:w-[100px] absolute top-0 left-0 xl:h-[300px] xl:w-[150px]'></div>
      <div className='bg-[#272727] h-[200px] w-[50px] md:w-[100px] absolute top-0 right-0 xl:h-[300px] xl:w-[150px]'></div>
      <div className=' flex flex-col items-center justify-center w-[200px] md:w-[400px] xl:w-[510px] mx-auto'>
        <section className='flex space-x-2 justify-center items-center tracking-wide md:tracking-normal'>
          <h2 className='text-3xl md:text-7xl xl:text-8xl font-semibold'>Meet</h2>
          <h3 className='text-xl md:text-3xl xl:text-4xl font-light'>the</h3>
          <h2 className='text-3xl md:text-7xl xl:text-8xl font-semibold'>Team</h2>
        </section>
        <p className='text-sm md:text-lg xl:text-2xl font-extralight text-center'>RESPONSIBLE FOR MAKING THE MAGIC HAPPEN</p>
      </div>
      <div className='flex flex-col md:flex-row md:justify-center md:space-x-6 xl:space-x-8'>
        <div className='text-center z-10'>
          <div className='bg-[var(--orange)] h-[160px] w-[160px] xl:h-[200px] xl:w-[200px] xl:mt-16 mt-8 md:mt-6 mx-auto'></div>
          <h4 className='font-semibold text-2xl pt-2'>John Doe</h4>
          <span className='font-extralight'>Job Title</span>
        </div>
        <div className='text-center z-10'>
          <div className='bg-[var(--orange)] h-[160px] w-[160px] xl:h-[200px] xl:w-[200px] xl:mt-16 mt-6 mx-auto'></div>
          <h4 className='font-semibold text-2xl pt-2'>John Doe</h4>
          <span className='font-extralight'>Job Title</span>
        </div>
        <div className='text-center z-10'>
          <div className='bg-[var(--orange)] h-[160px] w-[160px] xl:h-[200px] xl:w-[200px] xl:mt-16 mt-6 mx-auto'></div>
          <h4 className='font-semibold text-2xl pt-2'>John Doe</h4>
          <span className='font-extralight'>Job Title</span>
        </div>
        <div className='text-center z-10'>
          <div className='bg-[var(--orange)] h-[160px] w-[160px] xl:h-[200px] xl:w-[200px] xl:mt-16 mt-6 mx-auto'></div>
          <h4 className='font-semibold text-2xl pt-2'>John Doe</h4>
          <span className='font-extralight'>Job Title</span>
        </div>
      </div>

      {expandTeam && (
        <div className='flex flex-col md:flex-row md:justify-center md:z-auto md:space-x-6 md:pt-10 xl:space-x-8'>
          <div className='text-center z-10'>
            <div className='bg-[var(--orange)] h-[160px] w-[160px] xl:h-[200px] xl:w-[200px] xl:mt-10 mt-8 md:mt-6 mx-auto'></div>
            <h4 className='font-semibold text-2xl pt-2'>John Doe</h4>
            <span className='font-extralight'>Job Title</span>
          </div>
          <div className='text-center z-10'>
            <div className='bg-[var(--orange)] h-[160px] w-[160px] xl:h-[200px] xl:w-[200px] xl:mt-10 mt-6 mx-auto'></div>
            <h4 className='font-semibold text-2xl pt-2'>John Doe</h4>
            <span className='font-extralight'>Job Title</span>
          </div>
          <div className='text-center z-10'>
            <div className='bg-[var(--orange)] h-[160px] w-[160px] xl:h-[200px] xl:w-[200px] xl:mt-10 mt-6 mx-auto'></div>
            <h4 className='font-semibold text-2xl pt-2'>John Doe</h4>
            <span className='font-extralight'>Job Title</span>
          </div>
          <div className='text-center z-10'>
            <div className='bg-[var(--orange)] h-[160px] w-[160px] xl:h-[200px] xl:w-[200px] xl:mt-10 mt-6 mx-auto'></div>
            <h4 className='font-semibold text-2xl pt-2'>John Doe</h4>
            <span className='font-extralight'>Job Title</span>
          </div>
        </div>
      )}
      <div className='flex justify-center py-10'>
        <button
          onClick={handleInputClick}
          className='px-4 md:px-8 py-[0.2rem] bg-[var(--orange)] rounded-md text-white text-sm font-semibold tracking-wider'
        >
          {expandTeam ? 'SHOW LESS' : 'SHOW MORE'}
        </button>
      </div>
    </div>
  );
};

export default MeetTheTeam;
