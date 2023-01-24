import React from 'react';
import Link from 'next/link';

const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

// QUERY - AND isDeleted:0 AND NOT status:archive

export async function getServerSideProps() {
    const res = await fetch(
        `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills,employmentType,customText14,customText12,dateAdded&count=10&start=0&query=isOpen:1&BhRestToken=${BhRestToken}&sort=-dateAdded`
    );
    const data = await res.json();
    return { props: { data } };
}

const candidates = ({ data }: any) => {
    const results = data.data;
    return (
        <div className='bg-gray-900 text-white h-full py-10'>
            <h1 className='text-4xl flex justify-center underline text-[#1885E0]'>
                Job Openings
            </h1>
            <div className='w-[60%] mx-auto'>
                <div>
                    {results.map((result: any) => {
                        const skills = result.skills.data;
                        return (
                            <Link href={`/job/${result.id}`}>
                                <div
                                    key={result.id}
                                    className='mt-6 flex justify-between items-center py-5 border border-white px-5 rounded-md hover:bg-gray-700'
                                >
                                    <div>
                                        <p className='text-2xl text-[#1885E0]'>
                                            {result.title}
                                        </p>
                                        <p>{result.categories.data[0].name}</p>
                                        {/* <p>{result.dateAdded}</p> */}
                                    </div>
                                    <div className='flex flex-row space-x-5'>
                                        {skills.map((skill: any) => (
                                            <p
                                                key={skill.id}
                                                className='text-sm rounded-md border border-blue-600 p-2 hover:bg-[#1885E0]'
                                            >
                                                {skill.name}
                                            </p>
                                        ))}
                                        <p className='text-sm rounded-md border border-blue-600 p-2 hover:bg-[#1885E0]'>
                                            {result.customText12}
                                        </p>
                                        <p className='text-sm rounded-md border border-blue-600 p-2 hover:bg-[#1885E0]'>
                                            {result.customText14}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default candidates;
