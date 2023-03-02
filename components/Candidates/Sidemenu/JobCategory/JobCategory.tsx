import React, { useState } from 'react';
import styles from './JobCategory.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const JobCategory = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectOption, setSelectOption] = useState(false);

  const options = [
    {
      value: 'business development / sales',
      label: 'Business Development / Sales',
    },
    { value: 'finance', label: 'Finance' },
    { value: 'legal', label: 'Legal' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'operations', label: 'Operations' },
    { value: 'product', label: 'Product' },
    { value: 'research / writing', label: 'Research / Writing' },
    { value: 'sales', label: 'Sales' },
    { value: 'technical', label: 'Technical' },
    { value: 'vc', label: 'VC' },
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
        <div className={styles.selected_value}>Job Category</div>
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

export default JobCategory;
