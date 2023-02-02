import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UploadCVModal from '../components/UploadCVModal';

const CompaniesPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex flex-col flex-grow justify-around items-center bg-[var(--cream)]'>
                <UploadCVModal />
            </div>
            <Footer />
        </div>
    );
};

export default CompaniesPage;
