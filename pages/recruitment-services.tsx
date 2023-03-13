import React from 'react';
import JobSearch from '../components/Candidates/JobSearch';
import Footer from '../components/General/Footer/Footer';
import Nav from '../components/Navbar/Nav';
import CaseStudies from '../components/RecruitmentServices/CaseStudies';
import MeetTheTeam from '../components/RecruitmentServices/MeetTheTeam';
import Newsletter from '../components/RecruitmentServices/Newsletter';
import Services from '../components/RecruitmentServices/Services';

type Props = {
  searchQuery: string;
};

const RecruitmentServicesPage = ({ searchQuery }: Props) => {
  return (
    <div>
      <Nav />
      <JobSearch searchQuery={searchQuery} />
      <Services />
      <Newsletter />
      <CaseStudies />
      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default RecruitmentServicesPage;
