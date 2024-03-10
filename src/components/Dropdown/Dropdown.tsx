import React, { useState } from 'react';
import styles from './Dropdown.module.css';

import { Option, DropdownProps } from '../../types/DropdownTypes';

const Dropdown: React.FC<DropdownProps> = ({ options, onOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionChange = (option: Option) => {
    setSelectedOption(option);
    onOptionSelected(option); // Call the passed callback
  };

  return (
    <div className={styles.dropdownContainer}>
      <select
        required
        className={styles.select}
        value={selectedOption?.value || ''}
        onChange={(e) => {
          const selectedValue = e.target.value;
          const selectedOption = options.find(
            (option) => option.value === selectedValue
          );
          if (selectedOption) {
            handleOptionChange(selectedOption);
          }
        }}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
