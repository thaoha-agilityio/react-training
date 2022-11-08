import React from 'react';

import { IDropdown } from '../../types/IDropdown';

import './index.css';

interface IProps {
  options: IDropdown[];
  size?: 'small' | 'medium' | 'large';
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownMenu = ({ options, size, onChange }: IProps): React.ReactElement => (
  <select className={`select ${size}`} onChange={(event) => onChange(event)}>
    {options.map((option) => (
      <option className="option" key={option.value} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
);

export default DropdownMenu;
