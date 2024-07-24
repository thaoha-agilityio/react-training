import { forwardRef, memo } from 'react';
import { FormErrorMessage, Input as InputBase, InputProps } from '@chakra-ui/react';

interface Props extends InputProps {
  errorMessage?: string;
}

const Input = memo(
  forwardRef<HTMLInputElement, Props>(({ errorMessage, ...rest }, ref) => (
    <>
      <InputBase variant='primary' ref={ref} {...rest} />
      {errorMessage && (
        <FormErrorMessage data-testid='error-message'>{errorMessage}</FormErrorMessage>
      )}
    </>
  )),
);

export default Input;
