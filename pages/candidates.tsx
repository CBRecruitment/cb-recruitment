import React from 'react';
import { GetServerSideProps } from 'next';
import { Fields, Job, Options } from '../interfaces/types';
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

type OptionSearchResponse = {
  data: Options[];
};

type Props = {
  searchQuery: string;
  searchResults: SearchResponse;

  searchResults2: FieldsSearchResponse;
  searchResults3: OptionSearchResponse;
  searchResults4: OptionSearchResponse;
};

// customText14 = Industry
// customText15 = Salary Range
// customText12 = Location

export const getServerSideProps: GetServerSideProps = async (req) => {
  const search =
    req.query.search === undefined
      ? ''
      : `AND ((id:${req.query.search}* description:${req.query.search}* title:${req.query.search}* clientCorporation.name:${req.query.search}* clientContact.name:${req.query.search}* employmentType:${req.query.search}))`;

  const res1 = await fetch(
    `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills,employmentType,customText14,customText15,customText12,salary,dateAdded&count=100&query=isOpen:1 AND isDeleted:0 ${search} AND NOT status:archive&BhRestToken=${BhRestToken}&sort=-dateAdded`
  );
  const res2 = await fetch(
    `${BullhornUrl}/meta/JobOrder?fields=customText14,employmentType,customText15,customText10&BhRestToken=${BhRestToken}`
  );
  const res3 = await fetch(`${BullhornUrl}/options/Skill?count=300&BhRestToken=${BhRestToken}`);
  const res4 = await fetch(`${BullhornUrl}/options/Category?count=300&BhRestToken=${BhRestToken}`);
  const searchResults: Props = await res1.json();
  const searchResults2: Props = await res2.json();
  const searchResults3: Props = await res3.json();
  const searchResults4: Props = await res4.json();
  return { props: { searchResults, searchQuery: req.query.search || null, searchResults2, searchResults3, searchResults4 } };
};

const CandidatesPage = ({ searchResults, searchQuery, searchResults2, searchResults3, searchResults4 }: Props) => {
  return (
    <div className='bg'>
      <Nav />
      <JobOpenings
        jobs={searchResults.data}
        searchQuery={searchQuery}
        fields={searchResults2.fields}
        skills={searchResults3?.data}
        categories={searchResults4?.data}
      />
      <Footer />
    </div>
  );
};

export default CandidatesPage;

// : `AND (title:(+(${req.query.search}*)) OR employmentType:(+${req.query.search}*) OR customText14:(+${req.query.search}*) OR categories:(+${req.query.search}*) OR skills:(+${req.query.search}*))`;
