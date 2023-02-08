import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UploadCVModal from '../components/UploadCVModal';

const CompaniesPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex flex-col flex-grow justify-around items-center bg-[var(--cream)] py-6'>
                <h1 className='text-4xl text-[var(--orange)] mb-6'>
                    Access top Talent in the Web3 Space
                </h1>
                <div className='max-w-6xl space-y-6 mb-10'>
                    <p>
                        Made up of a team with over 40 years' experience in
                        recruitment, we are committed to becoming the industry's
                        most trusted recruiter. Our people are at the core of
                        what we do and our consultants are experts in recruiting
                        positions across businesses in the crypto and blockchain
                        space, including Web 3.0, DeFi, Metaverse, VC and Mutual
                        Funds, NFT, GameFi and more .
                    </p>
                    <p>
                        There has never been a more important time to ensure you
                        can beat your competition to market leading Web3
                        specific blockchain and crypto talent. Entrepreneurial
                        growth across this bleeding edge technology sector,
                        backed by millions in VC funding has left the demand for
                        Web3 builders and sellers at an all time high.
                    </p>
                    <p>
                        You arrived on this page because it is likely you are
                        looking to take advantage of the ongoing crypto boom and
                        blockchain revolution. You have come to the right place.
                    </p>
                    <p>
                        CB Recruitment is the only pure-play Web3 specific
                        talent acquisition offering that is supported by an
                        industry leading influencer and educator, The Coin
                        Bureau.
                    </p>
                    <p>
                        Our insight, influence and leverage is unmatched. Our
                        ability to offer services that go above and beyond the
                        typical recruitment process is unparalleled.
                    </p>
                </div>
                <UploadCVModal />
            </div>
            <Footer />
        </div>
    );
};

export default CompaniesPage;
