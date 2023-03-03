import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import JobSearch from '../components/Candidates/JobSearch';
import Nav from '../components/Navbar/Nav';

type Props = {
  searchQuery: string;
};

const AboutUsPage = ({ searchQuery }: Props) => {
  return (
    <div>
      <Nav />
      <JobSearch searchQuery={searchQuery} />
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
