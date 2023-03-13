import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './Services.module.css';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

const CaseStudies = () => {
  return (
    <div className='h-full relative'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-center font-semibold text-4xl pt-10 pb-16'>CASE STUDIES</h2>
        <div className='sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4'>
          <div className={clsx('w-[190px] h-[250px] bg-[var(--orange)] rounded-lg mb-16 z-10', styles.shadow)}>
            <div className='h-full p-6'>
              <h3 className='text-semibold text-lg'>Lorem Ipsum</h3>
              <div className='h-[1px] w-[75px] mt-4 bg-black' />
            </div>
          </div>
          <div className={clsx('w-[190px] h-[250px] bg-[var(--orange)] rounded-lg mb-16 z-10', styles.shadow)}>
            <div className='h-full p-6'>
              <h3 className='text-semibold text-lg'>Lorem Ipsum</h3>
              <div className='h-[1px] w-[75px] mt-4 bg-black' />
            </div>
          </div>
          <div className={clsx('w-[190px] h-[250px] bg-[var(--orange)] rounded-lg mb-16 z-10', styles.shadow)}>
            <div className='h-full p-6'>
              <h3 className='text-semibold text-lg'>Lorem Ipsum</h3>
              <div className='h-[1px] w-[75px] mt-4 bg-black' />
            </div>
          </div>
          <div
            className={clsx('hidden sm:block w-[190px] h-[250px] bg-[var(--orange)] rounded-lg mb-16 z-10', styles.shadow)}
          >
            <div className='h-full p-6'>
              <h3 className='text-semibold text-lg'>Lorem Ipsum</h3>
              <div className='h-[1px] w-[75px] mt-4 bg-black' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center space-x-5'>
        <button className='w-10 h-10 bg-[var(--orange)] rounded-full'>
          <RxChevronLeft className='mx-auto text-white' size={30} />
        </button>
        <button className='w-10 h-10 bg-[var(--orange)] rounded-full'>
          <RxChevronRight className='mx-auto text-white' size={30} />
        </button>
      </div>
      <Image
        src={'/assets/branding/about-us/dots.png'}
        alt='Black dots for decoration'
        width={100}
        height={0}
        className='absolute top-32 right-[-20px] rotate-90'
      />
      <Image
        src={'/assets/branding/about-us/dots.png'}
        alt='Black dots for decoration'
        width={100}
        height={0}
        className='absolute bottom-[200px] right-[-20px] rotate-90'
      />
      <Image
        src={'/assets/branding/about-us/dots.png'}
        alt='Black dots for decoration'
        width={100}
        height={0}
        className='absolute top-[420px] left-[-25px] rotate-90'
      />
    </div>
  );
};

export default CaseStudies;
