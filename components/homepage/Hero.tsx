import React from 'react';
import HeroSearchBar from './HeroSearchBar';
import SocialMediaIcons from '../SocialMediaIcons';

const Hero = () => {
    return (
        <div className='custom-img-hero-mobile flex-1'>
            <div className=''>
                <div className='min-h-screen w-[92.5%] mx-auto  pt-10 xl:max-w-[35%] xl:pt-10 xl:ml-28'>
                    <h1 className='text-[var(--cream)] max-w-[45%] text-left Anton-Regular'>
                        Making Web3 Work
                    </h1>
                    <HeroSearchBar />
                    <SocialMediaIcons />
                </div>
            </div>
        </div>
    );
};

export default Hero;

{
    /* <div className='custom-img-hero flex-grow'>
            <div className='ml-24 xl:ml-28 max-w-[35%] h-full pt-5 xl:pt-10'>
                <h1 className='text-[var(--orange)] max-w-[45%] text-left Anton-Regular'>
                    Making Web3 Work
                </h1>
                <div className='flex flex-col bg-[var(--gray)] p-6 rounded-2xl mt-6 xl:mt-10'>
                    <span className='text-white mb-1 font-bold text-lg'>
                        Find a job you'll love
                    </span>
                    <form
                        className='flex flex-col space-y-3 w-full justify-between xl:flex-row xl:space-y-0'
                        onSubmit={handleSubmit}
                    >
                        <input
                            className='rounded-lg pl-2 px-6 py-1.5 xl:w-[55%] 2xl:w-[65%]'
                            placeholder='e.g "Full Stack Developer"'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        ></input>
                        <button
                            className='bg-[var(--orange)] px-6 py-1.5 rounded-lg text-white font-bold'
                            type='submit'
                        >
                            GET STARTED
                        </button>
                    </form>
                </div>
                <div className='flex space-x-5 mt-6 xl:mt-10 mb-4'>
                    <Link href='https://t.me/CBR_Jobs' target='_blank'>
                        <Image
                            className='hover:scale-110 ease-in-out duration-200'
                            src={'/assets/branding/telegram-orange.png'}
                            alt='Telegram logo'
                            width={45}
                            height={45}
                        />
                    </Link>
                    <Link
                        href='https://twitter.com/cb_recruitment_'
                        target='_blank'
                    >
                        <Image
                            className='hover:scale-110 ease-in-out duration-200'
                            src={'/assets/branding/twitter-orange.png'}
                            alt='Twitter logo'
                            width={45}
                            height={45}
                        />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/company/80659134'
                        target='_blank'
                    >
                        <Image
                            className='hover:scale-110 ease-in-out duration-200'
                            src={'/assets/branding/linkedin-orange.png'}
                            alt='LinkedIn logo'
                            width={45}
                            height={45}
                        />
                    </Link>
                    <Link href='mailto:info@cbrecruitment.com' target='_blank'>
                        <Image
                            className='hover:scale-110 ease-in-out duration-200'
                            src={'/assets/branding/email-orange.png'}
                            alt='Email logo'
                            width={45}
                            height={45}
                        />
                    </Link>
                </div>
            </div>
        </div> */
}
