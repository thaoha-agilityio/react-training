import React from 'react';
import './index.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const Button = (props: IProps) => {
  const { variant, size, className, onClick } = props;

  return (
    <button
      className={`${className} btn btn-${variant} btn-${size}`}
      onClick={onClick}
      {...props}
    />
  );
};

export default Button;
