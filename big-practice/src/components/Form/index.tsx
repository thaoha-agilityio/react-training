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

import { useForm } from 'react-hook-form';

// Icon
import { AddImageIcon } from '@assets/icons';

// Types
import { IProduct } from '@types';
import { VALIDATE_MESSAGE } from '@constants';

type FormProps = {
  title: string;
};

export const Form = ({ title }: FormProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<IProduct>();

  const schema = {
    name: {
      required: VALIDATE_MESSAGE.FIELD_REQUIRED('Name'),
    },
    category: {
      required: VALIDATE_MESSAGE.FIELD_REQUIRED('Category'),
    },
    description: {
      require: VALIDATE_MESSAGE.FIELD_REQUIRED('Description'),
      maxLength: {
        value: 50,
        message: VALIDATE_MESSAGE.STRING_LIMIT,
      },
    },
    price: {
      require: VALIDATE_MESSAGE.FIELD_REQUIRED('Price'),
      min: {
        value: 1,
        message: VALIDATE_MESSAGE.PRICE_INVALID,
      },
    },
  };

  return (
    <Box mt='90px'>
      <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight='bold' textAlign='center'>
        {title}
      </Text>

      <Box as='form'>
        <Stack spacing='30px' w={{ base: '300px', md: '600px' }} m='auto' py='60px'>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Product Name</FormLabel>
            <Input id='name' aria-label='enter product name' {...register('name', schema.name)} />
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.category}>
            <FormLabel>Category</FormLabel>
            <Input
              id='category'
              aria-label='enter category'
              {...register('category', schema.category)}
            />
            <FormErrorMessage> {errors.category && errors.category.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormLabel>Description</FormLabel>
            <Input
              id='description'
              aria-label='enter description'
              {...register('description', schema.description)}
            />
            <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.price}>
            <FormLabel>Price</FormLabel>
            <Input id='price' {...register('price', schema.price)} />
            <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.image}>
            <FormLabel>Image</FormLabel>
            <Box pos='relative'>
              <Input
                name='image'
                type='file'
                accept='image/*'
                opacity={0}
                pos='absolute'
                top={0}
                left={0}
                zIndex={2}
              />
              <Button bg='yellow.150' variant='outline' rounded='xs'>
                <AddImageIcon />
                Choose file
              </Button>
            </Box>

            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <Button
            type='submit'
            isLoading={isSubmitting}
            variant='solid'
            color='white'
            mt='49px'
            borderRadius='xs'
            w={{ base: '180px', md: '237px' }}
            h={{ base: '40px', md: '55px' }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
