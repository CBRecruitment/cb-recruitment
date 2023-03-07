import React, { useState } from 'react';
import styles from './Experience.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Experience = ({ fields }: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectOption, setSelectOption] = useState(false);

  const Experience = fields[3].options;

  const handleInputClick = (e: any) => {
    setShowMenu(!showMenu);
  };

  const handleSelectOption = (e: any) => {
    setSelectOption(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.selected_value}>Experience</div>
        <div onClick={handleInputClick} className={styles.tools}>
          <div className={styles.tool}>{showMenu ? <FiChevronUp size={30} /> : <FiChevronDown size={30} />}</div>
        </div>
      </div>
      <hr />
      {showMenu && (
        <div className={styles.menu}>
          {Experience?.map((exp: any) => (
            <div key={exp.value} className={styles.item}>
              <label>{exp.label}</label>
              <input type='checkbox' name='search' value={exp.label} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
