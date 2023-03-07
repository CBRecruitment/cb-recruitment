import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fields, Job, Options } from '../../interfaces/types';
import JobSearch from './JobSearch';
import Pagination from './Pagination';
import Sidemenu from './Sidemenu/Sidemenu';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import styles from './Candidates.module.css';
import clsx from 'clsx';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import DateFormatter from '../Blog/date-formatter';

type Props = {
  jobs: Job[];
  searchQuery: string;
  fields: Fields[];
  skills: Options[];
  categories: Options[];
};

const JobOpenings = ({ jobs, searchQuery, fields, skills, categories }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [showMenu, setShowMenu] = useState(false);

  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = jobs?.slice(firstPostIndex, lastPostIndex);
  const jobsFound = `Found ${jobs.length} Jobs`;
  const currentDate = new Date();

  return (
    <div className='pb-10'>
      <JobSearch searchQuery={searchQuery} />
      <div className='bg pt-10 flex flex-col h-full w-full'>
        <div className='md:flex md:space-x-6 md:pl-2'>
          <div className='flex flex-col justify-center pb-10 md:hidden'>
            {showMenu && <Sidemenu fields={fields} skills={skills} categories={categories} />}
            <section className='flex justify-center'>
              <button
                onClick={handleInputClick}
                className='px-10 py-1 bg-[var(--orange)] rounded-lg text-white font-semibold tracking-wider'
              >
                FILTER
              </button>
            </section>
          </div>
          <div className='hidden md:block'>
            <Sidemenu fields={fields} skills={skills} categories={categories} />
          </div>
          <div className='w-[95%] mx-auto'>
            <span className='text-white md:ml-2'>{jobsFound}</span>
            <div className='grid md:grid-cols-2 md:gap-y-4 md:gap-x-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pt-2 md:pt-4'>
              {currentPosts?.map((job) => {
                const categories = job.categories.data;
                const skills = job.skills.data.slice(0, 1);
                const skills2 = job.skills.data.slice(1, 1);

                const dateAdded = new Date(job.dateAdded);
                const days = (currentDate: any, dateAdded: any) => {
                  let difference = currentDate?.getTime() - dateAdded?.getTime();
                  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
                  return totalDays;
                };
                const jobAdded = days(currentDate, dateAdded);

                return (
                  <Link href={`/job/${job.id}`} key={job.id}>
                    <div className='border border-white rounded-md bg-black flex py-2 sm:py-3 mb-2 md:min-h-[250px] md:w-[220px] md:flex-col md:justify-center md:mx-auto hover:scale-105 hover:ease-in-out hover:duration-300'>
                      {/* <time className='hidden text-white text-sm w-fit mt-1 h-fit ml-auto pr-4 md:block'>{`${jobAdded}d`}</time> */}
                      <Image
                        src={'/assets/branding/cblogo-whitev2.png'}
                        alt='CBRecruiment Logo'
                        width={60}
                        height={0}
                        className='w-fit h-fit my-auto p-4 md:m-auto md:p-2'
                      />
                      <div
                        className='flex flex-col justify-evenly h-[100px] w-[275px] xsm:w-[320px] sm:w-[450px]
                        md:min-h-[220px] md:w-[220px] md:mx-auto md:justify-evenly md:text-center'
                      >
                        <section className='md:w-[85%] md:mx-auto'>
                          <h3 className='text-[var(--orange)] sm:text-lg font-medium md:whitespace-nowrap md:overflow-hidden md:text-ellipsis'>
                            {job.title}
                          </h3>
                          {categories.map((category) => (
                            <h4
                              key={category.id}
                              className='text-sm text-white font-light sm:text-base md:whitespace-nowrap md:overflow-hidden md:text-ellipsis md:w-[80%] md:mx-auto'
                            >
                              {category.name}
                            </h4>
                          ))}
                        </section>
                        <div className='md:mx-auto'>
                          <section className='space-x-2 xsm:w-[320px] sm:w-[450px] xsm:flex xsm:items-center md:space-x-0 md:flex md:flex-col md:w-[170px]'>
                            <span className={clsx('md:min-w-full', styles.jobdetails)}>
                              {job.customText15 || job.salary}
                            </span>
                            {skills.map((skill) => (
                              <span key={skill.id} className={clsx('md:min-w-full', styles.jobdetails)}>
                                {skill.name}
                              </span>
                            ))}
                            {skills2.map((skill) => (
                              <span className={clsx('hidden sm:inline-flex md:min-w-full', styles.jobdetails)}>
                                {skill.name}
                              </span>
                            ))}
                            <span className={clsx('hidden xsm:inline-flex md:min-w-full', styles.jobdetails)}>
                              {job.customText12}
                            </span>
                          </section>
                        </div>
                      </div>
                      {/* <time className='text-white text-sm w-fit mt-1 h-fit mx-auto md:hidden'>{`${jobAdded}d`}</time> */}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className='flex justify-center mt-4'>
              {/* <button
                onClick={() => {
                  router.push(`/candidates`);
                }}
              >
                <KeyboardReturnIcon
                  className='text-[var(--orange)] hover:text-white'
                  size={40}
                />
              </button> */}
            </div>
            <div className='text-white'>
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
