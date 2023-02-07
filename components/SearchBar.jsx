import Link from 'next/link';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'

const SearchBar = ({ jobs }) => {
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [jobEntered, setJobEntered] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setJobEntered(searchWord);
        const newFilter = jobs.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === "") {
            setFilteredJobs([]);
        } else {
        setFilteredJobs(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredJobs([]);
        setJobEntered("");
    }

    return (
        <div className='flex justify-center mb-10'>
            <div className='search'>
                <div className='mt-[40px] flex text-black'>
                    <input className='bg-white border-0 rounded-sm rounded-r-none text-[15px] p-[15px] h-[30px] w-[300px] focus:outline-none '
                        type='text'
                        placeholder='Search here...'
                        value={jobEntered}
                        onChange={handleFilter}
                    />
                    <div className='p-[2.5px] h-fit w-fit bg-white grid place-items-center '>
                        {filteredJobs.length === 0 ? <SearchIcon className='text-[25px] text-[var(--orange)]'/> : <CloseIcon className='text-[25px] text-[var(--orange)]' id="clearBtn" onClick={clearInput}/>}
                        
                    </div>
                </div>
                {filteredJobs.length != 0 && (
                    <div className='dataResult'>
                        {filteredJobs.slice(0,10).map((job) => {
                            return (
                                <Link
                                    className='dataItem'
                                    href={`/job/${job.id}`}
                                    key={job.id}
                                >
                                    <p>{job.title}</p>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;

{/* <div className='flex justify-center mb-10'>
            <div className='search'>
                <div className='mt-[40px] flex text-black'>
                    <input className='bg-white border-0 rounded-sm rounded-r-none text-[15px] p-[15px] h-[30px] w-[300px] focus:outline-none '
                        type='text'
                        placeholder='Search here...'
                        value={jobEntered}
                        onChange={handleFilter}
                    />
                    <div className='p-[2.5px] h-fit w-fit bg-white grid place-items-center '>
                        {filteredJobs.length === 0 ? <SearchIcon className='text-[25px] text-[var(--orange)]'/> : <CloseIcon className='text-[25px] text-[var(--orange)]' id="clearBtn" onClick={clearInput}/>}
                        
                    </div>
                </div>
                {filteredJobs.length != 0 && (
                    <div className='dataResult'>
                        {filteredJobs.slice(0,10).map((job) => {
                            return (
                                <Link
                                    className='dataItem'
                                    href={`/job/${job.id}`}
                                    key={job.id}
                                >
                                    <p>{job.title}</p>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div> */}