import React from 'react';
import UploadCVModal from '../components/Candidates/UploadCVModal';

const CompaniesPage = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-[var(--darkgray)] pt-10 mx-auto flex-grow'>
                <h1 className='text-3xl text-[var(--orange)] text-center mb-6 px-5'>
                    Access top Talent in the Web3 Space
                </h1>
                <div className='space-y-10 px-8 mb-10 text-center text-white'>
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
                <div className='flex justify-center items-center pb-10'>
                    <UploadCVModal />
                </div>
                <hr />
            </div>
        </div>
    );
};

export default CompaniesPage;
