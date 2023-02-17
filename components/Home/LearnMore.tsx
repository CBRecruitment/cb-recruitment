import Image from 'next/image';
import React from 'react';

const LearnMore = () => {
    return (
        <div className='top-border-shadow bg-white h-full'>
            <div className='relative h-[400px] w-[320px] m-auto learn-more-container'>
                <Image
                    src='/assets/branding/Woman_with_paper.svg'
                    alt=''
                    width={'100'}
                    height={'0'}
                    className='absolute pt-10 left-[5px] lady'
                />
                <div className='absolute top-[45px] left-[110px] w-fit Roboto-Bold top-text'>
                    <h2 className='text-2xl'>NEW</h2>
                    <h3 className='text-3xl tracking-wider'>TO WEB3</h3>
                </div>
                <div className='absolute top-[130px] left-[112px] w-[205px] text-lg tracking-wide Roboto-Bold bottom-text'>
                    Short blurb about being able to support those with no web3
                    experience
                </div>
                <Image
                    src='/assets/branding/Dotted_square_small.png'
                    alt=''
                    width={'140'}
                    height={'0'}
                    className='absolute top-[285px] left-[45px] dotted_square'
                />
                <Image
                    src='/assets/branding/Dotted_line_small.png'
                    alt=''
                    width={'250'}
                    height={'0'}
                    className='absolute top-[245px] right-[30px] w-[200px] dotted_line'
                />
                <div className='w-fit absolute top-[305px] right-[10px] button'>
                    <button className='px-6 py-1 rounded-full text-[14px] tracking-wide font-semibold bg-gradient-to-b from-[#f09c05] to-[#f5d11e] text-white'>
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
