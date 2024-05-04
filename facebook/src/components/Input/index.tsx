import { memo } from 'react';
import { FormErrorMessage, Input as InputBase, InputProps } from '@chakra-ui/react';

interface Props extends InputProps {
  errorMessage?: string;
}

const Input = memo(({ errorMessage, ...rest }: Props) => (
  <>
    <InputBase variant='primary' {...rest} />
    {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
  </>
));

export default Input;
