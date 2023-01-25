import React from 'react';

const Landing = () => {
    return (
        <>
            <div className='w-screen h-screen grid grid-cols-2 text-black'>
                <div className='w-full h-full bg-yellow-300 flex flex-col items-center justify-center'>
                    <p>I am exploring jobs in the</p>
                    <p className='font-bold'>crypto | blockchain | web3</p>
                    <p>space</p>
                    <button className='bg-yellow-600 border border-white'>
                        SEE OPEN POSITIONS
                    </button>
                </div>
                <div className='w-full h-full bg-gray-400 flex items-center justify-center'>
                    <p>Page 2</p>
                </div>
            </div>
        </>
    );
};

export default Landing;
