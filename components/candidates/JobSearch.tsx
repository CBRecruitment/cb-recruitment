import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSearchBar from '../Home/Hero/HeroSearchBar';
import styles from './Candidates.module.css';
import clsx from 'clsx';

const JobSearch = () => {
    return (
        <div className={clsx('relative', 'h-full', styles.bg)}>
            <div className='w-[90%] py-10 m-auto pt-2'>
                <div className='pb-1'>
                    <HeroSearchBar />
                    <div className='flex justify-around w-[90%] mx-auto space-x-5 mt-8 sm:w-[60%] sm:mx-0 md:w-[50%] xl:w-[25%] 2xl:w-[20%] opacity-80'>
                        <Link href='https://t.me/CBR_Jobs' target='_blank'>
                            <Image
                                className=''
                                src={'/assets/branding/telegram-white.png'}
                                alt='Telegram logo'
                                width={45}
                                height={45}
                            />
                        </Link>
                        <Link
                            href='https://twitter.com/cb_recruitment_'
                            target='_blank'
                        >
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
                        <Link
                            href='mailto:info@cbrecruitment.com'
                            target='_blank'
                        >
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
            <img
                src='/assets/branding/coloured_band.png'
                className='relative bottom-0 h-[25px] w-full'
            ></img>
            <div className='flex justify-center'>
                <img
                    src='/assets/branding/elipse-button_with_arrow.png'
                    className='absolute top-[317px] h-[80px] w-[80px] z-10'
                ></img>
            </div>
        </div>
    );
};

export default JobSearch;
