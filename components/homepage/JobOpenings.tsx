import Link from 'next/link';
import { Job } from '../../interfaces/types';

const JobOpenings = () => {
    return (
        <div className='text-[14px] w-[340px] m-auto text-center grid grid-cols-2 gap-y-4 px-6 job-grid-container pb-12'>
            <div className='border-2 border-white rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                <p className='text-white Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                    Blockchain Architect
                </p>
            </div>
            <div className='border-2 border-white rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                <p className='text-white Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                    Algo Trader
                </p>
            </div>
            <div className='border-2 border-white rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                <p className='text-white Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                    Front End Dev
                </p>
            </div>
            <div className='border-2 border-white rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                <p className='text-white Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                    Solutions Engineer
                </p>
            </div>
            <div className='border-2 border-white rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                <p className='text-white Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                    Community Manager
                </p>
            </div>
            <div className='border-2 border-white rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                <p className='text-white Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                    3D Artist
                </p>
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
