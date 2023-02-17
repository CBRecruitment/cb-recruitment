import React from 'react';

const JobOpeningsBar = () => {
    return (
        <div className='absolute top-[190px]'>
            <p className='bg-[var(--cream)] rounded-full m-auto w-fit px-[2rem] py-[0.2rem] text-[var(--darkgray)] text-[11px] Roboto font-semibold tracking-wide top-[14px] pt-1 relative bottom-0'>
                JOB OPENINGS
            </p>
            <div className='bg-[var(--cream)] h-1 w-screen'></div>
        </div>
    );
};

export default JobOpeningsBar;
