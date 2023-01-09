import { memo, ReactNode } from 'react';

import './index.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large' | 'radius';
  styles: 'normal' | 'circle';
  text?: string;
  icon?: ReactNode;
}

const Button = ({ variant, size, icon, text, styles, ...rest }: IProps): React.ReactElement => (
  <button className={`$ btn btn-${variant} btn-${size} btn-${styles}`} {...rest}>
    {icon}
    {text}
  </button>
);

export default memo(Button);
