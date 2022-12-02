interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  type: 'text' | 'checkbox';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, onChange, ...rest }: IProps): React.ReactElement => (
  <>
    <input type={type} onChange={onChange} {...rest} />
  </>
);

export default Input;
