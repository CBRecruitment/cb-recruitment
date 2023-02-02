import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    // const [color, setColor] = useState('#4b5e67');
    // const [textColor, setTextColor] = useState('#ffffff');

    // useEffect(() => {
    //     const changeColor = () => {
    //         if (window.scrollY >= 90) {
    //             setColor('##4b5e67');
    //             setTextColor('#ffffff');
    //         } else {
    //             setColor('#4b5e67');
    //             setTextColor('#ffffff');
    //         }
    //     };
    //     window.addEventListener('scroll', changeColor);

    //     return () => {
    //         window.removeEventListener('scroll', changeColor);
    //     };
    // }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <header
            // style={{ backgroundColor: `${color}` }}
            className='sticky left-0 top-0 w-full z-10 ease-in duration-300 bg-[#3b444b]'
        >
            <div className='m-auto flex justify-between items-center h-[10vh]'>
                <Link href='/home'>
                    <Image
                        src={'/assets/cblogo-whitev2.png'}
                        alt='CBR Logo'
                        width={90}
                        height={50}
                        className='ml-20 xl:ml-28 hover:animate-pulse duration-200'
                    />
                </Link>
                <ul
                    // style={{ color: `${textColor}` }}
                    className='hidden sm:flex 2xl:mr-32 xl:mr-20 lg:mr-14 md:mr-10 list-none text-white Magnify-Bold'
                >
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden md:flex'>
                        <Link href='/home'>Home</Link>
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
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden xl:flex '>
                        <Link href='/cbracademy'>CBR Academy</Link>
                    </li>
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden 2xl:flex '>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li className='p-5 ease-in duration-100 hover:underline underline-offset-8 decoration-white hidden 2xl:flex '>
                        <Link href='/faqs'>FAQs</Link>
                    </li>
                    <div className='flex justify-center items-center cursor-pointer pl-2 lg:flex'>
                        <input
                            className='text-sm text-black p-1 pl-3 w-[70%] search-bar'
                            type='text'
                        />
                        <button className='bg-white p-1 border-none search-btn'>
                            {' '}
                            <Image
                                className='p-1'
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
                    // style={{ color: `${textColor}` }}
                >
                    {nav ? (
                        <AiOutlineClose
                            size={25}
                            // style={{ color: `${textColor}` }}
                        />
                    ) : (
                        <AiOutlineMenu
                            size={25}
                            // style={{ color: `${textColor}` }}
                        />
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
                            src={'/assets/cblogo-white.svg'}
                            alt='CBR Logo'
                            width={75}
                            height={50}
                        />
                        <li className='p-4 text-2xl hover:text-blue-500 '>
                            <Link href='/home'>Home</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-blue-500 '>
                            <Link href='/candidates'>For Candidates</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-blue-500 '>
                            <Link href='/companies'>For Companies</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-blue-500 '>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-blue-500 '>
                            <Link href='/cbracademy'>CBR Academy</Link>
                        </li>
                        <li className='p-4 text-2xl hover:text-blue-500 '>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className='p-4 text-2xl mb-6 hover:text-blue-500 '>
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
