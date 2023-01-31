import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const about = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center h-full bg-gray-900 text-white'>
                <div className='w-[85%] mx-auto'>
                    <h1 className='mt-10 mb-10 flex justify-center text-white text-5xl'>
                        About us
                    </h1>
                    <ul className='max-w-[80%] mx-auto grid grid-cols-3 mb-10'>
                        <li className='flex flex-col text-center py-2'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image
                                        className='rounded-full flex'
                                        src={'/assets/cblogo&text-white.jpg'}
                                        alt=''
                                        height={200}
                                        width={200}
                                    />
                                </div>
                                <h1 className='text-2xl font-semibold text-white mt-4'>
                                    John Smith
                                </h1>
                            </div>
                            <div className='py-1'>
                                <h1 className='text-xl font-semibold text-white p-3'>
                                    Senior Recruiter
                                </h1>
                            </div>
                        </li>
                        <li className='flex flex-col text-center py-2'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image
                                        className='rounded-full flex'
                                        src={'/assets/cblogo&text-white.jpg'}
                                        alt=''
                                        height={200}
                                        width={200}
                                    />
                                </div>
                                <h1 className='text-2xl font-semibold text-white mt-4'>
                                    John Smith
                                </h1>
                            </div>
                            <div className='py-1'>
                                <h1 className='text-xl font-semibold text-white p-3'>
                                    Senior Recruiter
                                </h1>
                            </div>
                        </li>
                        <li className='flex flex-col text-center py-2'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image
                                        className='rounded-full flex'
                                        src={'/assets/cblogo&text-white.jpg'}
                                        alt=''
                                        height={200}
                                        width={200}
                                    />
                                </div>
                                <h1 className='text-2xl font-semibold text-white mt-4'>
                                    John Smith
                                </h1>
                            </div>
                            <div className='py-1'>
                                <h1 className='text-xl font-semibold text-white p-3'>
                                    Senior Recruiter
                                </h1>
                            </div>
                        </li>
                        <li className='flex flex-col text-center py-2'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image
                                        className='rounded-full flex'
                                        src={'/assets/cblogo&text-white.jpg'}
                                        alt=''
                                        height={200}
                                        width={200}
                                    />
                                </div>
                                <h1 className='text-2xl font-semibold text-white mt-4'>
                                    John Smith
                                </h1>
                            </div>
                            <div className='py-1'>
                                <h1 className='text-xl font-semibold text-white p-3'>
                                    Senior Recruiter
                                </h1>
                            </div>
                        </li>
                        <li className='flex flex-col text-center py-2'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image
                                        className='rounded-full flex'
                                        src={'/assets/cblogo&text-white.jpg'}
                                        alt=''
                                        height={200}
                                        width={200}
                                    />
                                </div>
                                <h1 className='text-2xl font-semibold text-white mt-4'>
                                    John Smith
                                </h1>
                            </div>
                            <div className='py-1'>
                                <h1 className='text-xl font-semibold text-white p-3'>
                                    Senior Recruiter
                                </h1>
                            </div>
                        </li>
                        <li className='flex flex-col text-center py-2'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image
                                        className='rounded-full flex'
                                        src={'/assets/cblogo&text-white.jpg'}
                                        alt=''
                                        height={200}
                                        width={200}
                                    />
                                </div>
                                <h1 className='text-2xl font-semibold text-white mt-4'>
                                    John Smith
                                </h1>
                            </div>
                            <div className='py-1'>
                                <h1 className='text-xl font-semibold text-white p-3'>
                                    Senior Recruiter
                                </h1>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default about;
