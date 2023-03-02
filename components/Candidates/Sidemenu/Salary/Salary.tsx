import React, { useState } from 'react';
import styles from './Salary.module.css';
import { Slider } from '@mui/material';

function valuetext(value: number) {
  return `${value}`;
}

const Salary = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState<number[]>([0, 300000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className='text-[var(--orange)] text-left mt-4 w-[92%] mx-auto'>
      <p>$0 - $80,000</p>
      <Slider
        getAriaLabel={() => 'Salary range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        className={styles.slider}
        sx={{
          color: 'var(--orange)',
        }}
      />
    </div>
  );
};

export default Salary;
