import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './Industry.module.css';

const Industry = ({ fields }: any) => {
  const [showMenu, setShowMenu] = useState(false);

  const industries = fields[0]?.options;

  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.selected_value}>Industry</div>
        <div onClick={handleInputClick} className={styles.tools}>
          <div className={styles.tool}>{showMenu ? <FiChevronUp size={30} /> : <FiChevronDown size={30} />}</div>
        </div>
      </div>
      <hr />
      {showMenu && (
        <div className={styles.menu}>
          {industries?.map((industry: any) => (
            <div key={industry.value} className={styles.item}>
              <label>{industry.label}</label>
              <input type='checkbox' name='search' value={industry.label}></input>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Industry;

// { value: 'dapps', label: 'Dapps' },
// { value: 'defi', label: 'DeFi' },
// { value: 'blockchain', label: 'Blockchain' },
// { value: 'evm', label: 'EVM' },
// { value: 'DevOps', label: 'DevOps' },
// { value: 'nft', label: 'NFT' },
