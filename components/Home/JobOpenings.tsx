import { useEffect, useState } from 'react';

const jobs = [
  'Blockchain Architect',
  'Solutions Engineer',
  'Front End Dev',
  'Algo Trader',
  'Community Manager',
  '3D Artist',
];

// const jobs2 = [
//   'Marketing Manager',
//   'Senior Developer',
//   'Investor Relations',
//   'Rust Engineer',
//   'Smart Contract Dev',
//   'Chief of Finance',
// ];

const JobOpenings = () => {
  return (
    <div className='text-[14px] w-[320px] md:w-[600px] xl:w-[900px] pb-10 xl:pb-24 m-auto flex justify-center'>
      <div className='grid grid-cols-3 gap-2'>
        {jobs.map((job, idx) => (
          <div className='w-full py-1' key={idx}>
            <div className='border-2 border-white rounded-lg p-1 text-center w-full'>
              <p className='text-white whitespace-nowrap text-ellipsis overflow-hidden text-sm'>
                {job}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpenings;

// type Props = {
//     jobs: Job[];
// };

// const JobOpeningsHome = ({ jobs }: Props) => {
//     return (
//         // <div className='bg-[var(--gray)] py-6 flex flex-col space-y-2 px-4'>
//         //     {jobs?.map((job) => {
//         //         return (
//         //             <Link href={`/job/${job.id}`} key={job.id}>
//         //                 <div className='border-2 border-white rounded-lg w-fit p-1'>
//         //                     <p className='text-white Roboto-Bold'>
//         //                         {job.title}
//         //                     </p>
//         //                 </div>
//         //             </Link>
//         //         );
//         //     })}
//         // </div>
//     );
// };

// export default JobOpeningsHome;
