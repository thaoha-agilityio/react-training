import React from 'react';
import { IDropdown } from '../../types/IDropdown ';
import './index.css';

interface IProps {
  options: IDropdown[];
}

class DropdownMenu extends React.Component<IProps> {
  render() {
    const { options } = this.props;
    return (
      <>
        <select className="select">
          {options.map((option) => (
            <option className="option" key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default DropdownMenu;
