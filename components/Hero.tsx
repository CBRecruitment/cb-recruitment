import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <>
            <div className='flex text-center items-center custom-img-hero h-screen'>
                <div className='text-white z-[2] w-full mt-[-12.5rem]'>
                    <div className='animate-in slide-in-from-top duration-700'>
                        <h1 className=' inline-flex justify-center items-center text-center font-medium mobile-font min-[400px]:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white'>
                            CB
                            <span className='font-light text-transparent bg-clip-text bg-gradient-to-tr from-[#382AC3] to-[#02AFE5] mobile-font min-[400px]:text-5xl sm:text-6xl md:text-7xl xl:text-8xl'>
                                Recruitment
                            </span>
                        </h1>
                        <p className='italic text-white mt-2 max-w-[80%] mx-auto min-[500px]:max-w-[60%]'>
                            Number one business partner, for all your{' '}
                            <span className='text-blue-600'>Crypto</span> and{' '}
                            <span className='text-blue-600'>Blockchain</span>{' '}
                            needs.
                        </p>
                    </div>
                    <button className='animate-in fade-in-10 duration-1000 px-6 py-2 mt-7 bg-gradient-to-b from-[#382AC3] to to-[#02AFE5] rounded-full text-white'>
                        Get Started
                    </button>
                    <div className='absolute bottom-0 w-full flex justify-center space-x-8 mb-10'>
                        <Link href='https://t.me/CBR_Jobs' target='_blank'>
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/telegram-white.png'}
                                alt='Telegram logo'
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link
                            href='https://twitter.com/cb_recruitment_'
                            target='_blank'
                        >
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/twitter-white.png'}
                                alt='Twitter logo'
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link
                            href='https://www.linkedin.com/company/80659134'
                            target='_blank'
                        >
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/linkedin-white.png'}
                                alt='LinkedIn logo'
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link
                            href='mailto:info@cbrecruitment.com'
                            target='_blank'
                        >
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/email-white.png'}
                                alt='Email logo'
                                width={35}
                                height={35}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
