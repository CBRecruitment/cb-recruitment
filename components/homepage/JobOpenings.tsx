const JobOpenings = () => {
    return (
        <div className='text-[14px] w-[320px] pb-10 m-auto'>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <div className='border-2 border-[var(--cream)] rounded-lg p-1 w-fit items-center m-auto max-w-[160px]'>
                        <p className='text-[#ffffffc8] Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                            Blockchain Architect
                        </p>
                    </div>
                    <div className='border-2 border-[var(--cream)] rounded-lg p-1 w-fit m-auto max-w-[160px]'>
                        <p className='text-[#ffffffc8] Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                            Algo Trader
                        </p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='border-2 border-[var(--cream)] rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                        <p className='text-[#ffffffc8] Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                            Front End Dev
                        </p>
                    </div>
                    <div className='border-2 border-[var(--cream)] rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                        <p className='text-[#ffffffc8] Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                            Solutions Engineer
                        </p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='border-2 border-[var(--cream)] rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                        <p className='text-[#ffffffc8] Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                            Community Manager
                        </p>
                    </div>
                    <div className='border-2 border-[var(--cream)] rounded-lg p-1 w-fit flex items-center jobs m-auto max-w-[160px]'>
                        <p className='text-[#ffffffc8] Roboto-Bold whitespace-nowrap text-ellipsis overflow-hidden'>
                            3D Artist
                        </p>
                    </div>
                </div>
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
