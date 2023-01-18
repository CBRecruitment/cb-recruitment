import Link from 'next/link';
import React from 'react';
const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

const openJobEndpoint = `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills,employmentType,customText14,customText12&count=20&start=0&query=isOpen:1 AND isDeleted:0 AND NOT status:archive&BhRestToken=${BhRestToken}&sort=-dateLastPublished`;

export async function getServerSideProps() {
  const res = await fetch(openJobEndpoint);
  const data = await res.json();
  return { props: { data } };
}

const clients = ({ data }) => {
  const results = data.data;
  return (
    <div className='bg-gray-900 text-white h-full py-10'>
      <h1 className='text-4xl flex justify-center underline text-[#1885E0]'>
        Job Openings
      </h1>
      <div className='w-[60%] mx-auto'>
        <div>
          {results.map((result) => {
            const skills = result.skills.data;
            return (
              <Link href={`/job/${result.id}`}>
                <div
                  key={result.id}
                  className='mt-6 flex justify-between items-center py-5 border border-white px-5 rounded-md hover:bg-[#1885E0] hover:text-black hover:border-black'
                >
                  <div>
                    <p className='text-2xl'>{result.title}</p>
                    <p className=''>{result.categories.data[0].name}</p>
                  </div>
                  <div className='flex flex-row space-x-5'>
                    {skills.map((skill) => (
                      <p
                        key={result.id}
                        className='text-sm rounded-md border border-blue-300 p-2'
                      >
                        {skill.name}
                      </p>
                    ))}
                    <p className='text-sm rounded-md border border-blue-300 p-2'>
                      {result.customText12}
                    </p>
                    <p className='text-sm rounded-md border border-blue-300 p-2'>
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

export default clients;

{
  /* <p dangerouslySetInnerHTML={{ __html: result.description }} /> */
}
