import React from 'react';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  name?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  type: 'text' | 'checkbox';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, type, onChange, className, placeholder, ...rest }: IProps) => (
  <>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className={className}
      placeholder={placeholder}
      {...rest}
    />
  </>
);

export default Input;
