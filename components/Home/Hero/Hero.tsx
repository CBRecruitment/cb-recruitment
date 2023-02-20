import React from 'react';
import HeroSearchBar from './HeroSearchBar';
import SocialMediaIcons from '../../General/SocialMediaIcons';
import styles from './Hero.module.css';
import Nav from '../../Navbar/Nav';
import clsx from 'clsx';
import Partners from '../Partners/Partners';

const Hero = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Nav />
      <div className={clsx('flex-grow', styles.bg)}>
        <div className='w-[92.5%] m-auto pt-10 py-10'>
          <h1 className='text-[var(--cream)] w-[30%] text-left Anton-Regular text-7xl leading-[1.1] lg:w-[10%] lg:text-8xl'>
            Making Web3 Work
          </h1>
          <HeroSearchBar />
          <SocialMediaIcons />
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default Hero;
