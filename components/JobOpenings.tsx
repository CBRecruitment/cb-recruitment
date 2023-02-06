import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Job } from '../types';

interface Props {
    jobs: Job[];
}

const JobOpenings = ({ jobs }: Props) => {
    return (
        <>
            <div className='m-auto grid grid-cols-1 gap-y-6 gap-x-6 w-[90%] sm:grid-cols-2 lg:grid-cols-3 xl:w-[80%] 2xl:w-[60%]'>
                {jobs.map((job) => {
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
        </>
    );
};

export default JobOpenings;

{
    /* {skills.map((skill) => (
        <p
            className='text-sm rounded-md border border-[var(--orange)] p-2 hover:bg-[var(--orange)]'
            key={skill.id}
        >
            {skill.name}
        </p>
    ))}
        <p className='text-sm rounded-md border border-[var(--orange)] p-2 hover:bg-[var(--orange)]'>
            {result?.customText12}
        </p>
        <p className='text-sm rounded-md border border-[var(--orange)] p-2 hover:bg-[var(--orange)]'>
            {result?.customText14}
        </p> */
}

// const [currentPage, setCurrentPage] = useState(1);
// const [postsPerPage, setPostsPerPage] = useState(5);

// const lastPostIndex = currentPage * postsPerPage;
// const firstPostIndex = lastPostIndex - postsPerPage;
// const currentPosts = results.slice(firstPostIndex, lastPostIndex);

// .filter((job) => {
//     return searchBar.toLowerCase() === ''
//         ? job
//         : job.title
//               .toLowerCase()
//               .includes(searchBar);
// })

{
    /* <Pagination
        totalPosts={results.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
    > */
}
