import { GetServerSideProps } from 'next';
import React from 'react';

const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params;
  const res = await fetch(
    `${BullhornUrl}/entity/JobOrder/${id}?fields=id,title,categories,skills,employmentType,customText12,customText14,description&BhRestToken=${BhRestToken}`
  );
  return { props: { data: await res.json() } };
};

const job = (data: { data: any }) => {
  const job = data.data;
  const skills = job.skills.data;
  console.log(job);

  return (
    <div className='bg-gray-900'>
      <div className='text-white h-full py-10 flex justify-between w-[80%] mx-auto'>
        <div key={job.id} className='w-[50%]'>
          <div>
            <p className='text-2xl text-[#1885E0]'>{job.title}</p>
            <p className=''>{job.categories.data[0].name}</p>
          </div>
          <div className='mt-5 flex space-x-4'>
            <p className='text-sm rounded-md border border-[#1885E0] p-2 text-[#1885E0]'>
              {job.customText12}
            </p>
            <p className='text-sm rounded-md border border-[#1885E0] p-2 text-[#1885E0]'>
              {job.customText14}
            </p>
            {skills.map(
              (skill: {
                name:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <p
                  key={job.id}
                  className='text-sm rounded-md border border-[#1885E0] p-2 text-[#1885E0]'
                >
                  {skill.name}
                </p>
              )
            )}
          </div>
          <div
            className='mt-10 space-y-5'
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>
        <div className=''>
          <form
            className='flex flex-col w-[70%] mx-auto  mt-20 bg-[#1885E0] border-white border rounded-md p-6'
            action='/api/form'
            method='post'
            encType='multipart/form-data'
          >
            <h1 className='text-2xl mb-3 flex justify-center'>Apply now</h1>
            <fieldset className='p-2 min-w-full text-left mb-2 block'>
              <label htmlFor='fullname'>
                <p className='mb-2'>Full name</p>
                <input
                  type='text'
                  id='fullname'
                  name='fullname'
                  required
                  className='px-4 py-1 w-full text-black font-medium'
                />
              </label>
            </fieldset>
            <fieldset className='p-2 min-w-full text-left mb-2'>
              <label htmlFor='email'>
                <p className='mb-2'>Email address</p>
                <input
                  type='text'
                  id='email'
                  name='email'
                  required
                  className='px-4 py-1 w-full text-black font-medium'
                />
              </label>
            </fieldset>
            <fieldset className='p-2 min-w-full text-left mb-2'>
              <label htmlFor='message'>
                <p className='mb-2'>Message</p>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Your cover letter/message sent to the employer'
                  className='w-full p-3 text-black font-medium text-xs'
                />
              </label>
            </fieldset>
            <fieldset className='p-2 min-w-full text-left mb-2'>
              <label htmlFor='cv'>
                <p className='mb-3'>Upload CV</p>
                <input
                  type='file'
                  id='cv'
                  name='cv'
                  required
                  className='font-normal w-full pl-4'
                />
                <small className='inline-block mt-4 text-center text-gray-900'>
                  Upload your CV/Resume, Max file size: 128 MB.
                </small>
              </label>
            </fieldset>
            <button
              className='border-2 border-black rounded-md p-2 w-[80%] mx-auto font-bold mt-4 hover:bg-white hover:text-black'
              type='submit'
            >
              Send Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default job;
