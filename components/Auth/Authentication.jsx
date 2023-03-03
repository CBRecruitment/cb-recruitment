// import { useUser } from '@auth0/nextjs-auth0/client';
// import { BsPerson } from 'react-icons/bs';
// import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
// import { useState } from 'react';
// import UploadCVModal from '../Candidates/UploadCVModal';
// import styles from './Authentication.module.css';
// import clsx from 'clsx';

// export default function Authentication() {
//   const [open, setOpen] = useState(false);
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   if (user) {
//     return (
//       <div className='hidden md:flex '>
//         <div className=' text-white cursor-pointer w-32 flex justify-evenly items-center'>
//           <BsPerson size={25} />
//           <p className='text-[var(--orange)] capitalize text-lg'>
//             {user?.nickname}
//           </p>
//           <div onClick={() => setOpen(!open)} className='text-white'>
//             {open ? <FiChevronUp size={25} /> : <FiChevronDown size={25} />}
//           </div>
//           {open && (
//             <div className='absolute '>
//               <ul
//                 className={clsx(
//                   'flex flex-col items-center pb-0 absolute z-auto pl-0 bg top-[34px] w-[250px] h-fit right-[-60px] rounded-b-lg',
//                   styles.shadow
//                 )}
//               >
//                 <a
//                   className='w-full border-b-2 p-3 pl-3 hover:bg-[#4f5961]'
//                   href='/profile'
//                 >
//                   <li>
//                     <button>Profile</button>
//                   </li>
//                 </a>
//                 <li className='w-full border-b-2 p-3 pl-3 hover:bg-[#4f5961]'>
//                   <UploadCVModal />
//                 </li>
//                 <li className='w-full border-b-2 p-3 pl-3 hover:bg-[#4f5961]'>
//                   Post a job
//                 </li>
//                 <li className='w-full border-b-2 p-3 pl-3 hover:bg-[#4f5961]'>
//                   Saved jobs
//                 </li>
//                 <li className='w-full p-3 pl-3 hover:bg-[#4f5961] hover:rounded-b-lg'>
//                   <a href='/api/auth/logout'>
//                     <button>Logout</button>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   {
//     /* <a
//   href='/api/auth/logout'
//   className='border-2 px-5 p-[0.1rem] text-black rounded-full bg-[var(--orange)] hover:cursor-pointer hover:text-white hover:border-black'
// >
//   <button>Logout</button>
// </a> */
//   }

//   return (
//     <div className='hidden w-fit md:flex justify-center items-center'>
//       <a
//         href='/api/auth/login'
//         className='bg-[var(--orange)] px-6 py-1 rounded-lg border-2 border-white hover:cursor-pointer hover:text-white hover:border-black'
//       >
//         <button>Login</button>
//       </a>
//     </div>
//   );
// }
