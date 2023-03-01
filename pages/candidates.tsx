import React from 'react';
import { GetServerSideProps } from 'next';
import { Job } from '../interfaces/types';
import JobOpenings from '../components/Candidates/JobOpenings';
import Nav from '../components/Navbar/Nav';

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
  searchQuery: string;
};

export const getServerSideProps: GetServerSideProps = async (req) => {
  const search =
    req.query.search === undefined ? '' : `AND title:${req.query.search}`;
  const res = await fetch(
    `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills,employmentType,customText14,customText15,customText12,dateAdded&count=500&query=isOpen:1 AND isDeleted:0 AND NOT status:archive ${search}&BhRestToken=${BhRestToken}&sort=-dateAdded`
  );
  const searchResults: Props = await res.json();
  return { props: { searchResults, searchQuery: req.query.search || null } };
};

const CandidatesPage = ({ searchResults, searchQuery }: Props) => {
  return (
    <div className='gray_bg'>
      <Nav />
      <JobOpenings jobs={searchResults.data} searchQuery={searchQuery} />
    </div>
  );
};

export default CandidatesPage;
