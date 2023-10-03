import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useMemo } from 'react';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

//Component
import Notification from '@components/Notification';

// Icon
import { AddImageIcon } from '@assets/icons';

// Types
import { IProduct } from '@types';

// Constants
import { ERROR_MESSAGES, REGEX, STATUSES } from '@constants';

// Helpers
import { convertBase64 } from '@helpers';

interface FormInput extends Omit<IProduct, 'image'> {
  image: File[];
}

type FormProps = {
  title: string;
  errorMessage?: string;
  successMessage?: string;
  onSubmitProduct: (value: IProduct) => void;
};

export const Form = ({ title, onSubmitProduct, errorMessage, successMessage }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({ mode: 'onSubmit' });

  // Validate
  const schema = useMemo(
    () => ({
      name: {
        required: ERROR_MESSAGES.FIELD_REQUIRED('Name'),
      },
      category: {
        required: ERROR_MESSAGES.FIELD_REQUIRED('Category'),
      },
      description: {
        required: ERROR_MESSAGES.FIELD_REQUIRED('Description'),
        maxLength: {
          value: 50,
          message: ERROR_MESSAGES.STRING_LIMIT,
        },
      },
      price: {
        required: ERROR_MESSAGES.FIELD_REQUIRED('Price'),
        min: {
          value: 1,
          message: ERROR_MESSAGES.MIN_PRICE,
        },
        pattern: {
          value: REGEX.CHECK_NUMBER,
          message: ERROR_MESSAGES.PRICE_INVALID,
        },
      },
      image: {
        required: ERROR_MESSAGES.FIELD_REQUIRED('Image'),
        pattern: {
          value: REGEX.CHECK_URL,
          message: ERROR_MESSAGES.IMAGE_INVALID,
        },
      },
    }),
    [],
  );

  const onSubmit: SubmitHandler<FormInput> = useCallback(async (data) => {
    const urlImage = await convertBase64(data.image[0]);
    if (urlImage) {
      const product = {
        ...data,
        image: urlImage,
      };
      onSubmitProduct(product);
    }
  }, []);

  return (
    <Box mt='90px'>
      {successMessage && !errorMessage && (
        <Notification status={STATUSES.SUCCESS} message={successMessage} />
      )}

      <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight='bold' textAlign='center'>
        {title}
      </Text>

      <Box as='form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='30px' w={{ base: '300px', md: '600px' }} m='auto' py='60px'>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Product Name</FormLabel>
            <Input id='name' aria-label='enter product name' {...register('name', schema.name)} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.category}>
            <FormLabel>Category</FormLabel>
            <Input
              id='category'
              aria-label='enter category'
              {...register('category', schema.category)}
            />
            <FormErrorMessage> {errors.category?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormLabel>Description</FormLabel>
            <Input
              id='description'
              aria-label='enter description'
              {...register('description', schema.description)}
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.price}>
            <FormLabel>Price</FormLabel>
            <Input id='price' {...register('price', schema.price)} />
            <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.image}>
            <FormLabel>Image</FormLabel>
            <Box pos='relative'>
              <Input
                id='image'
                type='file'
                accept='image/*'
                opacity={0}
                pos='absolute'
                top={0}
                left={0}
                zIndex={2}
                cursor='pointer'
                w={{ base: '180px', md: '237px' }}
                {...register('image', schema.image)}
              />
              <Button bg='yellow.150' variant='outline' rounded='xs'>
                <AddImageIcon />
                Choose file
              </Button>
            </Box>
            <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type='submit'
            isLoading={isSubmitting}
            variant='solid'
            color='white'
            mt='30px'
            borderRadius='xs'
            h={{ base: '40px', md: '55px' }}
            w={{ base: '180px', md: '237px' }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
