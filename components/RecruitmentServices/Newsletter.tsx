import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './Services.module.css';

const Newsletter = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-[#eda238] to-[#f6d715]'>
        <div className='relative w-[280px] sm:w-[350px] md:w-[500px] lg:w-[600px] mx-auto py-10'>
          <div className=' flex flex-col mx-auto bg rounded-2xl p-4'>
            <span className='text-white mb-2 font-bold text-xl w-[90%] mx-auto'>News Letter</span>
            <form className='flex flex-col space-y-3 w-[90%] mx-auto justify-between'>
              <input
                className={clsx('rounded-lg', 'pl-3', 'p-[0.45rem]', styles.newsletter_shadow)}
                placeholder='Your email address...'
              ></input>
              <button className='bg-[var(--orange)] p-1 rounded-lg text-white font-semibold text-lg' type='submit'>
                SIGN UP
              </button>
            </form>
          </div>
          <Image
            src={'/assets/branding/recruitment-services/icon_mail.png'}
            alt=''
            width={50}
            height={50}
            className='absolute right-[250px] top-[150px] w-[50px] sm:right-[320px] md:right-[470px] lg:right-[560px] lg:w-[60px] lg:top-[140px]'
          />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
