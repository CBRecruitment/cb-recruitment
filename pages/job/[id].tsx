import React from 'react';
import { GetServerSideProps } from 'next';
import JobApplicationForm from '../../components/Candidates/JobApplicationForm';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/General/Footer/Footer';
import clsx from 'clsx';
import styles from './job.module.css';
import router from 'next/router';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id }: any = params;
  const res = await fetch(
    `${BullhornUrl}/entity/JobOrder/${id}?fields=id,title,categories,skills,employmentType,customText12,customText14,publicDescription&BhRestToken=${BhRestToken}`
  );
  const data = await res.json();
  return { props: { data, id } };
};

const job = (props: any) => {
  const data = props.data;
  const jobData = data.data;
  const skills = jobData.skills.data;

  return (
    <>
      <div className='flex flex-col h-screen'>
        <Nav />
        <div className='gray_bg flex-grow pb-10'>
          <div className='text-white flex flex-col md:flex-row w-[90%] lg:w-[80%] xl:w-[80%] m-auto'>
            <div key={jobData.id} className='md:w-[55%] lg:w-[50%]'>
              <button
                className='pb-4'
                onClick={() => {
                  router.back();
                }}
              >
                <KeyboardReturnIcon className='text-[50px] text-[var(--orange)] hover:text-white relative top-[30px]' />
              </button>
              <div className='flex flex-col pt-8 pb-2'>
                <p className='text-3xl text-[var(--orange)]'>{jobData.title}</p>
                <p className=''>{jobData.categories?.data[0]?.name}</p>
              </div>
              <div className='flex justify-start space-x-3 pb-2 pt-3'>
                <p className='text-sm rounded-md border border-[var(--orange)] px-6 py-1  hover:bg-[var(--orange)] cursor-pointer'>
                  {/* Location */}
                  {jobData?.customText12}
                </p>
                <p className='text-sm rounded-md border border-[var(--orange)] px-6 py-1  hover:bg-[var(--orange)] cursor-pointer'>
                  {/* Industry */}
                  {jobData?.customText14}
                </p>
                {skills.map((skill: any) => (
                  <p
                    key={skill.id}
                    className='hidden xl:flex text-sm rounded-md border border-[var(--orange)] px-6 py-1 hover:bg-[var(--orange)] cursor-pointer'
                  >
                    {skill.name}
                  </p>
                ))}
              </div>
              <div>
                <div className='flex justify-start space-x-3 xl:hidden'>
                  {skills.map((skill: any) => (
                    <p
                      key={skill.id}
                      className='text-sm rounded-md border border-[var(--orange)] px-6 py-1 hover:bg-[var(--orange)] cursor-pointer'
                    >
                      {skill.name}
                    </p>
                  ))}
                </div>

                <div
                  className={clsx('text-white mt-10 !font-sans space-y-3', styles.jobdescription)}
                  dangerouslySetInnerHTML={{
                    __html: jobData?.publicDescription,
                  }}
                />
              </div>
            </div>
            <div className='mt-10 m-auto md:mt-28 md:pl-24'>
              <JobApplicationForm id={props.id} />
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default job;
