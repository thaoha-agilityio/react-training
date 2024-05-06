import { ComponentPropsWithRef, ReactNode } from 'react';

import './index.css';

interface IProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  type: 'text' | 'checkbox';
  size?: 'small' | 'medium' | 'large';
  leftElement?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, onChange, size, leftElement, ...rest }: IProps): React.ReactElement => (
  <>
    {leftElement && <div className="input-left-element">{leftElement}</div>}
    <input type={type} onChange={onChange} {...rest} className={`input input-${size}`} />
  </>
);

export default Input;
