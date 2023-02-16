import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e: any) => e.preventDefault();

const items = [
    <img
        src='/assets/branding/cblogo-whitev2.png'
        onDragStart={handleDragStart}
        className='w-[90px] m-auto'
    />,
    <img
        src='/assets/branding/cblogo-whitev2.png'
        onDragStart={handleDragStart}
        className='w-[90px] m-auto'
    />,
    <img
        src='/assets/branding/cblogo-whitev2.png'
        onDragStart={handleDragStart}
        className='w-[90px] m-auto'
    />,
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Carousel = () => {
    return (
        <div>
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

export default Carousel;
