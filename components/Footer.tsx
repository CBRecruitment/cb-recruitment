import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[var(--darkgray)] h-full'>
            <div className='flex justify-center pt-10'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src={'/assets/branding/cblogo-whitev2.png'}
                        alt='CBR Logo'
                        width={55}
                        height={0}
                        className=''
                    />
                </Link>
                <div className='flex flex-col justify-center items-center w-48 leading-5'>
                    <h1 className='text-white text-[20px] font-semibold  '>
                        CB RECRUITMENT
                    </h1>
                    <h2 className='text-white text-[18px] font-thin'>
                        MAKING WEB3 WORK
                    </h2>
                </div>
            </div>
            <section className='flex flex-col justify-center items-center mt-10'>
                <h3 className='Roboto-Bold text-white tracking-widest'>
                    LOREM IPSUM
                </h3>
                <ul className='tracking-wide text-white font-thin text-[14px]'>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </section>
            <section className='flex flex-col justify-center items-center mt-8'>
                <h3 className='Roboto-Bold text-white tracking-widest'>
                    LOREM IPSUM
                </h3>
                <ul className='tracking-wide text-white font-thin text-[14px]'>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </section>
            <div className='w-[90%] m-auto pb-10 newsletter-container'>
                <div className='flex flex-col mx-auto bg-[var(--cream)] rounded-2xl p-4 mt-10'>
                    <span className='text-black mb-2 font-bold text-xl'>
                        News Letter
                    </span>
                    <form className='flex flex-col space-y-3 w-full justify-between'>
                        <input
                            className='rounded-lg pl-3 p-[0.45rem] top-border-shadow-newsletter'
                            placeholder='Your email address...'
                        ></input>
                        <button
                            className='bg-[var(--orange)] p-1 rounded-lg text-white font-semibold text-lg'
                            type='submit'
                        >
                            SIGN UP
                        </button>
                    </form>
                </div>
                <small className='text-white flex justify-center mt-5'>
                    &#169; All Rights Reserved to CBRecruitment 2023
                </small>
            </div>
        </footer>
    );
};

export default Footer;
