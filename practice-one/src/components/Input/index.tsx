import React from 'react';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  name?: string;
  value?: string;
  type: 'text' | 'checkbox';
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ name, value, type, onChange, className, placeholder }: IProps) => (
  <>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  </>
);

export default Input;
