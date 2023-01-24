import Link from 'next/link';
import React from 'react';

const publicBullhornUrl = process.env.REACT_APP_PUBLIC_BULLHORN_URL;
const publicOpenJobEndpoint = `${publicBullhornUrl}/search/JobOrder?query=(isOpen:1)&count=10&sort=-dateAdded&start=0&fields==*`;

export async function getServerSideProps() {
    const res = await fetch(publicOpenJobEndpoint);
    const data = await res.json();
    return { props: { data } };
}

const companies = ({ data }: any) => {
    const results = data.data;

    return (
        <div className='bg-gray-900 text-white h-full py-10'>
            <h1 className='text-4xl flex justify-center underline text-[#1885E0]'>
                Job Openings - Public
            </h1>
            <div className='w-[60%] mx-auto'>
                <div>
                    {results.map((result: any) => {
                        // const skills = result.skills.data;
                        return (
                            <Link href={`/job/${result.id}`}>
                                <div
                                    key={result.id}
                                    className='mt-6 flex justify-between items-center py-5 border border-white px-5 rounded-md hover:bg-[#1885E0] hover:text-black hover:border-black'
                                >
                                    <div>
                                        <p className='text-2xl'>
                                            {result.title} - {result.id}
                                        </p>
                                        <p>{result.publishedCategory.name}</p>
                                        <p>{result.dateAdded}</p>
                                    </div>
                                    <div className='flex flex-row space-x-5'>
                                        {/* {skills.map((skill) => (
                      <p
                        key={skill.id}
                        className='text-sm rounded-md border border-blue-300 p-2'
                      >
                        {skill.name}
                      </p>
                    ))} */}
                                        {/* <p className='text-sm rounded-md border border-blue-300 p-2'>
                      {result.customText12}
                    </p>
                    <p className='text-sm rounded-md border border-blue-300 p-2'>
                      {result.customText14}
                    </p> */}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
        // <div className='bg-gray-900 text-white h-screen'>
        //   <h1 className='text-4xl flex justify-center py-2'>Job Board</h1>
        //   <div className='w-[60%] mx-auto'>
        //     <div>
        //       {results.map((result) => {
        //         return (
        //           <li key={result.id} className='flex space-x-4 text-xl'>
        //             <h1>{result.title}</h1>
        //             <p>{result.id}</p>
        //           </li>
        //         );
        //       })}
        //     </div>
        //   </div>
        // </div>
    );
};

export default companies;
