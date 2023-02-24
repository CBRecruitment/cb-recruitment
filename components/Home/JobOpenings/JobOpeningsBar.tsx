import React from 'react';

const JobOpeningsBar = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='absolute top-[141px] xl:top-[235px]'>
        <p className='bg-[var(--cream)] rounded-full m-auto w-fit px-[2rem] py-[0.2rem] text-[var(--darkgray)] text-[11px] xl:text-[20px] Roboto font-semibold tracking-wide top-[14px] pt-1 relative bottom-0 xl:px-[5rem] xl:py-3 '>
          JOB OPENINGS
        </p>
      </div>
    </div>
  );
};

export default JobOpeningsBar;
