import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full mx-auto py-8 px-6 text-gray-300 custom-img-footer'>
            <div className='xl:grid-cols-2 grid xl:max-w-[80%] mx-auto'>
                <div className=''>
                    <Link href='/'>
                        <Image
                            className='flex mx-auto mb-2'
                            src={'/assets/cblogo.png'}
                            alt='CBR Logo'
                            width={60}
                            height={50}
                        />
                    </Link>
                    <p className='py-4 flex justify-center text-center mx-auto max-w-[80%] md:max-w-[65%] lg:max-w-[50%]'>
                        We protect your personal information during the
                        recruitment process and follow the GDPR. View our
                        Privacy Policy for more information on data collection
                        and processing.
                    </p>
                    <div className='flex justify-center space-x-10 mt-5 mb-10 opacity-60 md:space-x-16 lg:space-x-20'>
                        <Link href='https://t.me/CBR_Jobs' target='_blank'>
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/telegram-white.png'}
                                alt='Telegram logo'
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
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
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                </div>
                <div className='xl:my-auto '>
                    <div className='flex justify-around py-3 mx-auto md:max-w-[70%] lg:max-w-[60%]'>
                        <div>
                            <h6 className='font-medium text-md md:text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#382AC3] to-[#02AFE5]'>
                                Services
                            </h6>
                            <ul className='list-none pl-0'>
                                <li className='py-2 text-sm hover:text-blue-700 md:text-base list-none '>
                                    Clients
                                </li>
                                <li className='py-2 text-sm hover:text-blue-700 md:text-base list-none '>
                                    Candidates
                                </li>
                                <li className='py-2 text-sm hover:text-blue-700 md:text-base list-none '>
                                    Wen Job?
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-medium text-md md:text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#382AC3] to-[#02AFE5]'>
                                Get in touch
                            </h6>
                            <ul className='list-none pl-0'>
                                <li className='py-2 text-sm hover:text-blue-700 md:text-base list-none'>
                                    Contact
                                </li>
                                <li className='py-2 text-sm hover:text-blue-700 md:text-base list-none'>
                                    Upload your CV
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-medium text-md md:text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#382AC3] to-[#02AFE5]'>
                                Learn
                            </h6>
                            <ul className='list-none pl-0'>
                                <li className='py-2 text-sm hover:text-blue-700 md:text-base list-none'>
                                    About
                                </li>
                                <li className='py-2 text-sm hover:text-blue-700 md:text-base list-none'>
                                    Blog
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mx-auto mt-2 opacity-50 sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] ' />
            <div className='flex flex-col justify-center items-center mt-5 mx-auto lg:flex-row sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%] lg:justify-around'>
                <Image
                    className='mb-5 opacity-70 lg:mb-0'
                    src={'/assets/dark-mode-logo-01.svg'}
                    alt='Coin Bureau Logo'
                    width={200}
                    height={0}
                />
                <p className='flex text-center'>
                    Copyright 2022 CBRecruitment. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
