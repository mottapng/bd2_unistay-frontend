'use client'
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FiChevronDown } from 'react-icons/fi';

export const SelectOne = ({ label, options, required, search, value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (optionValue) => {
    setValue(optionValue);
    setSearchValue('');
    handleToggleDropdown();
  };

  return (
    <>
      <div className={styles.selectOneOverlay} onClick={handleToggleDropdown} style={{ display: isOpen ? "block" : "none" }} />
      <div className={styles.selectOneContainer}>
        <label>{label} {required && <span>*</span>}</label>
        <div className={styles.selectWrapper}>
          <div className={isOpen ? `${styles.selectOpen}` : `${styles.selectValue}`} onClick={handleToggleDropdown}>
            <p>{value?.label}</p>
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
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};