import {
  Button,
  FormErrorMessage,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { memo, forwardRef, useState } from 'react';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

interface PasswordInputProps extends InputProps {
  errorMessage?: string;
}

const PasswordInput = memo(
  forwardRef<HTMLInputElement, PasswordInputProps>(({ errorMessage, ...rest }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleShowPassword = () => setIsShowPassword((prev) => !prev);

    return (
      <>
        <InputGroup>
          <Input
            pr='4.5rem'
            type={isShowPassword ? 'text' : 'password'}
            placeholder={INPUT_PLACEHOLDER.PASSWORD}
            variant='primary'
            ref={ref}
            {...rest}
          />
          <InputRightElement pr='5px'>
            <Button variant='action' onClick={handleShowPassword}>
              {isShowPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </>
    );
  }),
);

export default PasswordInput;
