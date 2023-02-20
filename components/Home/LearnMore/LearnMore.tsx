import Image from 'next/image';
import React from 'react';
import styles from './LearnMore.module.css';
import clsx from 'clsx';

const LearnMore = () => {
    return (
        <div className={clsx(' bg-white h-full', styles.shadow)}>
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
                    <h2 className='text-2xl sm:text-3xl'>NEW</h2>
                    <h3 className='text-3xl sm:text-4xl tracking-wider'>
                        TO WEB3
                    </h3>
                </div>
                <p
                    className={clsx(
                        'absolute top-[130px] left-[112px] w-[205px] text-lg sm:text-xl tracking-wide Roboto-Bold',
                        styles.bottom_text
                    )}
                >
                    Short blurb about being able to support those with no web3
                    experience
                </p>
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
                    <button className='px-6 py-1 rounded-full text-[14px] tracking-wide font-semibold bg-gradient-to-b from-[#f09c05] to-[#f5d11e] text-white sm:px-12 sm:py-2'>
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;