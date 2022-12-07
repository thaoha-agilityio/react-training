import { ReactNode } from 'react';
import './index.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'danger';
  size?: 'small' | 'medium' | 'large' | 'radius';
  className?: string;
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  variant,
  size,
  className,
  onClick,
  icon,
  text,
  ...rest
}: IProps): React.ReactElement => (
  <button className={`$ btn btn-${variant} btn-${size}`} onClick={onClick} {...rest}>
    {icon}
    {text}
  </button>
);

export default Button;
