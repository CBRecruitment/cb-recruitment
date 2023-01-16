import React from "react";

const CVUpload = () => {
  return (
    <div className='bg-blue-500 border-white border-4 w-[50%] text-black font-medium py-5 max-h-[70%] flex justify-center my-10'>
      <form className='flex flex-col w-[90%] mx-auto' action='/api/cvupload' method='post' encType='multipart/form-data'>
        <h1 className='text-2xl mb-3 flex justify-center'>Upload your CV</h1>
        <fieldset className='p-2 min-w-full text-left mb-2 block'>
          <label htmlFor='name'>
            <p className='mb-2'>Name</p>
            <input type='text' id='name' name='name' required className='px-4 py-1 w-full text-black font-medium' />
          </label>
        </fieldset>
        <fieldset className='p-2 min-w-full text-left mb-2 block'>
          <label htmlFor='name'>
            <p className='mb-2'>Subject</p>
            <input type='text' id='subject' name='subject' required className='px-4 py-1 w-full text-black font-medium' />
          </label>
        </fieldset>
        <fieldset className='p-2 min-w-full text-left mb-2'>
          <label htmlFor='email'>
            <p className='mb-2'>Email address</p>
            <input type='text' id='email' name='email' required className='px-4 py-1 w-full text-black font-medium' />
          </label>
        </fieldset>
        <fieldset className='p-2 min-w-full text-left mb-2'>
          <label htmlFor='cv'>
            <p className='mb-3'>Upload CV</p>
            <input type='file' id='cv' name='cv' required className='font-normal w-full pl-4' />
            <small className='inline-block mt-4 text-center text-gray-900'>
              Upload your CV/Resume, Max file size: 128 MB.
            </small>
          </label>
        </fieldset>
        <button className='border-2 border-black bg-white rounded-md p-2 w-[80%] mx-auto font-bold mt-4' type='submit'>
          Send Application
        </button>
      </form>
    </div>
  );
};

export default CVUpload;
