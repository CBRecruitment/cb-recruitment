import React, { useState } from 'react';

const JobApplicationForm = ({ id }: any) => {
  const [source, setSource] = useState('');
  const [course, setCourse] = useState('');

  return (
    <div className='w-full mx-auto bg-[var(--gray)] border-white rounded-md border-4 text-white font-medium py-5'>
      <form
        className='flex flex-col w-[90%] mx-auto'
        action='/api/jobapplicationform'
        method='post'
        encType='multipart/form-data'
      >
        <input type='hidden' name='id' value={id} />
        <h1 className='text-2xl mb-3 flex justify-center text-[var(--orange)]'>
          Job Application Form
        </h1>
        <fieldset className='p-2 min-w-full text-left mb-1 block'>
          <label htmlFor='firstname'>
            <p className='mb-2'>First name</p>
            <input
              type='text'
              id='firstname'
              name='firstname'
              required
              className='px-4 py-2 w-full text-black font-medium rounded-md text-sm'
            />
          </label>
        </fieldset>
        <fieldset className='p-2 min-w-full text-left mb-1 block'>
          <label htmlFor='lastname'>
            <p className='mb-2'>Last name</p>
            <input
              type='text'
              id='lastname'
              name='lastname'
              required
              className='px-4 py-2 w-full text-black font-medium rounded-md text-sm'
            />
          </label>
        </fieldset>
        <fieldset className='p-2 min-w-full text-left mb-1'>
          <label htmlFor='email'>
            <p className='mb-2'>Email address</p>
            <input
              type='text'
              id='email'
              name='email'
              required
              className='px-4 py-2 w-full text-black font-medium rounded-md text-sm'
            />
          </label>
        </fieldset>
        <fieldset className='p-2 min-w-full text-left mb-1'>
          <label htmlFor='message'>
            <p className='mb-2'>Message</p>
            <textarea
              id='message'
              name='message'
              placeholder='Your cover letter/message sent to the employer'
              className='w-full p-3 text-black font-medium rounded-md text-sm'
            />
          </label>
        </fieldset>
        <fieldset className='p-2 min-w-full text-left mb-1'>
          <p className='mb-2'>How did you hear about us?</p>
          <select
            className='p-2 min-w-full text-black rounded-md text-md'
            onChange={(e) => setSource(e.target.value)}
            name='source'
            required
          >
            <option value='CV-Library'>CV-Library</option>
            <option value='Lunar Strategies'>Lunar Strategies</option>
            <option value='In Person'>In Person</option>
            <option value='Telegram'>Telegram</option>
            <option value='Github'>Github</option>
            <option value='Twitter'>Twitter</option>
            <option value='Discord'>Discord</option>
            <option value='Events'>Events</option>
            <option value='Application'>Application</option>
            <option value='Partnerships'>Partnerships</option>
            <option value='Coin Bureau'>Coin Bureau</option>
            <option value='Team'>Team</option>
            <option value='Referral'>Referral</option>
            <option value='LinkedIn'>LinkedIn</option>
            <option value='CBRecruitment.com'>CBRecruitment.com</option>
          </select>
        </fieldset>
        {source === 'Lunar Strategies' ? (
          <fieldset className='p-2 min-w-full text-left mb-2'>
            <p className='mb-2'>
              Have you completed the Lunar Academy Web3 Marketing Course?
            </p>

            <label>
              <input
                type='radio'
                name='radio'
                value='yes'
                className='ml-4'
                onChange={(e) => setCourse(e.target.value)}
              />
              Yes
            </label>

            <label>
              <input
                type='radio'
                name='radio'
                value='no'
                className='ml-4'
                onChange={(e) => setCourse(e.target.value)}
              />
              No
            </label>
          </fieldset>
        ) : (
          ''
        )}
        <fieldset className='p-2 min-w-full text-left mb-2'>
          <label htmlFor='cv'>
            <p className='mb-3'>Upload CV</p>
            <input
              type='file'
              id='cv'
              name='cv'
              required
              className='font-normal w-full pl-2 pt-1'
            />
          </label>
        </fieldset>
        {course == 'yes' ? (
          <fieldset className='p-2 min-w-full text-left mb-2'>
            <label htmlFor='courseCertificate'>
              <p className='mb-3'>Upload Course Cerificate</p>
              <input
                type='file'
                id='courseCertificate'
                name='courseCertificate'
                required
                className='font-normal w-full pl-2'
              />
            </label>
          </fieldset>
        ) : (
          ''
        )}
        <button
          className='border-2 border-black rounded-md p-2 w-[95%] mx-auto font-bold mt-4 bg-[var(--orange)] hover:text-black'
          type='submit'
        >
          Send Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
