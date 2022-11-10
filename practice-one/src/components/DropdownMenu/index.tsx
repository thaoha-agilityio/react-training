import React from 'react';

import { IDropdown } from '../../types/IDropdown';

import './index.css';

interface IProps {
  options: IDropdown[];
  size?: 'small' | 'medium' | 'large';
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  name?: string;
  defaultValue?: string;
}

const DropdownMenu = ({
  options,
  size,
  value,
  defaultValue,
  onChange,
  name,
}: IProps): React.ReactElement => (
  <select
    className={`select ${size}`}
    onChange={onChange}
    value={value}
    name={name}
    defaultValue={defaultValue}
  >
    {options.map((option) => (
      <option className="option" key={option.value} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
);

export default DropdownMenu;
