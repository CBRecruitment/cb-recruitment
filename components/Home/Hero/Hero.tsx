import React from 'react';
import HeroSearchBar from './HeroSearchBar';
import SocialMediaIcons from '../../General/SocialMediaIcons';
import styles from './Hero.module.css';
import clsx from 'clsx';
import Nav from '../../Navbar/Nav';

const Hero = () => {
  return (
    <div className='md:flex md:flex-col md:h-screen'>
      <Nav />
      <div className={clsx('md:flex-grow', styles.bg)}>
        <div
          className={clsx(
            'w-[92.5%] m-auto pt-10 md:h-[90%] ',
            styles.portrait
          )}
        >
          <h1
            className={clsx(
              'text-[var(--cream)] w-[30%] md:w-[20%] text-left Anton-Regular leading-[1.1] text-[80px] md:text-[100px] 2xl:text-[110px]',
              styles.tablet
            )}
          >
            Making Web3 Work
          </h1>
          <div className='xl:pt-2 2xl:pt-4'>
            <HeroSearchBar />
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
