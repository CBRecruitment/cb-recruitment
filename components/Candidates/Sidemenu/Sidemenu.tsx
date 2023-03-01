import { Input } from '@mui/material';
import React, { useState } from 'react';
import { BsSquare, BsCheckSquareFill } from 'react-icons/bs';
import ContractType from './ContractType/ContractType';
import EmploymentType from './EmploymentType/EmploymentType';
import Salary from './Salary/Salary';
import styles from './Sidemenu.module.css';

const Sidemenu = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className='hidden md:flex  text-white h-full mt-0 p-2'>
      <form className='w-[250px]'>
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
        <div className='text-black pt-4'>
          <EmploymentType />
        </div>
        <div className='text-black pt-4'>
          <ContractType />
        </div>
        <div className='text-black pt-4'>
          <Salary />
        </div>
      </form>
    </div>
  );
};

export default Sidemenu;
