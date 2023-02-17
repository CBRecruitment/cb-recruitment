import React from 'react';
import HeroSearchBar from './HeroSearchBar';
import SocialMediaIcons from '../../General/SocialMediaIcons';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.bg}>
            <div className='w-[92.5%] py-10 m-auto pt-10'>
                <h1 className='text-[var(--cream)] w-[30%] text-left Anton-Regular text-7xl leading-[1.1] lg:w-[10%] lg:text-8xl'>
                    Making Web3 Work
                </h1>
                <HeroSearchBar />
                <SocialMediaIcons />
            </div>
        </div>
    );
};

export default Hero;
