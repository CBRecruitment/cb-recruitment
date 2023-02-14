import Image from 'next/image';
import React from 'react';

const LearnMore = () => {
    return (
        <div className='top-border-shadow bg-white h-full'>
            <div className='relative h-[400px] w-[370px] m-auto'>
                <Image
                    src='/assets/branding/Woman_with_paper.svg'
                    alt=''
                    width={'100'}
                    height={'0'}
                    className='absolute pt-10 left-[10px]'
                />
                <div className='absolute top-[45px] left-[120px] w-fit Roboto-Bold'>
                    <h3 className='text-2xl'>NEW</h3>
                    <h2 className='text-3xl tracking-wide'>TO WEB3</h2>
                </div>
                <div className='absolute top-[130px] left-[130px] w-[200px] text-xl tracking-wide Roboto-Bold'>
                    Short blurb about being able to support those with no web3
                    experience
                </div>
                <Image
                    src='/assets/branding/Dotted_square_small.png'
                    alt=''
                    width={'140'}
                    height={'0'}
                    className='absolute top-[285px] left-[80px]'
                />
                <Image
                    src='/assets/branding/Dotted_line_small.png'
                    alt=''
                    width={'250'}
                    height={'0'}
                    className='absolute top-[245px] right-[28px] w-[250px]'
                />
                <div className='w-fit absolute top-[305px] right-[20px]'>
                    <button className='px-6 py-1 rounded-full text-[14px] tracking-wide font-semibold bg-gradient-to-b from-[#f09c05] to-[#f5d11e] text-white'>
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
