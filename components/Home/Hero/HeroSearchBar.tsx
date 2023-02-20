import React, { useState } from 'react';
import router from 'next/router';

const HeroSearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`candidates/?search=${search}`);
  };

  return (
    <div className='flex flex-col mx-auto bg-[var(--gray)] rounded-2xl p-4 mt-4 sm:w-[60%] sm:mx-0 md:w-[60%] lg:w-[55%] lg:mt-18 lg:py-6 xl:w-[40%] 2xl:w-[30%]'>
      <span className='text-white mb-2 font-bold text-xl'>
        Find a job you'll love
      </span>
      <form
        className='flex flex-col space-y-3 w-full justify-between sm:flex-row sm:h-10 sm:space-y-0'
        onSubmit={handleSubmit}
      >
        <input
          className='rounded-lg pl-3 p-[0.75rem] sm:w-[65%]'
          placeholder='e.g "Full Stack Developer"'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          className='bg-[var(--orange)] p-2 rounded-lg text-white font-semibold text-xl sm:flex sm:justify-center sm:items-center sm:text-sm sm:w-[30%]'
          type='submit'
        >
          GET STARTED
        </button>
      </form>
    </div>
  );
};

export default HeroSearchBar;
