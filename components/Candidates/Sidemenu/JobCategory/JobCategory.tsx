import React, { useState } from 'react';
import styles from './JobCategory.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import router from 'next/router';

type formProps = {
  value: string;
  label: string;
};

const JobCategory = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);

  const options = [
    { value: 'research / writing', label: 'Research / Writing' },
    { value: 'sales', label: 'Sales' },
    { value: 'technical', label: 'Technical' },
    { value: 'vc', label: 'VC' },
  ];

  const handleInputClick = (e: any) => {
    setShowMenu(!showMenu);
  };

  // const handleCheckbox = (e: any) => {
  //   const { checked, value } = e.target;
  //   checked ? setCheckedValues((prev) => [...prev, value]) : '';
  // };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setSearch(checkedValues);
  //   router.push(`candidates/?search=${search}`);
  // };

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
          {options?.map((option: formProps) => (
            <div key={option.value} className={styles.item}>
              {option.label}
              <input type='checkbox' onChange={handleCheckbox} value={option.label} />
            </div>
          ))}
          <button className={styles.button} type='submit'>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default JobCategory;

{
  //   value: 'business development / sales',
  //   label: 'Business Development / Sales',
  // },
  // { value: 'finance', label: 'Finance' },
  // { value: 'legal', label: 'Legal' },
  // { value: 'marketing', label: 'Marketing' },
  // { value: 'operations', label: 'Operations' },
  // { value: 'product', label: 'Product' },
}
