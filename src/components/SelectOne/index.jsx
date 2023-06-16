'use client'
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FiChevronDown } from 'react-icons/fi';

export const SelectOne = ({ label, options, required, search }) => {

  const [value, setValue] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelectOption = (optionValue) => {
    setValue(optionValue);
    handleToggleDropdown();
  };

  return (
    <div className={styles.selectOneContainer}>
      <label>{label} {required && <span>*</span>}</label>
      <div className={styles.selectWrapper}>
        <div className={isOpen ? `${styles.selectOpen}` : `${styles.selectValue}`} onClick={handleToggleDropdown}>
          <p>{value}</p>
          <FiChevronDown className={styles.chevron} onClick={handleToggleDropdown} />
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            <ul>
              {search && <input
                type="text"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />}
              {filteredOptions.map((option, i) => (
                <li
                  key={i}
                  className={styles.option}
                  onClick={() => handleSelectOption(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};