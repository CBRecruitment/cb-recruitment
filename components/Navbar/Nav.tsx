// import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import Authentication from '../Auth/Authentication';

const Nav = () => {
  const [open, setOpen] = useState(false);
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  let links = [
    { name: 'Home', link: '/' },
    { name: 'Find Jobs', link: '/candidates' },
    { name: 'Hiring', link: '/companies' },
    { name: 'Learn', link: '/blog' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/recruitment-services' },
  ];

  return (
    <div className='shadow-md w-full sticky top-0 left-0 z-20 border-b-[1px]'>
      <div className='md:flex items-center justify-between bg p-2 md:px-8 px-3'>
        <Link href='/'>
          <Image
            src={'/assets/branding/cblogo-whitev2.png'}
            alt='CBR Logo'
            width={75}
            height={75}
            className='ml-1 xl:ml-6 2xl:ml-9'
          />
        </Link>

        {/* Mobile menu button */}
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-3 top-5 cursor-pointer md:hidden text-white'>
          {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        <div className='flex flex-row'>
          <ul
            className={`sm:pl-14 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 transition-all duration-500 ease-in justify-center ${
              open ? 'top-[69px] ' : 'top-[-490px]'
            }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className='md:mr-6 text-xl md:my-0 my-7 md:hover:underline md:hover:underline-offset-[10px] md:hover:text-white'
              >
                <Link
                  href={link.link}
                  className='text-[var(--orange)] hover:text-white duration-500 md:text-white md:text-[15px] xl:text-[16px] xl:px-3'
                >
                  {link.name}
                </Link>
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
              <Link href='https://twitter.com/cb_recruitment_' target='_blank'>
                <Image
                  className='hover:scale-110 ease-in-out duration-200'
                  src={'/assets/branding/twitter-white.png'}
                  alt='Twitter logo'
                  width={40}
                  height={40}
                />
              </Link>
              <Link href='https://www.linkedin.com/company/80659134' target='_blank'>
                <Image
                  className='hover:scale-110 ease-in-out duration-200'
                  src={'/assets/branding/linkedin-white.png'}
                  alt='LinkedIn logo'
                  width={40}
                  height={40}
                />
              </Link>
              <Link href='mailto:info@cbrecruitment.com' target='_blank'>
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
          {/* <Authentication /> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
