import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Info = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className='w-full py-16 px-4 mx-auto'>
      <div ref={ref} className={`${inView ? 'animate-in slide-in-from-right delay-100 duration-1000' : ''}`}>
        <h1 className='max-w-[1240px] mx-auto hidden md:flex text-4xl justify-center font-bold py-2 text-transparent bg-clip-text bg-gradient-to-b from-[#382AC3] to-[#02AFE5]'>
          Why choose us?
        </h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div>
            <h1 className='font-bold text-3xl sm:text-4xl md:hidden py-2 text-transparent bg-clip-text bg-gradient-to-b from-[#382AC3] to-[#02AFE5] flex justify-center'>
              Why choose us?
            </h1>
            <Image
              className='flex justify-center items-center mx-auto md:w-[500px]'
              src={'/assets/branding/characters-looking-job.png'}
              alt=''
              width={450}
              height={50}
            />
          </div>
          <div className='flex flex-col justify-center md:mt-8 lg:mt-0'>
            <p className='font-medium text-center mx-auto max-w-[85%] md:text-md'>
              CBRecruitment is a team of experienced recruiters specializing in the crypto and blockchain space. We have a
              reputation as the leading talent acquisition service in the Web3 space, and our team is supported by The Coin
              Bureau, an industry influencer and educator. Our expertise helps you find top talent in this rapidly growing
              field.
            </p>
            <Link href='/contact'>
              <div className='p-1 bg-gradient-to-b from-[#382AC3] to to-[#02AFE5] rounded-full w-fit mt-8 mx-auto ease-in duration-300'>
                <button className='px-5 py-1 w-[175px] bg-white rounded-full text-black font-semibold hover:bg-gradient-to-b from-[#382AC3] to-[#02AFE5] ease-in duration-300'>
                  Contact us
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
