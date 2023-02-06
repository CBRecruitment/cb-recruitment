import Image from 'next/image';
import React, { useState } from 'react';

const SearchBar = () => {
    const [searchBar, setSearchBar] = useState('');

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchBar(e.currentTarget.value);
    };

    return (
        <div className='flex justify-center items-center cursor-pointer w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] xl:w-[20%] mx-auto my-6 mb-10'>
            <input
                className='search-bar'
                type='search'
                onChange={handleChange}
            />
            <button className='search-btn'>
                {' '}
                <Image
                    className='search-btn-img'
                    src={'/assets/search-orange.png'}
                    alt='Search button'
                    width={20}
                    height={20}
                />
            </button>
        </div>
    );
};

export default SearchBar;
