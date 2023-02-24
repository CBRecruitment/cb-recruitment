import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Candidates.module.css';
import clsx from 'clsx';
import JobSearchBar from './JobSearchBar';

const JobSearch = () => {
  return (
    <div className={clsx('relative', 'h-full', styles.bg)}>
      <div className='w-[90%] py-10 m-auto pt-2'>
        <div className='pb-1'>
          <JobSearchBar />
          <div className='flex justify-around w-[90%] mx-auto space-x-5 mt-8 sm:w-[70%] md:w-[60%] lg:w-[50%] opacity-80'>
            <Link href='https://t.me/CBR_Jobs' target='_blank'>
              <Image
                className=''
                src={'/assets/branding/telegram-white.png'}
                alt='Telegram logo'
                width={45}
                height={45}
              />
            </Link>
            <Link href='https://twitter.com/cb_recruitment_' target='_blank'>
              <Image
                className=''
                src={'/assets/branding/twitter-white.png'}
                alt='Twitter logo'
                width={45}
                height={45}
              />
            </Link>
            <Link
              href='https://www.linkedin.com/company/80659134'
              target='_blank'
            >
              <Image
                className=''
                src={'/assets/branding/linkedin-white.png'}
                alt='LinkedIn logo'
                width={45}
                height={45}
              />
            </Link>
            <Link href='mailto:info@cbrecruitment.com' target='_blank'>
              <Image
                className=''
                src={'/assets/branding/email-white.png'}
                alt='Email logo'
                width={45}
                height={45}
              />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src='/assets/branding/coloured_band.png'
        className='relative bottom-0 w-full'
        alt='Coloured band'
        width={100}
        height={25}
      />
      <div className='flex justify-center'>
        <Image
          src='/assets/branding/elipse-button_with_arrow.png'
          className='absolute top-[285px] z-10 sm:top-[235px]'
          alt='Orange down arrow logo'
          width={90}
          height={90}
        />
      </div>
    </div>
  );
};

export default JobSearch;
