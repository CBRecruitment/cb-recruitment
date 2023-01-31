import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <>
            <div className='custom-img-hero h-[72.5vh]'>
                <div className='ml-40 max-w-[40%] pt-12'>
                    <h1 className='text-[#ec9b3c] max-w-[40%] text-left Anton-Regular'>
                        Making Web3 Work
                    </h1>
                    <div className='bg-[#3b444b] p-6 rounded-2xl mt-10 w-[85%] flex flex-col '>
                        <span className='text-white mb-2 font-bold text-lg'>
                            Find a job you'll love
                        </span>
                        <div className='flex w-full justify-between '>
                            <input
                                className='2xl:w-[60%] xl:w-[5%] rounded-lg pl-2'
                                placeholder='e.g "Full Stack Developer"'
                            ></input>
                            <button className='px-8 py-1.5 bg-[#ec9b3c] rounded-lg text-white font-bold'>
                                GET STARTED
                            </button>
                        </div>
                    </div>
                    <div className='flex space-x-5 mt-10'>
                        <Link href='https://t.me/CBR_Jobs' target='_blank'>
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/telegram-orange.png'}
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
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/twitter-orange.png'}
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
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/linkedin-orange.png'}
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
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/email-orange.png'}
                                alt='Email logo'
                                width={45}
                                height={45}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
