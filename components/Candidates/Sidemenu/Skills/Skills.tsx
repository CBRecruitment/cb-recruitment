import React, { useState } from 'react';
import styles from './Skills.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Skills = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectOption, setSelectOption] = useState(false);

  const options = [
    { value: 'crypto bd', label: 'Crypto BD' },
    { value: 'community', label: 'Community' },
    { value: 'events', label: 'Events' },
    { value: 'seo', label: 'SEO' },
    { value: 'digital', label: 'Digital' },
    { value: 'aws', label: 'AWS' },
    { value: 'graphic design', label: 'Graphic Design' },
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
        <div className={styles.selected_value}>Skills</div>
        <div onClick={handleInputClick} className={styles.tools}>
          <div className={styles.tool}>{showMenu ? <FiChevronUp size={30} /> : <FiChevronDown size={30} />}</div>
        </div>
      </div>
      <hr />
      {showMenu && (
        <div className={styles.menu}>
          {options?.map((option: any) => (
            <div onClick={handleSelectOption} key={option.value} className={styles.item}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
