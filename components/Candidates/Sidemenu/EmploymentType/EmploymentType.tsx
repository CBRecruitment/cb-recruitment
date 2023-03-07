import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './EmploymentType.module.css';

const EmploymentType = ({ fields }: any) => {
  const [showMenu, setShowMenu] = useState(false);

  const employment_types = fields[1].options;

  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.selected_value}>Employment Type</div>
        <div onClick={handleInputClick} className={styles.tools}>
          <div className={styles.tool}>{showMenu ? <FiChevronUp size={30} /> : <FiChevronDown size={30} />}</div>
        </div>
      </div>
      <hr />
      {showMenu && (
        <div className={styles.menu}>
          {employment_types?.map((employment_type: any) => (
            <div key={employment_type.value} className={styles.item}>
              <label>{employment_type.label}</label>
              <input type='checkbox' name='search' value={employment_type.label}></input>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmploymentType;
