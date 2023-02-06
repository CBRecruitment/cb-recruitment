import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import JobOpenings from '../components/JobOpenings';
import { GetServerSideProps } from 'next';
import { Job } from '../types';

const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

type SearchResponse = {
    total: number;
    start: number;
    count: number;
    data: Job[];
};

type Props = {
    searchResults: SearchResponse;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(
        `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills,employmentType,customText14,customText15,customText12,dateAdded&count=500&query=isOpen:1 AND isDeleted:0 AND NOT status:archive&BhRestToken=${BhRestToken}&sort=-dateAdded`
    );
    const searchResults: Props = await res.json();
    return { props: { searchResults } };
};

const CandidatesPage = ({ searchResults }: Props) => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex-grow bg-[var(--darkgray)] text-white pt-6'>
                <h1 className='text-4xl flex justify-center underline text-[var(--orange)]'>
                    Job Openings
                </h1>
                <SearchBar />
                <JobOpenings jobs={searchResults.data} />
            </div>
        </div>
    );
};

export default CandidatesPage;
