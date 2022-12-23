import { memo, ReactNode } from 'react';

import Button from '../Button';

import './index.css';

interface IProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  adornments: 'startAdornments' | 'endAdornments' | 'customAdornments';
  startAdornments?: ReactNode;
  endAdornments?: ReactNode;
  onClick?: () => void;
}

const Chip = ({ size, label, adornments, startAdornments, endAdornments, onClick }: IProps) => {
  return (
    <div className={`chip chip-${size} chip-${adornments}`}>
      {startAdornments && <Button icon={startAdornments} onClick={onClick} variant="primary" />}
      <p className="label">{label}</p>
      {endAdornments && (
        <Button icon={endAdornments} onClick={onClick} variant="primary" size="small" />
      )}
    </div>
  );
};

export default memo(Chip);
