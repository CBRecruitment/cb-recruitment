import { GetServerSideProps } from 'next';
import React from 'react';
import JobApplicationForm from '../../components/JobApplicationForm';
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
        <div className='bg-gray-900'>
            <div className='text-white h-full py-10 flex justify-between w-[70%] mx-auto'>
                <div key={jobData.id} className='w-[50%]'>
                    <div>
                        <p className='text-2xl text-[#1885E0]'>
                            {jobData.title}
                        </p>
                        <p className=''>{jobData.categories.data[0].name}</p>
                    </div>
                    <div className='mt-5 flex space-x-4'>
                        <p className='text-sm rounded-md border border-[#1885E0] p-2 hover:bg-[#1885E0] cursor-pointer'>
                            {/* Location */}
                            {jobData.customText12}
                        </p>
                        <p className='text-sm rounded-md border border-[#1885E0] p-2 hover:bg-[#1885E0] cursor-pointer'>
                            {/* Industry */}
                            {jobData.customText14}
                        </p>
                        {skills.map((skill: any) => (
                            <p
                                key={skill.id}
                                className='text-sm rounded-md border border-[#1885E0] p-2 hover:bg-[#1885E0] cursor-pointer'
                            >
                                {skill.name}
                            </p>
                        ))}
                    </div>
                    <div
                        className='text-white mt-10'
                        dangerouslySetInnerHTML={{
                            __html: jobData.description,
                        }}
                    />
                </div>
                <div className=''>
                    <JobApplicationForm id={props.id} />
                </div>
            </div>
        </div>
    );
};

export default job;
