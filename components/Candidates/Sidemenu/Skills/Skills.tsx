import React, { useState } from 'react';
import styles from './Skills.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Skills = ({ skills }: any) => {
  const [showMenu, setShowMenu] = useState(false);

  const Skills = skills;

  const handleInputClick = (e: any) => {
    setShowMenu(!showMenu);
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
          {Skills?.map((skill: any) => (
            <div key={skill.value} className={styles.item}>
              <label>{skill.label}</label>
              <input type='checkbox' name='search' value={skill.label} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
