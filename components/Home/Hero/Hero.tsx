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
              'text-[var(--cream)] w-[30%] text-left Anton-Regular leading-[1.1] text-[80px] md:text-[90px] xl:text-[100px] 2xl:w-[20%] 2xl:text-[110px] 2xl:leading-[1.2] lg:mb-20',
              styles.tablet
            )}
          >
            Making Web3 Work
          </h1>
          <div className=''>
            <HeroSearchBar />
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
