import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='relative'>
      <div className='md:bg-[#f6d818] md:w-[205px] md:h-[775px] md:ml-[205px] mb-10'></div>
      <Image
        src={'/assets/branding/Dotted_square_small.png'}
        alt=''
        width={130}
        height={0}
        className='absolute top-14 left-[142px]'
      />
      <article className='absolute top-10 right-10 w-[390px] space-y-6 Roboto-Light py-10'>
        <h1 className='Roboto-Bold text-7xl'>ABOUT US</h1>
        <p>CB Recruitment is not just another recruitment company.</p>
        <p>
          Are you seeking a specialist Web3 recruitment company with a
          reputation for excellence?
        </p>
        <p>
          Would you like to work with a team that understands your recruiting
          needs and actively works towards building relationships and
          positioning top talent with the best companies in the Web3 space?
        </p>
        <p>
          Are you a company eager to shorten the hiring process, streamline the
          best candidates and increase engagement and retention by hiring the
          right people at the right time for the right job?
        </p>
        <p>We've got you.</p>
        <p>
          Our insight, influence, and leverage are unmatched. Our ability to
          provide services that go above and beyond the typical recruitment
          process is unparalleled.
        </p>
        <p>
          We believe we are the global leaders in the specialist Web3
          recruitment field, and if you work with us, you'll discover we can
          support the claim with our actions.
        </p>
      </article>
      <div>
        <div className='flex flex-col relative'>
          <section className='bg-gradient-to-r from-[#eda238] to-[#f6d715] h-[250px]'>
            <h2 className='text-3xl tracking-wide text-white flex justify-center pt-12 '>
              START YOUR WEB3 CAREER
            </h2>
          </section>
          <section className='flex justify-center'>
            <Image
              src='/assets/branding/Video_mock_up.png'
              alt='Video loading screen'
              className='m-auto absolute top-[120px]'
              width={700}
              height={0}
            ></Image>
          </section>
          <article className='absolute top-[450px] left-[160px]'>
            <h2 className='Roboto-Bold text-4xl'>Who is CB Recruitment</h2>
            <section className='w-[380px] space-y-6 Roboto-Light pt-6 pb-12'>
              <p>People are at the heart of everything we do.</p>
              <p>
                CB Recruitment believes in the future of Web3 and helping people
                to transition into the space. Subsequently, we nurture
                candidates throughout their careers and help companies find
                top-tier Web3 talent.
              </p>
              <p>
                The demand for Web3 builders is at an all-time high as Venture
                Capitalists continue to invest millions in entrepreneurial
                growth across the bleeding-edge technology sector.
              </p>
              <p>
                We work to connect industry-leading talent with some of the
                leading companies in the crypto and blockchain space, and we
                treat every candidate as an individual.
              </p>
              <p>
                CB Recruitment has a supportive company culture that rewards
                innovation and excellence. We hire the best people so you can
                trust your resume or candidate search is in the hands of a team
                who genuinely cares.
              </p>
            </section>
          </article>
          {/* <div className='bg-black h-[100px] w-[100px] absolute bottom-0'></div>
          <div className='bg-black h-[100px] w-[100px] absolute bottom-0'></div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
