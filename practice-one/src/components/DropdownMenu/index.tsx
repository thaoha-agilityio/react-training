import { IDropdown } from '../../types/IDropdown';

import './index.css';

interface IProps extends Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  options: IDropdown[];
  size?: 'small' | 'medium' | 'large';
}

const DropdownMenu = ({ options, size, className, ...selectProps }: IProps): React.ReactElement => (
  <select className={`select ${size} ${className}`} {...selectProps}>
    {options.map((option) => (
      <option className="option" key={option.value} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
);

export default DropdownMenu;
