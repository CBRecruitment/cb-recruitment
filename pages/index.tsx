import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
// import JobOpeningsHome from '../components/JobOpeningsHome';
import LearnMore from '../components/LearnMore';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';
import { Job } from '../interfaces/types';

// const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
// const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

// type SearchResponse = {
//     total: number;
//     start: number;
//     count: number;
//     data: Job[];
// };

// type Props = {
//     searchResults: SearchResponse;
// };

// export const getServerSideProps: GetServerSideProps = async (req) => {
//     const res = await fetch(
//         `${BullhornUrl}/search/JobOrder?fields=id,title&count=10&query=isOpen:1 AND isDeleted:0 AND NOT status:archive&BhRestToken=${BhRestToken}&sort=-dateAdded`
//     );
//     const searchResults: Props = await res.json();
//     return { props: { searchResults } };
// };

const Home = () => {
    return (
        <>
            <div className=''>
                <Navbar />
                <Hero />
                <Partners />
                <LearnMore />
                {/* <JobOpeningsHome jobs={searchResults.data} /> */}
                <div className='bg-[var(--gray)] py-6 flex flex-col px-4'>
                    <div className='grid grid-cols-2 gap-y-3 justify-center'>
                        <div className='border-2 border-white rounded-lg w-fit p-1'>
                            <p className='text-white Roboto-Bold'>
                                Blockchain Architect
                            </p>
                        </div>
                        <div className='border-2 border-white rounded-lg w-fit p-1'>
                            <p className='text-white Roboto-Bold'>
                                Algo Trader
                            </p>
                        </div>
                        <div className='border-2 border-white rounded-lg w-fit p-1'>
                            <p className='text-white Roboto-Bold'>
                                Front End Dev
                            </p>
                        </div>
                        <div className='border-2 border-white rounded-lg w-fit p-1'>
                            <p className='text-white Roboto-Bold'>
                                Solutions Engineer
                            </p>
                        </div>
                        <div className='border-2 border-white rounded-lg w-fit p-1'>
                            <p className='text-white Roboto-Bold'>
                                Community Manager
                            </p>
                        </div>
                        <div className='border-2 border-white rounded-lg w-fit p-1'>
                            <p className='text-white Roboto-Bold'>3D Artist</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
