import { forwardRef } from 'react';
import { FormErrorMessage, Input as InputBase, InputProps } from '@chakra-ui/react';

interface Props extends InputProps {
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ errorMessage, ...rest }, ref) => (
  <>
    <InputBase variant='primary' ref={ref} {...rest} />
    {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
  </>
));

export default Input;
