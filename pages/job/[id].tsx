import React from 'react';
import { GetServerSideProps } from 'next';
import JobApplicationForm from '../../components/candidates/JobApplicationForm';
import Nav from '../../components/Navbar/Nav';
const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id }: any = params;
    const res = await fetch(
        `${BullhornUrl}/entity/JobOrder/${id}?fields=id,title,categories,skills,employmentType,customText12,customText14,description&BhRestToken=${BhRestToken}`
    );
    const data = await res.json();
    return { props: { data, id } };
};

const job = (props: any) => {
    const data = props.data;
    const jobData = data.data;
    const skills = jobData.skills.data;
    return (
        <div className='flex flex-col h-screen'>
            <Nav />
            <div className='bg-[var(--darkgray)] flex-grow'>
                <div className='text-white flex flex-col w-[90%] mx-auto'>
                    <div key={jobData.id}>
                        <div className='flex flex-col pt-8 pb-2'>
                            <p className='text-2xl text-[var(--orange)]'>
                                {jobData.title}
                            </p>
                            <p className=''>
                                {jobData.categories?.data[0]?.name}
                            </p>
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
                        </div>
                        <div>
                            <div className='flex justify-start space-x-3'>
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
                                className='text-white mt-10'
                                dangerouslySetInnerHTML={{
                                    __html: jobData?.description,
                                }}
                            />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <JobApplicationForm id={props.id} />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default job;
