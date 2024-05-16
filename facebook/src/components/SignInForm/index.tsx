import { Suspense, lazy } from 'react';
import { Box, Button, Divider, FormControl, Link, Stack, useDisclosure } from '@chakra-ui/react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';

// Constants
import { ERROR_MESSAGES, INPUT_PLACEHOLDER, REGEX, STATUS } from '@/constants';

// Components
import { Input, LoadingIndicator } from '@/components';

// Hooks
import { useAuthSignIn, useCustomToast } from '@/hooks';

// Utils
import { getAPIErrorMessage } from '@/utils';

const SignUpFormModal = lazy(() => import('@/components/Modal/SignUpModal'));

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { isDirty },
  } = useForm<SignInFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate: signIn, isLoading } = useAuthSignIn();

  const { showToast } = useCustomToast();

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

  // TODO: handle navigate to Home page later
  const handleSignInSuccess = () => {};

  // Handle show toast error message
  const handleSignInError = (error: string) => showToast(STATUS.ERROR, getAPIErrorMessage(error));

  // TODO: will handle submit
  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    signIn(data, {
      onSuccess: handleSignInSuccess,
      onError: handleSignInError,
    });
  };

  // Clear error when typing that field.
  const handleClearErrors = (fieldName: keyof SignInFormData) => {
    clearErrors(fieldName);
  };

  const isDisableButton = !isDirty || isLoading;

  return (
    <Box
      w='396px'
      borderRadius='md'
      border='0.5px solid'
      borderColor='input.borderColor'
      bg='white'
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
                placeholder={INPUT_PLACEHOLDER.EMAIL}
                errorMessage={error?.message}
                onChange={(e) => {
                  const value = e.target?.value;
                  onChange(value);
                  handleClearErrors('email');
                }}
                {...rest}
              />
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
                type='password'
                placeholder={INPUT_PLACEHOLDER.PASSWORD}
                errorMessage={error?.message}
                onChange={(e) => {
                  const value = e.target?.value;
                  onChange(value);
                  handleClearErrors('password');
                }}
                {...rest}
              />
            </FormControl>
          )}
        />

        <Button type='submit' isDisabled={isDisableButton} isLoading={isLoading}>
          Log In
        </Button>
      </Stack>

      <Stack spacing='15px' textAlign='center' mt='15px'>
        <Link href='#'>Forgotten password?</Link>
        <Divider color='input.borderColor' />
        <Box>
          <Button variant='secondary' w='198px' h='48px' onClick={onOpen}>
            Create New Account
          </Button>
        </Box>
      </Stack>

      {/* Sign up form */}
      {isOpen && (
        <Suspense fallback={<LoadingIndicator />}>
          <SignUpFormModal isOpen={isOpen} onClose={onClose} />
        </Suspense>
      )}
    </Box>
  );
};

export default SignInForm;
