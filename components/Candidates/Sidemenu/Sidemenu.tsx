import { Input } from '@mui/material';
import React, { useState } from 'react';
import { BsSquare, BsCheckSquareFill } from 'react-icons/bs';
import JobCategory from './JobCategory/JobCategory';
import Salary from './Salary/Salary';
import styles from './Sidemenu.module.css';
import Industry from './Industry/Industry';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Location from './Location/Location';

const Sidemenu = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className='flex justify-center text-white h-full mt-0 p-2'>
      <div className='w-[260px] xsm:w-[350px] md:w-[250px] 2xl:w-[300px]'>
        <h2 className='pb-3 text-xl text-white'>Sort By</h2>
        <section className='flex justify-between'>
          <button className='border w-[46%] text-[17px] p-1 bg-[var(--orange)] rounded-md'>
            Relevance
          </button>
          <button className='border w-[46%] text-[17px] p-1 bg-white rounded-md text-black'>
            Date
          </button>
        </section>
        <section className='flex justify-start items-center pt-4'>
          <p>Remote Jobs Only</p>
          <label htmlFor='checkbox' className='flex'>
            <Input
              type='checkbox'
              onClick={handleChange}
              id='checkbox'
              style={{ opacity: 0 }}
            />
            {!checked && <BsSquare size={20} />}
            {checked && (
              <BsCheckSquareFill
                fill={'var(--orange)'}
                size={20}
                className={styles.checkbox}
              />
            )}
          </label>
        </section>
        <div className={styles.filters}>
          <JobCategory />
        </div>
        <div className={styles.filters}>
          <Skills />
        </div>
        <div className={styles.filters}>
          <Industry />
        </div>
        <div className={styles.filters}>
          <Experience />
        </div>
        <div className={styles.filters}>
          <Location />
        </div>
        <div className={styles.filters}>
          <Salary />
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
