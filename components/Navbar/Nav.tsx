import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
    let links = [
        { name: 'Home', link: '/' },
        { name: 'For Candidates', link: '/candidates' },
        { name: 'For Companies', link: '/companies' },
        { name: 'Blog', link: '/blog' },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full sticky top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-[var(--gray)] p-3 md:px-10 px-7'>
                <Link href='/'>
                    <Image
                        src={'/assets/branding/cblogo-whitev2.png'}
                        alt='CBR Logo'
                        width={75}
                        height={75}
                        className='md:ml-12 lg:ml-20 xl:ml-28 hover:animate-pulse duration-200'
                    />
                </Link>

                {/* Mobile menu button */}
                <div
                    onClick={() => setOpen(!open)}
                    className='text-3xl absolute right-5 top-6 cursor-pointer md:hidden text-white'
                >
                    {open ? (
                        <AiOutlineClose size={30} />
                    ) : (
                        <AiOutlineMenu size={30} />
                    )}
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`sm:pl-14 md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-[var(--gray)] nav-height ${
                        open ? 'top-[78px] ' : 'top-[-490px]'
                    }`}
                >
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className='md:ml-8 text-xl md:my-0 my-7'
                        >
                            <a
                                href={link.link}
                                className='text-[var(--orange)] hover:text-white duration-500 md:text-white md:text-[15px] xl:text-[17px] xl:px-6'
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <div className='flex justify-self-auto space-x-7 mt-16 w-full md:hidden'>
                        <Link href='https://t.me/CBR_Jobs' target='_blank'>
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/branding/telegram-white.png'}
                                alt='Telegram logo'
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link
                            href='https://twitter.com/cb_recruitment_'
                            target='_blank'
                        >
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/branding/twitter-white.png'}
                                alt='Twitter logo'
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link
                            href='https://www.linkedin.com/company/80659134'
                            target='_blank'
                        >
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/branding/linkedin-white.png'}
                                alt='LinkedIn logo'
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link
                            href='mailto:info@cbrecruitment.com'
                            target='_blank'
                        >
                            <Image
                                className='hover:scale-110 ease-in-out duration-200'
                                src={'/assets/branding/email-white.png'}
                                alt='Email logo'
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
