import Image from 'next/image';
import React from 'react';

const Partners = () => {
    return (
        <div className='w-full h-[17.5vh]'>
            <h1 className='text-[var(--gray)] text-2xl tracking-wide flex justify-center pt-4 pb-5'>
                PARTNERING WITH:
            </h1>
            <div className='flex justify-between max-w-[90%] h-16 mx-auto'>
                <div className='flex'>
                    <Image
                        className='mr-3'
                        src={'/assets/branding/cblogo-whitev2.png'}
                        alt=''
                        width={85}
                        height={80}
                    />
                    <h1 className='text-gray-400 text-3xl flex items-center'>
                        CB Recruitment
                    </h1>
                </div>
                <div className='flex'>
                    <Image
                        className='mr-3'
                        src={'/assets/branding/cblogo-whitev2.png'}
                        alt=''
                        width={85}
                        height={80}
                    />
                    <h1 className='text-gray-400 text-3xl flex items-center'>
                        CB Recruitment
                    </h1>
                </div>
                <div className='flex'>
                    <Image
                        className='mr-3'
                        src={'/assets/branding/cblogo-whitev2.png'}
                        alt=''
                        width={85}
                        height={80}
                    />
                    <h1 className='text-gray-400 text-3xl flex items-center'>
                        CB Recruitment
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Partners;
