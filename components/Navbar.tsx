import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <header className='sticky left-0 top-0 w-full z-10 ease-in duration-300 bg-[var(--gray)] p-3'>
            <div className='m-auto flex justify-between items-center'>
                <Link href='/'>
                    <Image
                        src={'/assets/branding/cblogo-whitev2.png'}
                        alt='CBR Logo'
                        width={90}
                        height={90}
                        className='sm:ml-4 md:ml-12 lg:ml-20 xl:ml-28 hover:animate-pulse duration-200'
                    />
                </Link>
                <ul className='hidden sm:flex sm:mr-4 2xl:mr-32 xl:mr-20 lg:mr-14 md:mr-10 list-none text-white Magnify-Bold'>
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden md:flex'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden lg:flex '>
                        <Link href='/candidates'>For Candidates</Link>
                    </li>
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden lg:flex '>
                        <Link href='/companies'>For Companies</Link>
                    </li>
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden xl:flex '>
                        <Link href='/about'>About</Link>
                    </li>
                    {/* <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden xl:flex '>
                        <Link href='/cbracademy'>CBR Academy</Link>
                    </li>
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden 2xl:flex '>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden 2xl:flex '>
                        <Link href='/faqs'>FAQs</Link>
                    </li> */}
                    <div className='flex justify-center items-center cursor-pointer pl-2 lg:flex'>
                        <input
                            className='text-sm font-normal text-black p-1 pl-3 w-[70%] search-bar-nav'
                            type='search'
                        />
                        <button className='bg-white p-1 border-none w-[20%] flex justify-center search-btn-nav'>
                            {' '}
                            <Image
                                className='p-[0.15rem]'
                                src={'/assets/search-orange.png'}
                                alt='Search button'
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </ul>

                {/* Mobile Button */}
                <div
                    className='block sm:hidden z-10 text-white'
                    onClick={handleNav}
                >
                    {nav ? (
                        <AiOutlineClose size={25} />
                    ) : (
                        <AiOutlineMenu size={25} />
                    )}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`sm:hidden absolute top-0 ${
                        nav ? 'left-0' : 'left-full'
                    } right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black border-gray-400 text-center ease-in duration-300`}
                >
                    <ul className='text-white'>
                        <Image
                            className='mx-auto pb-16'
                            src={'/assets/cblogo-whitev2.png'}
                            alt='CBR Logo'
                            width={75}
                            height={75}
                        />
                        <li className='p-4 text-2xl hover:text-[var(--orange)] '>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-[var(--orange)] '>
                            <Link href='/candidates'>For Candidates</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-[var(--orange)] '>
                            <Link href='/companies'>For Companies</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-[var(--orange)] '>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-[var(--orange)] '>
                            <Link href='/cbracademy'>CBR Academy</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-[var(--orange)] '>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className='p-4 text-2xl mb-6 hover:text-[var(--orange)] '>
                            <Link href='/faqs'>FAQs</Link>
                        </li>
                        <div className='flex mx-auto justify-center mt-20 space-x-5'>
                            <Link href='https://t.me/CBR_Jobs' target='_blank'>
                                <Image
                                    className='hover:scale-110 ease-in-out duration-200'
                                    src={'/assets/telegram-orange.png'}
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
                                    src={'/assets/twitter-orange.png'}
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
                                    src={'/assets/linkedin-orange.png'}
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
                                    src={'/assets/email-orange.png'}
                                    alt='Email logo'
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
