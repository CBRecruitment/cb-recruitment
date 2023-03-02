import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Candidates.module.css';
import clsx from 'clsx';
import router from 'next/router';

type Props = {
  searchQuery: string;
};

const JobSearch = ({ searchQuery }: Props) => {
  const [search, setSearch] = useState(searchQuery ?? '');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    {
      search
        ? router.push(`candidates/?search=${search}`)
        : router.push(`/candidates`);
    }
  };

  return (
    <div className={clsx('relative', 'h-full', styles.bg)}>
      <div className='w-[90%] py-10 m-auto pt-2'>
        <div className='py-10'>
          <div className='flex flex-col mx-auto bg rounded-2xl p-4 mt-4 sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
            <span className='text-white mb-2 font-bold text-xl'>
              Find a job you'll love
            </span>
            <form
              className='flex flex-col space-y-3 w-full justify-between sm:flex-row sm:h-10 sm:space-y-0'
              onSubmit={handleSubmit}
            >
              <input
                className='rounded-lg pl-3 p-[0.75rem] sm:w-[67%]'
                placeholder='e.g "Full Stack Developer"'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button
                className='bg-[var(--orange)] p-2 rounded-lg text-white font-semibold text-xl sm:flex sm:justify-center sm:items-center sm:text-sm sm:w-[30%]'
                type='submit'
              >
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
      <Image
        src='/assets/branding/coloured_bar_1536.jpg'
        className='absolute bottom-0 h-[25px] w-full'
        alt='Coloured band'
        width={'1536'}
        height={0}
      />
    </div>
  );
};

export default JobSearch;

{
  /* <div className='flex justify-around w-[90%] mx-auto space-x-5 mt-8 sm:w-[70%] md:w-[60%] lg:w-[50%] opacity-80'>
            <Link href='https://t.me/CBR_Jobs' target='_blank'>
              <Image
                className=''
                src={'/assets/branding/telegram-white.png'}
                alt='Telegram logo'
                width={45}
                height={45}
              />
            </Link>
            <Link href='https://twitter.com/cb_recruitment_' target='_blank'>
              <Image
                className=''
                src={'/assets/branding/twitter-white.png'}
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
                className=''
                src={'/assets/branding/linkedin-white.png'}
                alt='LinkedIn logo'
                width={45}
                height={45}
              />
            </Link>
            <Link href='mailto:info@cbrecruitment.com' target='_blank'>
              <Image
                className=''
                src={'/assets/branding/email-white.png'}
                alt='Email logo'
                width={45}
                height={45}
              />
            </Link>
          </div> */
}

{
  /* <div className='flex justify-center md:hidden'>
        <Image
          src='/assets/branding/elipse-button_with_arrow.png'
          className='absolute top-[265px] z-10 sm:top-[235px]'
          alt='Orange down arrow logo'
          width={80}
          height={90}
        />
      </div> */
}
