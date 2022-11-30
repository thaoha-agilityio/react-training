import './index.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'normal' | 'danger';
  size: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const Button = ({ variant, size, className, onClick, ...rest }: IProps): React.ReactElement => (
  <button className={`${className} btn btn-${variant} btn-${size}`} onClick={onClick} {...rest} />
);

export default Button;
