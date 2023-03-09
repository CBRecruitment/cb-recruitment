import Image from 'next/image';
import React from 'react';

const Partnerships = () => {
  return (
    <div className='relative bg-gradient-to-r from-[#eda238] to-[#f6d715] h-[230px] mt-16 md:bg-none md:mt-0'>
      <div className='flex justify-center w-fit mx-auto pt-4'>
        <div className='h-[120px] w-[120px] bg-[var(--cream)] border-[6px] border-[var(--gray)] rounded-full flex justify-center items-center z-10'>
          <Image src={'/assets/branding/about-us/icon_partners.png'} alt='Core values' width={65} height={0} />
        </div>
        <div className='bg-[var(--cream)] absolute top-[5.5rem] w-[180px] h-[190px] rounded-lg'>
          <section className='font-semibold text-[var(--darkgray)] absolute top-14 left-6 w-[155px] h-[100px]'>
            <h2>PARTNERSHIPS</h2>
            <hr className='bg-black opacity-60 mt-2 mr-[5.5rem] p-[1px] z-10' />
            <h3 className='leading-[0.9rem] mt-3 text-[15px]'>Continue Building</h3>
            <h3 className='leading-[0.9rem] mt-2 text-[15px]'>Partnership for</h3>
            <h3 className='leading-[0.9rem] mt-2 text-[15px]'>Added Client Value</h3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
