import { ReactNode } from 'react';
import Button from '../Button';

import './index.css';

interface IProps {
  label: string;
  size: 'small' | 'medium';
  adornments: 'startAdornments' | 'endAdornments';
  startAdornments?: ReactNode;
  endAdornments?: ReactNode;
  onClick?: () => void;
}

const Chip = ({ size, label, adornments, startAdornments, endAdornments, onClick }: IProps) => {
  return (
    <div className={`chip chip-${size} chip-${adornments}`}>
      {startAdornments && <Button icon={startAdornments} onClick={onClick} variant="outlined" />}
      <p>{label}</p>
      {endAdornments && (
        <Button icon={endAdornments} onClick={onClick} variant="outlined" size="small" />
      )}
    </div>
  );
};

export default Chip;
