import { ReactNode } from 'react';
import './index.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
  size: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  text?: string;
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
