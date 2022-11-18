import Input from '../Input';

import './index.css';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  value: string | undefined;
  onClick?: () => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextField = ({ onChange, value, placeholder }: IProps): React.ReactElement => (
  <div className="search">
    <Input
      className="text-field"
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
    />
  </div>
);

export default TextField;
