import Image from 'next/image';
import React from 'react';
import Commitment from './Commitment';
import CoreValues from './CoreValues';
import OurMission from './OurMission';
import Partnerships from './Partnerships';
import styles from './AboutUs.module.css';
import clsx from 'clsx';

const AboutUs = () => {
  return (
    <div className='relative text-black h-full'>
      <div className={clsx('h-full pb-10', styles.about_us_container)}>
        <div className='bg-[#eb9a3d] w-[20%] h-[717.5px] md:hidden'></div>
        <div className='hidden md:block bg-[#f6d818] mt-10 w-[150px] ml-[130px] h-[717.5px] lg:ml-[200] lg:w-[200px] xl:ml-[200px] xl:w-[250px] xl:h-[900px] 2xl:w-[325px] 2xl:ml-[300px]'></div>
        <Image
          src={'/assets/branding/about-us/dots.png'}
          alt='Black dots for decoration'
          width={100}
          height={0}
          className='absolute top-8 w-[25%] left-[7.5%] xsm:w-[20%] xsm:left-[10%] sm:w-[17%] sm:left-[11.5%] md:w-[130px] md:left-[65px] lg:w-[130px] lg:left-[66px] lg:top-12 xl:left-[136px] 2xl:left-[235px] 2xl:mt-5'
        />
        <Image
          src={'/assets/branding/about-us/standing_woman.png'}
          alt='Lady standing up'
          width={140}
          height={0}
          className={clsx(
            'absolute top-[215px] w-[140px] ml-3 xsm:!top-[210px] xsm:!w-[180px] xsm:ml-10 md:!ml-[200px] md:!mt-10 xl:left-[100px] 2xl:left-[260px]',
            styles.standing_woman
          )}
        />
        <article className='absolute top-8 right-4 sm:w-[50%] xl:pt-6 2xl:w-[40%]'>
          <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit'>ABOUT US</h1>
          <div
            className={clsx(
              'relative space-y-6 font-extralight text-sm pt-2 w-[175px] xsm:w-[220px] xsm:text-[16px] sm:space-y-10 md:!w-[385px] md:pt-0 md:!text-[15px] md:space-y-8 xl:!text-xl xl:!w-[550px] xl:space-y-7',
              styles.top_text
            )}
          >
            <p>CB Recruitment is not just another recruitment company.</p>
            <p>Are you seeking a specialist Web3 recruitment company with a reputation for excellence?</p>
            <br className='sm:hidden' />
            <br className='sm:hidden' />
            <br className='sm:hidden' />
            <p>
              Would you like to work with a team that understands your recruiting needs and actively works towards building
              relationships and positioning top talent with the best companies in the Web3 space?
            </p>
            <p>
              Are you a company eager to shorten the hiring process, streamline the best candidates and increase engagement
              and retention by hiring the right people at the right time for the right job?
            </p>
            <p>We've got you.</p>
            <p className='hidden md:block'>
              Our insight, influence and leverage are unmatched. Our ability to provide services that go above and beyond the
              typical recruitment process is unparalleled.
            </p>
            <p className='hidden md:block'>
              We believe we are global leaders in the specialist Web3 recruitment field, and if you work with us, you'll
              discover we can support the claim with our actions.
            </p>
          </div>
        </article>
      </div>
      <div className='flex flex-col pt-4 h-[2300px] xsm:h-[2200px] md:h-[950px]'>
        <div className='pt-[-10rem] md:w-full md:bg-gradient-to-r from-[#eda238] to-[#f6d715] md:h-[270px] xl:h-[300px]'>
          <h2 className='hidden Roboto-Bold text-white text-3xl md:flex justify-center pt-5 pb-3 xl:text-4xl xl:pt-7'>
            TITLE FOR THIS SECTION
          </h2>
          <div className='md:flex md:justify-between md:w-[690px] md:mx-auto lg:w-[800px] xl:w-[900px]'>
            <OurMission />
            <CoreValues />
            <Commitment />
            <Partnerships />
          </div>
        </div>
        <article className='relative mt-20 w-[290px] xsm:w-[440px] mx-auto md:w-[768px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1200px]'>
          <div className='md:w-[768px] md:h-[600px] lg:w-[900px] lg:h-[800px] xl:w-[1100px] xl:h-[850px] 2xl:w-[1200px]'>
            <div className='absolute w-[290px] xsm:w-[440px] space-y-6 pt-3 text-sm font-extralight px-2 xsm:text-center xsm:px-10 md:text-left md:px-0 md:ml-10 md:w-[380px] md:mx-auto lg:text-base xl:text-xl xl:w-[500px] xl:space-y-10'>
              <h2 className='font-semibold text-[26px] text-center md:pt-20 md:text-left md:text-3xl lg:text-4xl xl:text-5xl xl:w-[500px]'>
                Who is CB Recruitment
              </h2>
              <p>People are at the heart of everything we do.</p>
              <p>
                CB Recruitment believes in the future of Web3 and helping people to transition into the space. Subsequently,
                we nurture candidates throughout their careers and help companies find top-tier Web3 talent.
              </p>
              <p>
                The demand for Web3 builders is at an all-time high as Venture Capitalists continue to invest millions in
                entrepreneurial growth across the bleeding-edge technology sector.
              </p>
              <div className='relative xsm:ml-6 md:hidden'>
                <Image
                  src={'/assets/branding/about-us/sitting_man.png'}
                  alt='Man sitting down'
                  width={135}
                  height={0}
                  className='absolute top-0 left-7 xsm:w-[150px] xsm:left-5'
                />
                <Image
                  src={'/assets/branding/about-us/sitting_lady.png'}
                  alt='Lady sitting down'
                  width={130}
                  height={0}
                  className='absolute top-10 left-[140px] xsm:w-[145px] xsm:left-[150px]'
                />
                <Image
                  src={'/assets/branding/about-us/table.png'}
                  alt='Table with decorations around'
                  width={250}
                  height={0}
                  className='absolute top-[100px] left-[6px]'
                />
              </div>
              <p className='pt-[425px] md:pt-0'>
                We work to connect industry-leading talent with some of the leading companies in the crypto and blockchain
                space, and we treat every candidate as an individual.
              </p>
              <p>
                CB Recruitment has a supportive company culture that rewards innovation and excellence. We hire the best
                people so you can trust your resume or candidate search is in the hands of a team who genuinely cares.
              </p>
            </div>
            <div className='hidden md:block relative h-[500px] ml-[430px] top-[130px] lg:ml-[500px] xl:ml-[600px] xl:h-[550px] 2xl:ml-[650px]'>
              <Image
                src={'/assets/branding/about-us/sitting_man.png'}
                alt='Man sitting down'
                width={135}
                height={0}
                className='absolute top-0 left-7 xsm:w-[150px] xsm:left-5 lg:w-[180px] lg:left-10 xl:w-[220px] xl:left-12'
              />
              <Image
                src={'/assets/branding/about-us/sitting_lady.png'}
                alt='Lady sitting down'
                width={130}
                height={0}
                className='absolute top-10 left-[140px] xsm:w-[145px] xsm:left-[150px] lg:w-[165px] lg:left-[200px] lg:top-14 xl:left-[240px] xl:w-[190px]'
              />
              <Image
                src={'/assets/branding/about-us/table.png'}
                alt='Table with decorations around'
                width={250}
                height={0}
                className='absolute top-[100px] left-[6px] lg:left-[0px] lg:top-[140px] lg:w-[300px] xl:top-[120px] xl:w-[400px]'
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutUs;
