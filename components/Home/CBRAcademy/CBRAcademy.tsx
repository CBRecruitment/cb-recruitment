import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './CBRAcademy.module.css';
import JobOpeningsBar from '../JobOpeningsBar';
import JobOpenings from '../JobOpenings';

const CBRAcademy = () => {
    return (
        <div
            className={clsx(
                'bg-[var(--gray)] pt-10 relative',
                styles.main_container
            )}
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
                        className={clsx(
                            'absolute top-[50px] right-[70px]',
                            styles.lady
                        )}
                    />
                    <div className='text-left absolute top-[85px] left-[20px] text-[var(--darkgray)]'>
                        <div className='absolute top-[110px] left-[0px] w-fit Magnify-Bold'>
                            <h2 className='text-[22px] tracking-wide Magnify-Bold'>
                                ACADEMY
                            </h2>
                        </div>
                        <div
                            className={clsx(
                                'absolute top-[140px] left-[2px]min w-[180px] text-[15px] leading-4 spacing tracking-widest Roboto-Bold',
                                styles.text
                            )}
                        >
                            Text about the CB Recruitment Academy about what you
                            can learn with us
                        </div>
                    </div>
                    <Image
                        src='/assets/branding/Stack_of_paper.svg'
                        alt=''
                        width={'40'}
                        height={'0'}
                        className='absolute top-[170px] right-[60px] paper'
                    />
                    <Image
                        src='/assets/branding/Dotted_curved_line.png'
                        alt=''
                        width={'140'}
                        height={'0'}
                        className='absolute top-[240px] right-[35px] w-[140px] dotted_curved_line'
                    />
                    <Image
                        src='/assets/branding/Case.svg'
                        alt=''
                        width={'30'}
                        height={'0'}
                        className='absolute top-[140px] right-[100px] w-[30px] case'
                    />
                </div>
                <Image
                    src='/assets/branding/coloured_band.png'
                    alt='Coloured band'
                    width={'450'}
                    height={'0'}
                    className='absolute bottom-0 h-[25px] w-full'
                ></Image>
            </div>
        </div>
    );
};

export default CBRAcademy;