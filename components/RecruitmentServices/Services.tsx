import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div className='h-full bg-[var(--yellow)] relative'>
      <div className='pt-10 px-4 items-center w-[320px] sm:w-[600px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] mx-auto text-[var(--darkgray)] lg:pb-10'>
        <div className='text-center pb-10'>
          <h1 className='text-4xl font-semibold pb-5 sm:text-6xl lg:text-7xl'>INTRODUCTION</h1>
          <h2 className='font-light px-2 sm:px-20 sm:text-lg lg:px-32 lg:text-xl lg:pb-10'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, doloremque dolorem? Natus mollitia
            reiciendis aliquam.
          </h2>
        </div>
        <div className='sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-20'>
          <div className='p-3 mx-auto sm:pt-5 lg:pt-0'>
            <Image
              src={'/assets/branding/recruitment-services/icon_1.png'}
              alt='Services logo 1'
              width={70}
              height={70}
              className='2xl:max-w-[90px]'
            />
            <h3 className='py-5 font-bold 2xl:text-xl'>Lorem ipsum dolor sit amet</h3>
            <h4 className='font-light 2xl:text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eos rerum cupiditate veniam odit dicta
            </h4>
          </div>
          <div className='p-3 mx-auto pt-10 sm:pt-5 lg:pt-0'>
            <Image
              src={'/assets/branding/recruitment-services/icon_2.png'}
              alt='Services logo 1'
              width={70}
              height={70}
              className='2xl:max-w-[90px]'
            />
            <h3 className='py-5 font-bold 2xl:text-xl'>Lorem ipsum dolor sit amet</h3>
            <h4 className='font-light 2xl:text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eos rerum cupiditate veniam odit dicta
            </h4>
          </div>
          <div className='p-3 mx-auto pt-10 lg:pt-0'>
            <Image
              src={'/assets/branding/recruitment-services/icon_3.png'}
              alt='Services logo 1'
              width={70}
              height={70}
              className='2xl:max-w-[90px]'
            />
            <h3 className='py-5 font-bold 2xl:text-xl'>Lorem ipsum dolor sit amet</h3>
            <h4 className='font-light 2xl:text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eos rerum cupiditate veniam odit dicta
            </h4>
          </div>
          <div className='p-3 mx-auto pt-10 lg:pt-20'>
            <Image
              src={'/assets/branding/recruitment-services/icon_1.png'}
              alt='Services logo 1'
              width={70}
              height={70}
              className='2xl:max-w-[90px]'
            />
            <h3 className='py-5 font-bold 2xl:text-xl'>Lorem ipsum dolor sit amet</h3>
            <h4 className='font-light 2xl:text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eos rerum cupiditate veniam odit dicta
            </h4>
          </div>
          <div className='p-3 mx-auto pt-10 lg:pt-20'>
            <Image
              src={'/assets/branding/recruitment-services/icon_2.png'}
              alt='Services logo 1'
              width={70}
              height={70}
              className='2xl:max-w-[90px]'
            />
            <h3 className='py-5 font-bold 2xl:text-xl'>Lorem ipsum dolor sit amet</h3>
            <h4 className='font-light 2xl:text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eos rerum cupiditate veniam odit dicta
            </h4>
          </div>
          <div className='p-3 mx-auto pt-10 lg:pt-20 pb-20'>
            <Image
              src={'/assets/branding/recruitment-services/icon_3.png'}
              alt='Services logo 1'
              width={70}
              height={70}
              className='2xl:max-w-[90px]'
            />
            <h3 className='py-5 font-bold 2xl:text-xl'>Lorem ipsum dolor sit amet</h3>
            <h4 className='font-light 2xl:text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eos rerum cupiditate veniam odit dicta
            </h4>
          </div>
        </div>
      </div>
      <Image
        src='/assets/branding/coloured_bar_1536.jpg'
        alt='Coloured band'
        width={'1536'}
        height={'0'}
        className='absolute bottom-0 left-0 h-[25px]'
      />
      <Image
        src={'/assets/branding/about-us/dots.png'}
        alt='Black dots for decoration'
        width={120}
        height={0}
        className='absolute top-60 right-[-25px] 2xl:w-[140px] rotate-90'
      />
      <Image
        src={'/assets/branding/about-us/dots.png'}
        alt='Black dots for decoration'
        width={120}
        height={0}
        className='hidden xsm:block absolute top-[475px] left-[-25px] 2xl:w-[120px] rotate-90'
      />
      <Image
        src={'/assets/branding/about-us/dots.png'}
        alt='Black dots for decoration'
        width={140}
        height={0}
        className='hidden 2xl:block absolute top-[550px] right-[-20px] rotate-90'
      />
    </div>
  );
};

export default Services;
