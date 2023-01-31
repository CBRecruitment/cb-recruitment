import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Partners = () => {
    return (
        <div className='w-full h-[17.5vh]'>
            <h1 className='text-[#3b444b] text-2xl tracking-wide flex justify-center pt-4 pb-5'>
                PARTNERING WITH:
            </h1>
            <div className='flex justify-between max-w-[90%] mx-auto opacity-60'>
                <div className='flex'>
                    <Image
                        className='mr-5'
                        src={'/assets/cblogo.png'}
                        alt=''
                        width={80}
                        height={200}
                    />
                    <h1 className='text-gray-600 text-4xl flex items-center'>
                        CB Recruitment
                    </h1>
                </div>
                <div className='flex'>
                    <Image
                        className='mr-5'
                        src={'/assets/cblogo.png'}
                        alt=''
                        width={80}
                        height={200}
                    />
                    <h1 className='text-gray-600 text-4xl flex items-center'>
                        CB Recruitment
                    </h1>
                </div>
                <div className='flex'>
                    <Image
                        className='mr-5'
                        src={'/assets/cblogo.png'}
                        alt=''
                        width={80}
                        height={200}
                    />
                    <h1 className='text-gray-600 text-4xl flex items-center'>
                        CB Recruitment
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Partners;
