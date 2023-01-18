import React from 'react';

const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

const openJobEndpoint = `${BullhornUrl}/search/JobOrder?fields=id,title,categories,skills&count=10&start=0&query=isOpen:1 AND isDeleted:0 AND NOT status:archive&BhRestToken=${BhRestToken}&sort=-dateLastPublished`;

export async function getServerSideProps() {
  const res = await fetch(openJobEndpoint);
  const data = await res.json();
  return { props: { data } };
}

const candidates = ({ data }) => {
  const results = data.data;

  // console.log(results);

  return (
    <div className='bg-gray-900 text-white h-full py-10'>
      <h1 className='text-4xl flex justify-center underline'>Job Openings</h1>
      <div className='w-[60%] mx-auto'>
        <div>
          {results.map((result) => {
            const skills = result.skills.data;
            return (
              <div
                key={result.id}
                className='mt-6 flex justify-between items-center py-5 border border-white px-5 rounded-md'
              >
                <div>
                  <a className='text-3xl' target='_blank'>
                    {result.title}
                  </a>
                  <p className=''>{result.categories.data[0].name}</p>
                </div>
                <div className='flex flex-row space-x-5'>
                  {skills.map((skill) => (
                    <p className='rounded-md border border-blue-300 p-2 hover'>
                      {skill.name}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default candidates;

{
  /* <p dangerouslySetInnerHTML={{ __html: result.description }} /> */
}
