import React, { useState } from 'react';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className='bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                type='button'
                onClick={() => setShowModal(true)}
            >
                Upload your CV
            </button>
            {showModal ? (
                <>
                    <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none'>
                                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                                    <h3 className='text-3xl font=semibold'>
                                        Upload your CV
                                    </h3>
                                    <button
                                        className='bg-transparent border-0 text-black float-right'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className='text-black opacity-7 h-7 w-7 rounded-full text-xl block bg-gray-400'>
                                            x
                                        </span>
                                    </button>
                                </div>

                                <div className='relative p-6 flex-auto'>
                                    <form
                                        className='bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 w-full'
                                        action='/api/uploadcvform'
                                        method='post'
                                        // encType='multipart/form-data'
                                    >
                                        <label
                                            htmlFor='fullname'
                                            className='block text-sm font-bold mb-2'
                                        >
                                            Full Name
                                            <input
                                                type='text'
                                                id='fullname'
                                                name='fullname'
                                                required
                                                className='shadow appearance-none border rounded w-full py-2 px-1 text-black'
                                            />
                                        </label>
                                        <label
                                            htmlFor='email'
                                            className='block text-sm font-bold mb-2'
                                        >
                                            Email Address
                                            <input
                                                type='text'
                                                id='email'
                                                name='email'
                                                required
                                                className='shadow appearance-none border rounded w-full py-2 px-1 text-black'
                                            />
                                        </label>
                                        <label
                                            htmlFor='message'
                                            className='block text-sm font-bold mb-2'
                                        >
                                            Message
                                            <textarea
                                                id='message'
                                                name='message'
                                                placeholder='Your cover letter/message sent to the employer'
                                                className='shadow appearance-none border rounded w-full py-2 px-1 text-black'
                                            />
                                        </label>
                                        <label
                                            htmlFor='cv'
                                            className='block text-sm font-bold mb-2'
                                        >
                                            Upload CV
                                            <input
                                                type='file'
                                                id='cv'
                                                name='cv'
                                                required
                                                className='font-normal w-full pl-4 mt-2'
                                            />
                                            <small className='inline-block mt-4 text-center text-gray-400'>
                                                Upload your CV/Resume, Max file
                                                size: 128 MB.
                                            </small>
                                        </label>
                                        <button
                                            className='border-2 border-white bg-yellow-500 text-black rounded-md p-2 w-[80%] mx-auto font-bold mt-4'
                                            type='submit'
                                        >
                                            Send Application
                                        </button>
                                    </form>
                                </div>

                                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                                    <button
                                        className='text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 border-white border'
                                        type='button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className='text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                                        type='button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;
