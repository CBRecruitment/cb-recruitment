import React from 'react';
import HeroSearchBar from './HeroSearchBar';
import SocialMediaIcons from '../../General/SocialMediaIcons';
import styles from './Hero.module.css';
import Nav from '../../Navbar/Nav';
import clsx from 'clsx';
import Partners from '../Partners/Partners';

const Hero = () => {
  return (
    <div className='md:flex md:flex-col md:h-screen'>
      <Nav />
      <div className={clsx('md:flex-grow', styles.bg)}>
        <div className='w-[92.5%] m-auto pt-14'>
          <h1 className='text-[var(--cream)] w-[30%] text-left Anton-Regular text-7xl leading-[1.1] lg:w-[10%] lg:text-8xl 2xl:text-9xl 2xl:leading-[1.2]'>
            Making Web3 Work
          </h1>
          <HeroSearchBar />
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
