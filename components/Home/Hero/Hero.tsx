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
        <div className={clsx('w-[92.5%] m-auto pt-10', styles.portrait)}>
          <h1
            className={clsx(
              'text-[var(--cream)] w-[30%] text-left Anton-Regular leading-[1.1] text-[80px] lg:mb-4 xl:w-[25%] md:leading-[1.2] md:text-[110px] md:mb-[0.5em]',
              styles.tablet
            )}
          >
            Making Web3 Work
          </h1>
          <div className='lg:mt-14'>
            <HeroSearchBar />
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
