import React, { useEffect, useState } from 'react';
import styles from './EmploymentType.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const EmploymentType = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectOption, setSelectOption] = useState(false);

  const options = [
    { value: 'graduates', label: 'Graduates' },
    { value: 'entry-level', label: 'Entry-level' },
    { value: 'experienced', label: 'Experienced' },
  ];

  const handleInputClick = (e: any) => {
    setShowMenu(!showMenu);
  };

  const handleSelectOption = (e: any) => {
    setSelectOption(true);
    console.log(selectOption);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.selected_value}>Employment Type</div>
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
    </div>
  );
};

export default EmploymentType;
