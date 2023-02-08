import React from 'react';
import Navbar from '../components/Navbar';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import JobOpenings from '../components/JobOpenings';
import { GetServerSideProps } from 'next';
import { Job } from '../interfaces/types';
import router from 'next/router';

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

export const getServerSideProps: GetServerSideProps = async (req) => {
    const search =
        req.query.search === undefined ? '' : `AND title:${req.query.search}`;
    const res = await fetch(
        `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills,employmentType,customText14,customText15,customText12,dateAdded&count=500&query=isOpen:1 AND isDeleted:0 AND NOT status:archive ${search}&BhRestToken=${BhRestToken}&sort=-dateAdded`
    );
    const searchResults: Props = await res.json();
    return { props: { searchResults } };
};

const CandidatesPage = ({ searchResults }: Props) => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex-grow bg-[var(--darkgray)] text-white pt-6'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-4xl justify-center items-center underline text-[var(--orange)] inline'>
                        Job Openings
                    </h1>
                </div>
                <JobOpenings jobs={searchResults.data} />
            </div>
        </div>
    );
};

export default CandidatesPage;
