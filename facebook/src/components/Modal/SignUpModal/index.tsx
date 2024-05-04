import { memo } from 'react';
import {
  Box,
  Button,
  Text,
  FormControl,
  FormErrorMessage,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Link,
  Divider,
} from '@chakra-ui/react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';

// Constants
import { ERROR_MESSAGES, GENDER, GENDER_OPTION, INPUT_PLACEHOLDER, REGEX } from '@/constants';

// Components
import CustomModal from '../CustomModal';

interface SignUpFormData {
  firstName: string;
  surname: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: GENDER;
}

interface SignUpFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpFormModal = memo(({ isOpen, onClose }: SignUpFormProps) => {
  const { control, handleSubmit } = useForm<SignUpFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      dateOfBirth: '',
      gender: GENDER.FEMALE,
    },
  });

  const validationRule = {
    firstName: { required: ERROR_MESSAGES.FIELD_REQUIRED('First Name') },

    surname: { required: ERROR_MESSAGES.FIELD_REQUIRED('Surname') },

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

    dateOfBirth: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Date of birth'),
    },
  };

  // TODO: will handle submit
  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
  };

  return (
    <CustomModal isOpen={isOpen} title='Sign Up' onClose={onClose}>
      <Divider />
      <Box maxW='432px' borderRadius='md' py='20px' px='25px'>
        <Stack as='form' onSubmit={handleSubmit(onSubmit)} spacing='12px'>
          {/* firstName */}
          <Controller
            name='firstName'
            control={control}
            rules={validationRule.firstName}
            render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
              <FormControl isInvalid={!!error}>
                <Input
                  variant='primary'
                  placeholder={INPUT_PLACEHOLDER.FIRST_NAME}
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

          {/*surname  */}
          <Controller
            name='surname'
            control={control}
            rules={validationRule.surname}
            render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
              <FormControl isInvalid={!!error}>
                <Input
                  variant='primary'
                  placeholder={INPUT_PLACEHOLDER.SURNAME}
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

          {/* email */}
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

          {/*password  */}
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

          {/* dateOfBirth */}
          <Controller
            name='dateOfBirth'
            control={control}
            rules={validationRule.dateOfBirth}
            render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
              <FormControl isInvalid={!!error}>
                <Input
                  size='md'
                  type='date'
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

          {/* Gender */}
          <Controller
            name='gender'
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <FormControl isInvalid={!!error}>
                <RadioGroup
                  display='flex'
                  justifyContent='space-between'
                  defaultValue={GENDER.FEMALE}
                >
                  {GENDER_OPTION.map((gender) => {
                    const { value, label } = gender || {};
                    return (
                      <Radio
                        key={value}
                        value={value}
                        onChange={(e) => {
                          const value = e.target?.value;
                          onChange(value);
                        }}
                      >
                        {label}
                      </Radio>
                    );
                  })}
                </RadioGroup>
                {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
              </FormControl>
            )}
          />

          <Text variant='helper' fontSize='xs'>
            By clicking Sign Up, you agree to our
            <Link fontSize='xs' href='#'>
              &#160;Terms
            </Link>
            ,
            <Link fontSize='xs' href='#'>
              &#160;Data Policy
            </Link>
            &#160;and
            <Link fontSize='xs' href='#'>
              &#160;Cookie Policy
            </Link>
            . You may receive SMS notifications from us and can opt out at any time.
          </Text>

          <Box textAlign='center'>
            <Button type='submit' variant='secondary' w='198px' h='48px'>
              Sign up
            </Button>
          </Box>
        </Stack>
      </Box>
    </CustomModal>
  );
});

export default SignUpFormModal;
