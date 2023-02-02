import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Pagination from '../components/Pagination';

const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

type Job = {
    id: number;
    title: string;
    categories: Category[];
    skills: Skill[];
    employmentType: string;
    customText14: string;
    customText12: string;
    dateAdded: number;
    _score: number;
};

type Skill = {
    total: {
        id: number;
        data: {
            id: number;
            name: string;
        }[];
    };
};

type Category = {
    id: number;
    name: string;
};

type SearchResponse = {
    total: number;
    start: number;
    count: number;
    data: Job[];
};

type Props = {
    data: SearchResponse;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(
        `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills,employmentType,customText14,customText12,dateAdded&count=500&query=isOpen:1 AND isDeleted:0 AND NOT status:archive&BhRestToken=${BhRestToken}&sort=-dateAdded`
    );
    const data = await res.json();
    return { props: { data } };
};

const CandidatesPage = ({ data }: Props) => {
    const [results, setResults] = useState(data.data);
    const [searchBar, setSearchBar] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchBar(e.currentTarget.value);
    };

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = results.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <Navbar />
            <div className='bg-[var(--darkgray)] text-white h-full py-10'>
                <h1 className='text-4xl flex justify-center underline text-[var(--orange)]'>
                    Job Openings
                </h1>
                <div className='flex justify-center items-center cursor-pointer w-[30%] m-auto my-6'>
                    <input
                        className='text-sm font-normal text-black p-1 pl-3 w-[60%] search-bar'
                        type='search'
                        onChange={handleChange}
                    />
                    <button className='bg-white p-1 border-none w-[10%] flex justify-center search-btn'>
                        {' '}
                        <Image
                            className='p-[0.15rem]'
                            src={'/assets/search-orange.png'}
                            alt='Search button'
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
                <div className='w-[60%] mx-auto'>
                    <div>
                        {currentPosts
                            .filter((job) => {
                                return searchBar.toLowerCase() === ''
                                    ? job
                                    : job.title
                                          .toLowerCase()
                                          .includes(searchBar);
                            })
                            .map((result) => {
                                const skills = result.skills;
                                return (
                                    <Link
                                        href={`/job/${result.id}`}
                                        key={result.id}
                                    >
                                        <div
                                            key={result.id}
                                            className='mt-6 flex justify-between items-center py-5 border border-white px-5 rounded-md hover:bg-[var(--gray)]'
                                        >
                                            <div>
                                                <p className='text-2xl text-[var(--orange)]'>
                                                    {result.title}
                                                </p>
                                                {/* <p>{result.categories}</p> */}
                                            </div>
                                            <div className='flex flex-row space-x-5'>
                                                {/* {skills.map((skill) => (
                                                    <p
                                                        key={skill.id}
                                                        className='text-sm rounded-md border border-[var(--orange)] p-2 hover:bg-[var(--orange)]'
                                                    >
                                                        {skill?.name}
                                                    </p>
                                                ))} */}
                                                <p className='text-sm rounded-md border border-[var(--orange)] p-2 hover:bg-[var(--orange)]'>
                                                    {result?.customText12}
                                                </p>
                                                <p className='text-sm rounded-md border border-[var(--orange)] p-2 hover:bg-[var(--orange)]'>
                                                    {result?.customText14}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                    <Pagination
                        totalPosts={results.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CandidatesPage;
