import React from 'react';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

export default function companies() {
    return (
        <>
            <Navbar />
            <div className='flex justify-center h-full bg-gray-900 text-white'>
                <div className='h-[90vh] pt-10'>
                    <Modal />
                </div>
            </div>
        </>
    );
}
