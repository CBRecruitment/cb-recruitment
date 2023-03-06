import React, { useState } from 'react';
import styles from './JobCategory.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const JobCategory = () => {
  const [showMenu, setShowMenu] = useState(false);

  const options = [];

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
          {/* {options?.map((option: formProps) => (
            <div key={option.value} className={styles.item}>
              <label>{option.label}</label>
              <input type='checkbox' name='search' value={option.label} />
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default JobCategory;

// { value: 'solidity', label: 'Solidity' },
// {
//   value: 'rust',
//   label: 'Rust',
// },
// { value: 'marketing', label: 'Marketing' },
// { value: 'developer', label: 'Developer' },

{
  // { value: 'research / writing', label: 'Research / Writing' },
  // { value: 'sales', label: 'Sales' },
  // { value: 'technical', label: 'Technical' },
  // { value: 'vc', label: 'VC' },
  //   value: 'business development / sales',
  //   label: 'Business Development / Sales',
  // },
  // { value: 'finance', label: 'Finance' },
  // { value: 'legal', label: 'Legal' },
  // { value: 'marketing', label: 'Marketing' },
  // { value: 'operations', label: 'Operations' },
  // { value: 'product', label: 'Product' },
}

// const handleSubmit = (e: any) => {
//   e.preventDefault();
//   setSearch(checkedValues);
//   router.push(`candidates/?search=${search}`);
// };
