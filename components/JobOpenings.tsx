import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Job } from '../interfaces/types';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useRouter } from 'next/router';
import Pagination from './Pagination';

interface Props {
    jobs: Job[];
}

const JobOpenings = ({ jobs }: Props) => {
    const [search, setSearch] = useState('');
    const [value, setValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const router = useRouter();

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = jobs?.slice(firstPostIndex, lastPostIndex);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push(`candidates/?search=${search}`);
    };

    return (
        <>
            <div className='search justify-center flex mb-10'>
                <form
                    className='mt-[40px] flex text-black'
                    onSubmit={handleSubmit}
                >
                    <input
                        className='bg-white border-0 rounded-sm rounded-r-none text-[15px] p-[15px] h-[30px] w-[300px] focus:outline-none search-bar-nav'
                        placeholder='Search here...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className='p-[3px] h-fit w-fit bg-white grid place-items-center text-[25px] text-[var(--orange)] search-btn-nav'
                        type='submit'
                    >
                        <SearchIcon />
                    </button>
                </form>
            </div>
            <div className='m-auto grid grid-cols-1 gap-y-6 gap-x-6 w-[90%] sm:grid-cols-2 lg:grid-cols-3 xl:w-[80%] 2xl:w-[60%] mb-6'>
                {currentPosts?.map((job) => {
                    const categories = job.categories.data;
                    return (
                        <Link href={`/job/${job.id}`} key={job.id}>
                            <div className='flex flex-col justify-center border border-white m-auto items-center  min-h-[250px] max-w-[275px] bg-[var(--gray)] rounded-lg hover:scale-105 ease-in-out duration-300'>
                                <div className='flex flex-col justify-center items-center text-center max-w-[70%]'>
                                    <Image
                                        src={
                                            '/assets/branding/cblogo-whitev2.png'
                                        }
                                        alt='CBRecruiment Logo'
                                        width={50}
                                        height={20}
                                    />
                                    <p className='text-lg text-[var(--orange)] mt-2'>
                                        {job.title}
                                    </p>
                                    {categories.map((category) => (
                                        <span className='text-md mb-1'>
                                            {category.name}
                                        </span>
                                    ))}
                                    <p className='text-[12px] font-semibold bg-[var(--orange)] mt-2 border p-1 w-[80%] rounded-lg'>
                                        {job.customText15}
                                    </p>
                                    <p className='text-[12px] font-semibold bg-[var(--orange)] mt-2 border p-1 w-[80%] rounded-lg'>
                                        {job.customText12}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className='flex justify-center items-center'>
                <button
                    className='md:fixed md:bottom-[100px] md:w-full'
                    onClick={() => {
                        router.push(`/candidates`);
                    }}
                >
                    <KeyboardReturnIcon className='text-[40px] text-[var(--orange)]' />
                </button>
            </div>
            <footer className='md:fixed md:bottom-0 md:w-full md:mb-10'>
                <Pagination
                    totalPosts={jobs?.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                >
                    {' '}
                </Pagination>
            </footer>
        </>
    );
};

export default JobOpenings;
