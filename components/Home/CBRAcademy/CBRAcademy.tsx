import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './CBRAcademy.module.css';
import JobOpeningsBar from '../JobOpenings/JobOpeningsBar';
import JobOpenings from '../JobOpenings/JobOpenings';

const CBRAcademy = () => {
  return (
    <div
      className={clsx('bg-[var(--gray)] pt-10 relative', styles.main_container)}
    >
      <JobOpenings />
      <JobOpeningsBar />
      <div className='bg-[var(--yellow)]'>
        <div
          className={clsx(
            'relative h-[350px] w-[320px] m-auto',
            styles.container
          )}
        >
          <Image
            src='/assets/branding/Woman_in_chair.svg'
            alt=''
            width={'190'}
            height={'0'}
            className={clsx('absolute top-[50px] right-[70px] ', styles.lady)}
          />
          <div
            className={clsx(
              'text-left absolute top-[85px] left-[20px] text-[var(--darkgray)]',
              styles.text_container
            )}
          >
            <div className='absolute top-[110px] left-[0px] w-fit Magnify-Bold'>
              <h2 className='text-[22px] tracking-wide Magnify-Bold xl:text-[37px]'>
                ACADEMY
              </h2>
            </div>
            <div
              className={clsx(
                'absolute top-[140px] left-[2px] min w-[180px] text-[15px] leading-4 spacing tracking-widest Roboto-Bold',
                styles.text
              )}
            >
              Text about the CB Recruitment Academy about what you can learn
              with us
            </div>
          </div>
          <Image
            src='/assets/branding/Stack_of_paper.svg'
            alt=''
            width={'40'}
            height={'0'}
            className={clsx('absolute top-[170px] right-[60px]', styles.paper)}
          />
          <Image
            src='/assets/branding/Dotted_curved_line.png'
            alt=''
            width={'140'}
            height={'0'}
            className={clsx(
              'absolute top-[240px] right-[35px] w-[140px]',
              styles.dotted_curved_line
            )}
          />
          <Image
            src='/assets/branding/Case.svg'
            alt=''
            width={'30'}
            height={'0'}
            className={clsx(
              'absolute top-[140px] right-[100px] w-[30px]',
              styles.case
            )}
          />
          <div className='hidden xl:flex'>
            <div
              className={clsx(
                'text-left absolute top-[85px] left-[20px] text-[var(--darkgray)]',
                styles.middle_text_container
              )}
            >
              <div className='absolute top-[110px] left-[0px] w-fit Magnify-Bold'>
                <h2 className='text-[22px] tracking-wide Magnify-Bold xl:text-[37px]'>
                  ACADEMY
                </h2>
              </div>
              <div
                className={clsx(
                  'absolute top-[140px] left-[2px] min w-[180px] text-[15px] leading-4 spacing tracking-widest Roboto-Bold',
                  styles.text
                )}
              >
                Text about the CB Recruitment Academy about what you can learn
                with us
              </div>
            </div>
            <Image
              src='/assets/branding/Woman_in_chair.svg'
              alt=''
              width={'190'}
              height={'0'}
              className={clsx(
                'absolute top-[50px] right-[70px] ',
                styles.bottom_lady
              )}
            />
            <div
              className={clsx(
                'text-left absolute top-[85px] left-[20px] text-[var(--darkgray)]',
                styles.bottom_text_container
              )}
            >
              <div className='absolute top-[110px] left-[0px] w-fit Magnify-Bold'>
                <h2 className='text-[22px] tracking-wide Magnify-Bold xl:text-[37px]'>
                  ACADEMY
                </h2>
              </div>
              <div
                className={clsx(
                  'absolute top-[140px] left-[2px] min w-[180px] text-[15px] leading-4 spacing tracking-widest Roboto-Bold',
                  styles.text
                )}
              >
                Text about the CB Recruitment Academy about what you can learn
                with us
              </div>
            </div>
            <div
              className={clsx(
                'text-left absolute top-[85px] left-[20px] text-[var(--darkgray)]',
                styles.bottom_text_container2
              )}
            >
              <div className='absolute top-[110px] left-[0px] w-fit Magnify-Bold'>
                <h2 className='text-[22px] tracking-wide Magnify-Bold xl:text-[37px]'>
                  ACADEMY
                </h2>
              </div>
              <div
                className={clsx(
                  'absolute top-[140px] left-[2px] min w-[180px] text-[15px] leading-4 spacing tracking-widest Roboto-Bold',
                  styles.text
                )}
              >
                Text about the CB Recruitment Academy about what you can learn
                with us
              </div>
            </div>
            <Image
              src='/assets/branding/Dotted_curved_line.png'
              alt=''
              width={'140'}
              height={'0'}
              className={clsx(
                'absolute top-[240px] right-[35px] w-[140px]',
                styles.bottom_dotted_curved_line
              )}
            />
          </div>
        </div>
        <Image
          src='/assets/branding/coloured_band.png'
          alt='Coloured band'
          width={'450'}
          height={'0'}
          className='absolute bottom-0 h-[25px] w-full'
        />
      </div>
    </div>
  );
};

export default CBRAcademy;
