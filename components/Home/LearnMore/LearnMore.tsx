import Image from 'next/image';
import React from 'react';
import styles from './LearnMore.module.css';
import clsx from 'clsx';

const LearnMore = () => {
  return (
    <div className={clsx('bg-white', styles.shadow)}>
      <div
        className={clsx(
          'relative h-[400px] w-[320px] m-auto',
          styles.container
        )}
      >
        <Image
          src='/assets/branding/Woman_with_paper.svg'
          alt=''
          width={'100'}
          height={'0'}
          className={clsx('absolute pt-10 left-[5px]', styles.lady)}
        />
        <div
          className={clsx(
            'absolute top-[45px] left-[110px] w-fit Roboto-Bold',
            styles.top_text
          )}
        >
          <h2 className='text-2xl sm:text-3xl xl:text-4xl xl:tracking-wide'>
            NEW
          </h2>
          <h3 className='text-3xl sm:text-4xl tracking-wider'>TO WEB3</h3>
        </div>
        <p
          className={clsx(
            'absolute top-[130px] left-[112px] w-[205px] text-lg sm:text-xl tracking-wide Roboto-Bold xl:hidden',
            styles.bottom_text
          )}
        >
          Short blurb about being able to support those with no web3 experience
        </p>
        <div className='hidden xl:flex'>
          <p
            className={clsx(
              'top-[130px] left-[112px] w-[205px] text-lg sm:text-xl tracking-wide Roboto-Bold xl:absolute',
              styles.bottom_text2
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem
            assumenda esse vitae, eligendi magni quia saepe numquam aspernatur.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            fugit qui, deserunt earum atque magni corporis nostrum soluta
            expedita enim nobis corrupti excepturi provident ab.
          </p>
        </div>
        <Image
          src='/assets/branding/Dotted_square_small.png'
          alt=''
          width={'140'}
          height={'0'}
          className={clsx(
            'absolute top-[285px] left-[45px]',
            styles.dotted_square
          )}
        />
        <Image
          src='/assets/branding/Dotted_line_small.png'
          alt=''
          width={'250'}
          height={'0'}
          className={clsx(
            'absolute top-[245px] right-[30px] w-[200px]',
            styles.dotted_line
          )}
        />
        <div
          className={clsx(
            'w-fit absolute top-[305px] right-[10px]',
            styles.button
          )}
        >
          <button className='px-6 py-1 rounded-full text-[14px] tracking-wide font-semibold bg-gradient-to-b from-[#e69706] to-[#f5d11e] text-white sm:px-12 sm:py-2 xl:px-20 xl:py-3 xl:text-[23px]'>
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
