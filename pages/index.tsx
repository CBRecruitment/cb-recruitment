import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import LearnMore from '../components/Home/LearnMore/LearnMore';
import CBRAcademy from '../components/Home/CBRAcademy/CBRAcademy';
import VideoProfessionals from '../components/Home/VideoProfessionals';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import CareerAdvice from '../components/Blog/CareerAdvice/CareerAdvice';
import Partners from '../components/Home/Partners/Partners';
import Footer from '../components/General/Footer/Footer';

type Props = {
  allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
  return (
    <div>
      <Hero />
      <Partners />
      <LearnMore />
      <CBRAcademy />
      <VideoProfessionals />
      <CareerAdvice posts={allPosts} />
      {/* <JobOpeningsHome jobs={searchResults.data} /> */}
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};

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
