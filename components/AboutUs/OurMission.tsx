import Image from 'next/image';
import React from 'react';

const OurMission = () => {
  return (
    <div className='relative bg-gradient-to-r from-[#eda238] to-[#f6d715] h-[230px] mb-10 md:bg-none md:mb-0'>
      <h2 className='Roboto-Bold text-white text-xl flex justify-center mt-5 pb-4 md:hidden'>START YOUR WEB3 CAREER</h2>
      <div className='flex justify-center w-fit mx-auto pt-4'>
        <div className='h-[120px] w-[120px] bg-[#efebe0] border-[6px] border-[var(--gray)] rounded-full flex justify-center items-center z-10'>
          <Image
            src={'/assets/branding/about-us/icon_mission.png'}
            alt='Our mission'
            width={57}
            height={0}
            className='ml-1'
          />
        </div>
        <div className='bg-[#efebe0] absolute top-32  w-[180px] h-[190px] rounded-lg md:top-[5.5rem]'>
          <section className='font-semibold text-[var(--darkgray)] absolute top-14 left-6 w-[155px] h-[100px]'>
            <h2>OUR MISSION</h2>
            <hr className='bg-black opacity-60 mt-2 mr-[5.5rem] p-[1px] z-10' />
            <h3 className='leading-5 mt-2 text-[15px]'>Our mission it to become a global leader in Web3 recruitment</h3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
