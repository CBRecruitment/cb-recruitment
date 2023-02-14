import React from 'react';
import Carousel from './Carousel';

const Partners = () => {
    return (
        <div className='w-full m-auto bg-[var(--cream)]'>
            <h1 className='text-[var(--gray)] text-2xl tracking-wide flex justify-center pt-6 pb-5'>
                PARTNERING WITH:
            </h1>
            <div className='w-full py-6'>
                <div className='w-[80%] m-auto'>
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Partners;
