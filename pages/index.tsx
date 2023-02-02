import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
    return (
        <div className='h-screen w-screen grid lg:grid-cols-2 custom-img-landing'>
            <div className='left-dim'>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='text-center text-gray-800 lg:mr-32'>
                        <h1 className='text-3xl tracking-wider'>
                            I am exploring jobs in the
                        </h1>
                        <h1 className='text-3xl font-bold tracking-wider'>
                            crypto | blockchain | web3
                        </h1>
                        <h1 className='text-3xl tracking-wider'>space</h1>
                        <Link href='/home'>
                            <button className='bg-[var(--orange)] text-white border border-white px-20 py-3 mt-4 hover:scale-105 ease-in-out duration-75'>
                                SEE OPEN POSITIONS
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='right-dim'>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='text-center text-white lg:ml-32'>
                        <h1 className='text-3xl tracking-wider'>
                            I am hiring for a
                        </h1>
                        <h1 className='text-3xl font-bold tracking-wider'>
                            crypto | blockchain | web3
                        </h1>
                        <h1 className='text-3xl tracking-wider'>venture</h1>
                        <button className='bg-gray-800 border text-white border-white px-20 py-3 mt-4 hover:scale-105 ease-in-out duration-75'>
                            LEARN HOW WE CAN HELP
                        </button>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-full flex justify-center space-x-6 mb-6'>
                <Link href='https://t.me/CBR_Jobs' target='_blank'>
                    <Image
                        className='hover:scale-110 ease-in-out duration-200'
                        src={'/assets/telegram-white.png'}
                        alt='Telegram logo'
                        width={40}
                        height={40}
                    />
                </Link>
                <Link
                    href='https://twitter.com/cb_recruitment_'
                    target='_blank'
                >
                    <Image
                        className='hover:scale-110 ease-in-out duration-200'
                        src={'/assets/twitter-white.png'}
                        alt='Twitter logo'
                        width={40}
                        height={40}
                    />
                </Link>
                <Link
                    href='https://www.linkedin.com/company/80659134'
                    target='_blank'
                >
                    <Image
                        className='hover:scale-110 ease-in-out duration-200'
                        src={'/assets/linkedin-white.png'}
                        alt='LinkedIn logo'
                        width={40}
                        height={40}
                    />
                </Link>
                <Link href='mailto:info@cbrecruitment.com' target='_blank'>
                    <Image
                        className='hover:scale-110 ease-in-out duration-200'
                        src={'/assets/email-white.png'}
                        alt='Email logo'
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
