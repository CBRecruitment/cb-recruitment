import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Job } from '../../interfaces/types';
import { useRouter } from 'next/router';
import JobSearch from './JobSearch';
import Pagination from './Pagination';
import Sidemenu from './Sidemenu/Sidemenu';
import { BsArrowReturnLeft } from 'react-icons/bs';

type Props = {
  jobs: Job[];
  searchQuery: string;
};

const JobOpenings = ({ jobs, searchQuery }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const router = useRouter();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = jobs?.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <JobSearch />
      <div className='gray_bg pt-10 md:px-4 xl:pl-10 flex flex-col h-full'>
        <div className='flex justify-center md:justify-start'>
          <Sidemenu />
          <div className='md:w-full md:pl-4 xl:pl-10 h-full'>
            <div className='mx-auto gap-y-6 xl:gap-y-10 gap-x-6 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 relative'>
              {currentPosts?.map((job) => {
                const categories = job.categories.data;
                return (
                  <Link href={`/job/${job.id}`} key={job.id}>
                    <div className='flex flex-col justify-center rounded-lg hover:scale-105 ease-in-out duration-300 border border-white bg-[#181717] m-auto items-center min-h-[280px] max-w-[250px] md:w-[210px] 2xl:w-[230px]'>
                      <div className='flex flex-col justify-center items-center text-center w-[90%] min-h-[260px] space-y-3'>
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

            <div className='flex justify-center items-center mx-auto w-fit'>
              <button
                className=''
                onClick={() => {
                  router.push(`/candidates`);
                }}
              >
                <BsArrowReturnLeft
                  className='text-[var(--orange)] hover:text-white'
                  size={35}
                />
              </button>
            </div>
            <div className='text-white pb-10'>
              <Pagination
                totalPosts={jobs?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              ></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpenings;

{
  /* <div className='pt-8'>
          <JobOpeningsHome />
        </div>
        <h2 className='bg-[var(--cream)] rounded-full m-auto w-fit px-8 md:px-10 py-1 md:py-3 text-[var(--darkgray)] text-[13px] Roboto font-semibold tracking-wide mb-10 xl:mb-16 relative 2xl:bottom-[30px]'>
          JOB OPENINGS
        </h2> */
}

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
