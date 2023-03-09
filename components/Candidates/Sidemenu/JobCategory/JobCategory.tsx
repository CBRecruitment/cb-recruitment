import React, { useState } from 'react';
import styles from './JobCategory.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const JobCategory = ({ categories }: any) => {
  const [showMenu, setShowMenu] = useState(false);

  const Categories = categories;

  const handleInputClick = (e: any) => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.selected_value}>Job Category</div>
        <div onClick={handleInputClick} className={styles.tools}>
          <div className={styles.tool}>{showMenu ? <FiChevronUp size={30} /> : <FiChevronDown size={30} />}</div>
        </div>
      </div>
      <hr />
      {showMenu && (
        <div className={styles.menu}>
          {Categories?.map((category: any) => (
            <div key={category.value} className={styles.item}>
              <label>{category.label}</label>
              <input type='checkbox' name='search' value={category.label} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobCategory;
