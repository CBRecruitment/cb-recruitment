import React from 'react';

const JobApplicationForm = ({ id }: any) => {
    return (
        <div className='w-[70%] ml-auto bg-blue-500 border-white rounded-md border-4 text-black font-medium py-5 '>
            <form
                className='flex flex-col w-[80%] mx-auto'
                action='/api/jobapplicationform'
                method='post'
                encType='multipart/form-data'
            >
                <input type='hidden' name='id' value={id} />
                <h1 className='text-2xl mb-3 flex justify-center'>
                    Job Application Form
                </h1>
                <fieldset className='p-2 min-w-full text-left mb-2 block'>
                    <label htmlFor='firstname'>
                        <p className='mb-2'>First name</p>
                        <input
                            type='text'
                            id='firstname'
                            name='firstname'
                            required
                            className='px-4 py-1 w-full text-black font-medium'
                        />
                    </label>
                </fieldset>
                <fieldset className='p-2 min-w-full text-left mb-2 block'>
                    <label htmlFor='lastname'>
                        <p className='mb-2'>Last name</p>
                        <input
                            type='text'
                            id='lastname'
                            name='lastname'
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
    );
};

export default JobApplicationForm;

/* <fieldset className="p-2 min-w-full text-left mb-2">
          <label>
            <p className="mb-2">How did you hear about us?</p>
            <select value={source} onChange={handleChange} className="p-2 min-w-full text-black">
              <option value="CV-Library">CV-Library</option>
              <option value="Lunar Strategies">Lunar Strategies</option>
              <option value="In Person">In Person</option>
              <option value="Telegram">Telegram</option>
              <option value="Github">Github</option>
              <option value="Twitter">Twitter</option>
              <option value="Discord">Discord</option>
              <option value="Events">Events</option>
              <option value="Application">Application</option>
              <option value="Partnerships">Partnerships</option>
              <option value="Coin Bureau">Coin Bureau</option>
              <option value="Team">Team</option>
              <option value="Referral">Referral</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="CBRecruitment.com">CBRecruitment.com</option>
            </select>
          </label>
        </fieldset> */
/* <fieldset className="p-2 min-w-full text-left mb-2">
          <label>
            <p className="mb-2">Have you completed the Lunar Academy Web3 Marketing Course?</p>
            <select value={source} onChange={handleChange} className="p-2 min-w-full text-black">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </fieldset> */
/* <fieldset className="p-2 min-w-full text-left mb-2">
          <label>
            <p className="mb-4">Upload Course Certificate</p>
            <input type="file" className="flex mx-auto font-normal" />
            <small className="inline-block mt-4 text-center text-gray-900">
              Upload your certificate from the Lunar Academy course. Max file size: 128 MB.
            </small>
          </label>
        </fieldset> */
