import React from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import clsx from 'clsx';
import styles from './Partners.module.css';

const handleDragStart = (e: { preventDefault: () => any }) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1400: { items: 3 },
};

const items = [
  <Image
    src={'/assets/branding/cblogo-whitev2.png'}
    alt={'Partner'}
    onDragStart={handleDragStart}
    className='w-[90px] m-auto 2xl:w-[110px] 2xl:pb-4'
    width={90}
    height={90}
  />,
  <Image
    src={'/assets/branding/cblogo-whitev2.png'}
    alt={'Partner'}
    onDragStart={handleDragStart}
    className='w-[90px] m-auto 2xl:w-[110px] 2xl:pb-4'
    width={90}
    height={90}
  />,
  <Image
    src={'/assets/branding/cblogo-whitev2.png'}
    alt={'Partner'}
    onDragStart={handleDragStart}
    className='w-[90px] m-auto 2xl:w-[110px] 2xl:pb-4'
    width={90}
    height={90}
  />,
];

const Partners = () => {
  return (
    <div className={clsx('w-full m-auto bg-[var(--cream)]', styles.container)}>
      <h2 className='text-[var(--gray)] text-2xl tracking-wide flex justify-center pt-5 pb-5 2xl:text-3xl 2xl:pt-7 2xl:pb-7'>
        PARTNERING WITH:
      </h2>
      <div className='p-2 2xl:p-8'>
        {/* <AliceCarousel
          items={items}
          responsive={responsive}
          controlsStrategy='alternate'
          disableButtonsControls
          infinite
          autoPlay
          animationDuration={3200}
        /> */}
      </div>
    </div>
  );
};

export default Partners;
