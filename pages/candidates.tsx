import React from 'react';

// const publicBullhornUrl = process.env.REACT_APP_PUBLIC_BULLHORN_URL;

// const publicOpenJobEndpoint = `${publicBullhornUrl}/search/JobOrder?query=(isOpen:1)&count=1&sort=-dateLastPublished&start=0&fields=id,title,publicDescription`;

// export async function getServerSideProps() {
//   const res = await fetch(publicOpenJobEndpoint);
//   const data = await res.json();
//   return { props: { data } };
// }

const candidates = ({}) => {
  // const results = data.data;
  // console.log(results);
  return (
    <div className='bg-gray-900 text-white h-screen'>
      {/* <h1 className='text-4xl flex justify-center py-2'>Job Board</h1>
      <div className='w-[60%] mx-auto'>
        <ul>
          {results.map((result) => {
            return (
              <li key={result.id} className='flex space-x-4 text-xl'>
                <h1>{result.title}</h1>
                <p>{result.id}</p>
                <p
                  dangerouslySetInnerHTML={{ __html: result.publicDescription }}
                ></p>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default candidates;
