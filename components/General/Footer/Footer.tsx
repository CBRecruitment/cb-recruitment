import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialMediaIcons from '../SocialMediaIcons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className='bg-[var(--darkgray)] h-full'>
      <div className='md:flex md:justify-evenly md:pb-5'>
        <div className='md:flex md:flex-col md:items-center md:w-72 '>
          <div className='flex justify-center pt-10 h-fit md:ml-['>
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
          <div className='hidden text-white md:flex md:flex-col md:w-full md:px-6 md:pt-6 md:tracking-wide'>
            <h3 className='text-[20px] Roboto-Bold'>COMPANY INFO</h3>
            <p>Address xxxx</p>
            <p>info@cbrecruitment.com</p>
          </div>
        </div>
        {/* <div className={styles.vl_1}></div> */}

        <div>
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
        {/* <div className={styles.vl_2}></div> */}
        <div className='w-[90%] mx-auto md:mx-0 md:w-fit pb-10'>
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
