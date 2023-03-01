import React, { useState } from 'react';
import styles from './Salary.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Slider } from '@mui/material';

function valuetext(value: number) {
  return `${value}`;
}

const Salary = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState<number[]>([0, 300000]);
  const [selectOption, setSelectOption] = useState(false);

  const options = [
    { value: 'hourly', label: 'Hourly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  const handleInputClick = (e: any) => {
    setShowMenu(!showMenu);
  };

  const handleSelectOption = (e: any) => {
    setSelectOption(true);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.selected_value}>Salary</div>
        <div onClick={handleInputClick} className={styles.tools}>
          <div className={styles.tool}>
            {showMenu ? <FiChevronUp size={30} /> : <FiChevronDown size={30} />}
          </div>
        </div>
      </div>
      <hr />
      {showMenu && (
        <div className={styles.menu}>
          {options?.map((option: any) => (
            <div
              onClick={handleSelectOption}
              key={option.value}
              className={styles.item}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      <div className='text-[var(--orange)] text-left mt-4 w-[92%] mx-auto'>
        <p>$0 - $80000</p>
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
    </div>
  );
};

export default Salary;
