import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';

// Constants
import { ERROR_MESSAGES, INPUT_PLACEHOLDER, REGEX } from '@/constants';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const { control, handleSubmit } = useForm<SignInFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const validationRule = {
    email: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Email'),
      pattern: {
        value: REGEX.CHECK_EMAIL,
        message: ERROR_MESSAGES.EMAIL_INVALID,
      },
    },

    password: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Password'),
      minLength: { value: 8, message: ERROR_MESSAGES.PASSWORD_NOT_LONG },
      pattern: {
        value: REGEX.CHECK_SYMBOL,
        message: ERROR_MESSAGES.PASSWORD_NOT_HAVE_SYMBOL,
      },
    },
  };

  // TODO: will handle submit
  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
  };

  return (
    <Box
      maxW='396px'
      borderRadius='md'
      border='0.5px solid'
      borderColor='input.borderColor'
      py='20px'
      px='25px'
      boxShadow='0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'
    >
      <Stack as='form' onSubmit={handleSubmit(onSubmit)} spacing='12px'>
        <Controller
          name='email'
          control={control}
          rules={validationRule.email}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <Input
                variant='primary'
                placeholder={INPUT_PLACEHOLDER.EMAIL}
                onChange={(e) => {
                  const value = e.target?.value;
                  onChange(value);
                }}
                {...rest}
              />
              {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
            </FormControl>
          )}
        />

        <Controller
          name='password'
          control={control}
          rules={validationRule.password}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <Input
                variant='primary'
                type='password'
                placeholder={INPUT_PLACEHOLDER.PASSWORD}
                onChange={(e) => {
                  const value = e.target?.value;
                  onChange(value);
                }}
                {...rest}
              />
              {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
            </FormControl>
          )}
        />

        <Button type='submit'>Log In</Button>

        <Link textAlign='center' href='#'>
          Forgotten password?
        </Link>
        <Divider color='input.borderColor' />

        <Box textAlign='center'>
          <Button variant='secondary' w='198px' h='48px'>
            Create New Account
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignInForm;
