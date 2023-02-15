import Image from 'next/image';
import React from 'react';
import JobOpeningsBar from './JobOpeningsBar';
import JobOpenings from './JobOpenings';

const CBRAcademy = () => {
    return (
        <>
            <div className='bg-[var(--gray)] pt-10 relative'>
                <JobOpenings />
                <JobOpeningsBar />
                <div className='bg-[var(--yellow)]'>
                    <div className='relative h-[350px] w-[370px] m-auto cbracademy-container'>
                        <Image
                            src='/assets/branding/Woman_in_chair.svg'
                            alt=''
                            width={'200'}
                            height={'0'}
                            className='absolute top-[40px] right-[105px]'
                        />
                        <div className='text-left absolute top-[75px] left-[20px] text-[var(--darkgray)]'>
                            <div className='absolute top-[110px] left-[0px] w-fit Magnify-Bold'>
                                <h2 className='text-[22px] tracking-wide Magnify-Bold'>
                                    ACADEMY
                                </h2>
                            </div>
                            <div className='absolute top-[140px] left-[2px] w-[190px] text-[15px] leading-4 spacing tracking-widest Roboto-Bold'>
                                Text about the CB Recruitment Academy about what
                                you can learn with us
                            </div>
                        </div>
                        <Image
                            src='/assets/branding/Stack_of_paper.svg'
                            alt=''
                            width={'40'}
                            height={'0'}
                            className='absolute top-[170px] right-[95px]'
                        />
                        <Image
                            src='/assets/branding/Dotted_curved_line.png'
                            alt=''
                            width={'150'}
                            height={'0'}
                            className='absolute top-[225px] right-[60px] w-[150px]'
                        />
                    </div>
                    <img
                        src='/assets/branding/coloured_band.png'
                        className='absolute bottom-0 h-[25px] w-full'
                    ></img>
                </div>
            </div>
        </>
    );
};

export default CBRAcademy;
