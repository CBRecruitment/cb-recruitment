import React from 'react';
import { GetServerSideProps } from 'next';
import { Fields, Job } from '../interfaces/types';
import JobOpenings from '../components/Candidates/JobOpenings';
import Nav from '../components/Navbar/Nav';
import Footer from '../components/General/Footer/Footer';

const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

type SearchResponse = {
  total: number;
  start: number;
  count: number;
  data: Job[];
};

type FieldsSearchResponse = {
  entity: string;
  entityMetaUrl: string;
  label: string;
  dateLastModified: string;
  fields: Fields[];
};

type Props = {
  searchResults: SearchResponse;
  searchQuery: string;
  searchResults2: FieldsSearchResponse;
};

// customText14 = Industry
// customText15 = Salary Range
// customText12 = Location

export const getServerSideProps: GetServerSideProps = async (req) => {
  const search = req.query.search === undefined ? '' : `AND customText14:${req.query.search}*`;
  const res1 = await fetch(
    `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills,employmentType,customText14,customText15,customText12,salary,dateAdded&count=100&query=isOpen:1 AND isDeleted:0 AND NOT status:archive ${search}&BhRestToken=${BhRestToken}&sort=-dateAdded`
  );
  const res2 = await fetch(`${BullhornUrl}/meta/JobOrder?fields=customText14&BhRestToken=${BhRestToken}`);
  const searchResults: Props = await res1.json();
  const searchResults2: Props = await res2.json();
  return { props: { searchResults, searchQuery: req.query.search || null, searchResults2 } };
};

const CandidatesPage = ({ searchResults, searchQuery, searchResults2 }: Props) => {
  return (
    <div className='bg'>
      <Nav />
      <JobOpenings jobs={searchResults.data} searchQuery={searchQuery} fields={searchResults2.fields} />
      <Footer />
    </div>
  );
};

export default CandidatesPage;
