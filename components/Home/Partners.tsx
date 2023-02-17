import React from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e: any) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <Image
        src={'/assets/branding/cblogo-whitev2.png'}
        alt={'Partner'}
        onDragStart={handleDragStart}
        className='w-[90px] m-auto'
        width={90}
        height={90}
    />,
    <Image
        src={'/assets/branding/cblogo-whitev2.png'}
        alt={'Partner'}
        onDragStart={handleDragStart}
        className='w-[90px] m-auto'
        width={90}
        height={90}
    />,
    <Image
        src={'/assets/branding/cblogo-whitev2.png'}
        alt={'Partner'}
        onDragStart={handleDragStart}
        className='w-[90px] m-auto'
        width={90}
        height={90}
    />,
];

const Partners = () => {
    return (
        <div className='w-full m-auto bg-[var(--cream)]'>
            <h1 className='text-[var(--gray)] text-2xl tracking-wide flex justify-center pt-6 pb-5'>
                PARTNERING WITH:
            </h1>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy='alternate'
                disableButtonsControls
                infinite
                autoPlay
                animationDuration={3200}
            />
        </div>
    );
};

export default Partners;
