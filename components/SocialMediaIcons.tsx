import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialMediaIcons = () => {
    return (
        <div className='flex justify-around w-[90%] mx-auto space-x-5 mt-10 pb-5 sm:w-[60%] sm:mx-0 md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%] opacity-80'>
            <Link href='https://t.me/CBR_Jobs' target='_blank'>
                <Image
                    className='hover:scale-110 ease-in-out duration-200'
                    src={'/assets/branding/telegram-white.png'}
                    alt='Telegram logo'
                    width={50}
                    height={50}
                />
            </Link>
            <Link href='https://twitter.com/cb_recruitment_' target='_blank'>
                <Image
                    className='hover:scale-110 ease-in-out duration-200'
                    src={'/assets/branding/twitter-white.png'}
                    alt='Twitter logo'
                    width={50}
                    height={50}
                />
            </Link>
            <Link
                href='https://www.linkedin.com/company/80659134'
                target='_blank'
            >
                <Image
                    className='hover:scale-110 ease-in-out duration-200'
                    src={'/assets/branding/linkedin-white.png'}
                    alt='LinkedIn logo'
                    width={50}
                    height={50}
                />
            </Link>
            <Link href='mailto:info@cbrecruitment.com' target='_blank'>
                <Image
                    className='hover:scale-110 ease-in-out duration-200'
                    src={'/assets/branding/email-white.png'}
                    alt='Email logo'
                    width={50}
                    height={50}
                />
            </Link>
        </div>
    );
};

export default SocialMediaIcons;
