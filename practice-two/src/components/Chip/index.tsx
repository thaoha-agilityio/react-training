import { ReactNode } from 'react';

import { ReactComponent as DeleteIcon } from '@/assets/images/icons/xmark.svg';

import './index.css';

interface IProps {
  isOption: boolean;
  label: string;
  size?: 'small' | 'medium';
  icon?: ReactNode;
  adornments: 'deletable' | 'icon';
  onClick?: () => void;
}

const Chip = ({ icon, size, label, isOption, adornments, onClick }: IProps) => {
  return (
    <div className={`chip chip-${size} chip-${adornments}`} onClick={onClick}>
      {/* Icon Chip */}
      {isOption && icon}

      <p>{label}</p>

      {/* Delete icon */}
      {!isOption && (icon = <DeleteIcon />)}
    </div>
  );
};

export default Chip;
