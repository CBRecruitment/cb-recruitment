import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={clsx('h-full bg-[var(--darkgray)]', styles.bg)}>
      <div className='md:flex md:p-6 lg:py-20'>
        <div className='md:w-fit md:mx-auto'>
          <div className='flex justify-center pt-10 h-fit'>
            <Link href='/' className='flex justify-center items-center'>
              <Image
                src={'/assets/branding/cblogo-whitev2.png'}
                alt='CBR Logo'
                width={55}
                height={0}
              />
            </Link>
            <div className='flex flex-col justify-center items-center w-48 leading-5'>
              <h2 className='text-white text-[20px] font-semibold'>
                CB RECRUITMENT
              </h2>
              <h3 className='text-white text-[18px] font-thin'>
                MAKING WEB3 WORK
              </h3>
            </div>
          </div>
          <div className='hidden text-white md:flex md:flex-col md:w-full md:pl-20 md:pt-6 md:tracking-wide'>
            <h3 className='text-[20px] Roboto-Bold'>COMPANY INFO</h3>
            <p>Address xxxx</p>
            <p>info@cbrecruitment.com</p>
            <div className='flex space-x-3 opacity-80 pt-3 xl:space-x-4'>
              <Link href='https://t.me/CBR_Jobs' target='_blank'>
                <Image
                  className='hover:scale-110 ease-in-out duration-200'
                  src={'/assets/branding/telegram-white.png'}
                  alt='Telegram logo'
                  width={25}
                  height={25}
                />
              </Link>
              <Link href='https://twitter.com/cb_recruitment_' target='_blank'>
                <Image
                  className='hover:scale-110 ease-in-out duration-200'
                  src={'/assets/branding/twitter-white.png'}
                  alt='Twitter logo'
                  width={25}
                  height={25}
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
                  width={25}
                  height={25}
                />
              </Link>
              <Link href='mailto:info@cbrecruitment.com' target='_blank'>
                <Image
                  className='hover:scale-110 ease-in-out duration-200'
                  src={'/assets/branding/email-white.png'}
                  alt='Email logo'
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* <div className='hidden md:flex md:relative md:w-fit md:border-white md:mt-16 md:bottom-6 md:left-4 md:mx-auto md:border'></div> */}

        <div className='md:flex md:mx-auto'>
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
          <section className='flex flex-col justify-center items-center mt-10 md:hidden'>
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
        </div>
        <div className='hidden lg:flex lg:mx-auto'>
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
        </div>
        <div className='hidden xl:flex xl:mx-auto'>
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
        </div>
        {/* 
        <div className='hidden md:flex md:relative md:w-fit md:border-white md:mt-16 md:bottom-6 md:left-4 md:mx-auto md:border'></div> */}

        <div className='w-[80%] sm:w-[70%] md:w-[30%] xl:w-[25%] 2xl:w-[20%] mx-auto pb-10'>
          <div className='flex flex-col mx-auto bg-[var(--cream)] rounded-2xl p-4 mt-10'>
            <span className='text-black mb-2 font-bold text-xl'>
              News Letter
            </span>
            <form className='flex flex-col space-y-3 w-full justify-between'>
              <input
                className={clsx(
                  'rounded-lg',
                  'pl-3',
                  'p-[0.45rem]',
                  styles.newsletter_shadow
                )}
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
        </div>
        <small className='text-white flex justify-center pb-5 md:hidden'>
          &#169; All Rights Reserved to CBRecruitment 2023
        </small>
      </div>
    </footer>
  );
};

export default Footer;
