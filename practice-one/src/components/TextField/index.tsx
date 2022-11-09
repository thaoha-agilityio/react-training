import React from 'react';
import Input from '../Input';

import './index.css';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  value: string | undefined;
  onClick: () => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const TextField = ({ onClick, onChange, value, ...props }: IProps): React.ReactElement => (
  <div className="search">
    <Input
      className="text-field"
      {...props}
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Search name..."
    />
    <button className="search-btn" onClick={onClick}>
      <i className="fa fa-search" />
    </button>
  </div>
);

export default TextField;
