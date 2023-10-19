import isEqual from 'react-fast-compare';
import { SubmitHandler, useForm } from 'react-hook-form';
import { memo, useCallback, useMemo } from 'react';
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

// Icon
import { AddImageIcon } from '@assets/icons';

// Types
import { IProduct } from '@types';

// Constants
import { ERROR_MESSAGES, REGEX, MAXIMUM_FILE_SIZE, PLACEHOLDER_MESSAGE } from '@constants';

// Helpers
import { convertBase64 } from '@helpers';

interface FormInput extends Omit<IProduct, 'image'> {
  image: File[] | [];
}

type FormProps = {
  isLoading?: boolean;
  title: string;
  errorMessage?: string;
  product?: IProduct;
  onSubmitProduct: (value: IProduct) => void;
};

const Form = ({ isLoading, title, onSubmitProduct, product }: FormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm<FormInput>({
    defaultValues: { ...product, image: [] },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  // Validate
  const schema = useMemo(
    () => ({
      name: {
        required: ERROR_MESSAGES.FIELD_REQUIRED('Name'),
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
        required: product?.image ? false : ERROR_MESSAGES.FIELD_REQUIRED('Image'),
        pattern: {
          value: REGEX.CHECK_URL,
          message: ERROR_MESSAGES.IMAGE_INVALID,
        },
        ...((!product?.image || watch('image')) && {
          validate: (value: File[]) => {
            const file = value[0];
            if (file && file.size >= MAXIMUM_FILE_SIZE) {
              return ERROR_MESSAGES.MAXIMUM_FILE_SIZE;
            }

            return;
          },
        }),
      },
    }),
    [product?.image],
  );

  const onSubmit: SubmitHandler<FormInput> = useCallback(async (data) => {
    const urlImage = data?.image?.[0] ? await convertBase64(data.image?.[0]) : product?.image || '';

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
      <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight='bold' textAlign='center'>
        {title}
      </Text>

      <Box as='form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='30px' w={{ base: '300px', md: '600px' }} m='auto' py='60px'>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Product Name</FormLabel>
            <Input
              id='name'
              aria-label='enter product name'
              placeholder={PLACEHOLDER_MESSAGE.NAME}
              {...register('name', schema.name)}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormLabel>Description</FormLabel>
            <Input
              id='description'
              aria-label='enter description'
              placeholder={PLACEHOLDER_MESSAGE.DESCRIPTION}
              {...register('description', schema.description)}
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.price}>
            <FormLabel>Price</FormLabel>
            <Input
              id='price'
              aria-label='enter price'
              placeholder={PLACEHOLDER_MESSAGE.PRICE}
              {...register('price', schema.price)}
            />
            <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.image}>
            <FormLabel>Image</FormLabel>
            <Box pos='relative'>
              <Input
                id='image'
                placeholder={PLACEHOLDER_MESSAGE.IMAGE}
                aria-label='upload file'
                type='file'
                accept='image/*'
                opacity={0}
                pos='absolute'
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
            isLoading={isLoading}
            isDisabled={!isDirty}
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

export default memo(Form, isEqual);
