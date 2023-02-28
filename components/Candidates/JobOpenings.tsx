import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Job } from '../../interfaces/types';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useRouter } from 'next/router';
import JobOpeningsHome from '../Home/JobOpenings/JobOpenings';
import JobSearch from './JobSearch';
import Pagination from './Pagination';

type Props = {
  jobs: Job[];
  searchQuery: string;
};

const JobOpenings = ({ jobs, searchQuery }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const router = useRouter();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = jobs?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <JobSearch />
      <div className='bg relative'>
        <div className='pt-8'>
          <JobOpeningsHome />
        </div>
        <h2 className='bg-[var(--cream)] rounded-full m-auto w-fit px-8 md:px-10 py-1 md:py-3 text-[var(--darkgray)] text-[13px] Roboto font-semibold tracking-wide mb-10 xl:mb-16 relative 2xl:bottom-[30px]'>
          JOB OPENINGS
        </h2>
        <div className='m-auto grid grid-cols-1 gap-y-6 gap-x-6 mb-6 w-[90%] sm:grid-cols-2 lg:grid-cols-3 xl:w-[80%] xl:grid-cols-4 xl:gap-y-10 '>
          {currentPosts?.map((job) => {
            const categories = job.categories.data;
            return (
              <Link href={`/job/${job.id}`} key={job.id}>
                <div className='flex flex-col justify-center border border-white m-auto items-center min-h-[270px] bg-[#181717] rounded-lg hover:scale-105 ease-in-out duration-300 max-w-[250px]'>
                  <div className='flex flex-col justify-center items-center text-center w-[85%] min-h-[260px] space-y-3'>
                    <Image
                      src={'/assets/branding/cblogo-whitev2.png'}
                      alt='CBRecruiment Logo'
                      width={60}
                      height={20}
                      className='mx-auto'
                    />
                    <h3 className='text-md text-[#f2ad11] pt-2 pb-2 overflow-hidden text-ellipsis w-full'>
                      {job.title}
                    </h3>
                    <div className='flex flex-col w-[90%] space-y-1'>
                      <span className='text-[12px] font-semibold bg-[#f2ad11] border-2 p-1 w-full rounded-sm '>
                        {job.customText15}
                      </span>
                      {categories.map((category) => (
                        <span className='text-[12px] font-semibold bg-[#f2ad11] mt-2 border-2 p-1 w-full rounded-sm whitespace-nowrap text-ellipsis overflow-hidden'>
                          {category.name}
                        </span>
                      ))}
                      <span className='text-[12px] font-semibold bg-[#f2ad11] mt-2 border-2 p-1 w-full rounded-sm whitespace-nowrap text-ellipsis overflow-hidden'>
                        {job.customText12}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className='flex justify-center items-center'>
          <button
            className=''
            onClick={() => {
              router.push(`/candidates`);
            }}
          >
            <KeyboardReturnIcon className='text-[40px] text-[var(--orange)] hover:text-white' />
          </button>
        </div>
        <div className='pb-10 text-white'>
          <Pagination
            totalPosts={jobs?.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Pagination>
        </div>
      </div>
    </>
  );
};

export default JobOpenings;

// const [search, setSearch] = useState(searchQuery ?? '');

// const handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     router.push(`candidates/?search=${search}`);
// };

{
  /* <div className='search justify-center flex mb-10'>
                <form
                    className='mt-[40px] flex text-black'
                    onSubmit={handleSubmit}
                >
                    <input
                        className='bg-white border-0 rounded-sm rounded-r-none text-[15px] p-[15px] h-[30px] w-[95%] focus:outline-none search-input'
                        placeholder='Search here...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className='p-[3px] h-fit w-fit bg-white grid place-items-center text-[25px] text-[var(--orange)] search-btn'
                        type='submit'
                    >
                        <SearchIcon />
                    </button>
                </form>
            </div> */
}
