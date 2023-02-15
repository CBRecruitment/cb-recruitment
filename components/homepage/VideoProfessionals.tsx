import React from 'react';

const VideoProfessionals = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center text-[var(--darkgray)]'>
                <h1 className='Magnify mt-4 tracking-wide text-[15px]'>
                    VIDEO WEB3 PROFESSIONALS
                </h1>
                <p className='w-[80%] m-auto Magnify text-center mt-2 mb-4 text-[13px] Magnify tracking-wide'>
                    Short blurb about deep connections we have in the space
                    across all areas for those that are experienced in Web3
                </p>
            </div>
            <img
                src='/assets/branding/Video_mock_up.png'
                className='m-auto'
            ></img>
        </>
    );
};

export default VideoProfessionals;
