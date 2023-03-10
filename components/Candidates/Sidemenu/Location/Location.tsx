import React, { useState } from 'react';
import styles from './Location.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Location = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectOption, setSelectOption] = useState(false);

  const options = [
    { value: 'remote', label: 'Remote' },
    { value: 'united kingdom', label: 'United Kingdom' },
    { value: 'united states', label: 'United States' },
  ];

  const handleInputClick = (e: any) => {
    setShowMenu(!showMenu);
  };

  const handleSelectOption = (e: any) => {
    setSelectOption(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.selected_value}>Location</div>
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

export default Location;
