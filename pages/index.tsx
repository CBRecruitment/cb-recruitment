import React from 'react';
import Hero from '../components/homepage/Hero';
import LearnMore from '../components/homepage/LearnMore';
import Partners from '../components/homepage/Partners';
import CBRAcademy from '../components/homepage/CBRAcademy';
import VideoProfessionals from '../components/homepage/VideoProfessionals';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import CareerAdvice from '../components/blog/home/career-advice';
import Footer from '../components/Footer';
import Nav from '../components/Navbar/Nav';

type Props = {
    allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
    return (
        <div className='md:flex md:flex-col md:h-screen'>
            <Nav />
            <Hero />
            <Partners />
            <LearnMore />
            <CBRAcademy />
            <VideoProfessionals />
            <CareerAdvice posts={allPosts} />
            <Footer />
            {/* <JobOpeningsHome jobs={searchResults.data} /> */}
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
