import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import MeetTheTeam from '../components/AboutUs/MeetTheTeam';
import JobSearch from '../components/Candidates/JobSearch';
import Footer from '../components/General/Footer/Footer';
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
      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
