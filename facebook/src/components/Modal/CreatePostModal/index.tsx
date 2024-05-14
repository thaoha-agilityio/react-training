import { AxiosError } from 'axios';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { memo, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Stack,
  Text,
  Textarea,
  Image,
} from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES, INPUT_PLACEHOLDER, REGEX, STATUS, SUCCESS_MESSAGES } from '@/constants';

// Components
import { AddImageIcon } from '@/components/Icons';
import { UserProfile, CustomModal } from '@/components';

// Utils
import { convertBase64, getAPIErrorMessage } from '@/utils';

// Hooks
import { useCreatePost, useCustomToast } from '@/hooks';

interface CreatePostModalProps {
  isOpen: boolean;
  userName: string;
  onClose: () => void;
}

interface CreatePostData {
  content: string;
  image?: File[] | [];
}

const CreatePostModal = memo(({ isOpen, onClose, userName }: CreatePostModalProps) => {
  const {
    control,
    handleSubmit,
    clearErrors,
    watch,
    formState: { isDirty },
  } = useForm<CreatePostData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      content: '',
      image: [],
    },
  });

  const { mutate: createPost, isLoading } = useCreatePost();
  const { showToast } = useCustomToast();

  const [fileDataURL, setFileDataURL] = useState<string | null>(null);
  const [file, setFile] = useState<FileList | null>(null);

  const validationRule = {
    image: {
      pattern: {
        value: REGEX.CHECK_URL,
        message: ERROR_MESSAGES.IMAGE_INVALID,
      },
    },
  };

  // Handle show toast success message
  const handleCreatePostSuccess = () => {
    showToast(STATUS.SUCCESS, SUCCESS_MESSAGES.CREATED_POST);
    onClose();
  };

  // Handle show toast error message
  const handleCreatePostError = (error: AxiosError) =>
    showToast(STATUS.ERROR, getAPIErrorMessage(error));

  // Handle submit
  const onSubmit: SubmitHandler<CreatePostData> = async (data) => {
    const urlImage = data.image?.[0] ? await convertBase64(data.image?.[0]) : '';

    const postData = {
      ...data,
      image: urlImage || '',
      totalComments: 0,
      totalLikes: 0,
    };

    createPost(postData, {
      onSuccess: handleCreatePostSuccess,
      onError: handleCreatePostError,
    });
  };

  // Clear error when typing that field.
  const handleClearErrors = (fieldName: keyof CreatePostData) => {
    clearErrors(fieldName);
  };

  const isDisableButton = !isDirty || isLoading;

  // Preview image
  useEffect(() => {
    if (!file) return;

    const image = watch('image');
    const loadImageData = async () => {
      if (image) {
        const urlImage = await convertBase64(image?.[0]);

        urlImage ? setFileDataURL(urlImage) : null;
      }
    };

    loadImageData();
  }, [file, watch]);

  const handleClearImgPreview = () => setFileDataURL(null);

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title='Create post'>
      <Stack as='form' py='5px' px='20px' onSubmit={handleSubmit(onSubmit)}>
        <UserProfile userName={userName} />

        {/* content */}
        <Controller
          name='content'
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <Textarea
                placeholder={INPUT_PLACEHOLDER.POST}
                onChange={(e) => {
                  const value = e.target.value;
                  onChange(value);
                  handleClearErrors('content');
                }}
                {...rest}
              />
            </FormControl>
          )}
        />

        {/* Upload image */}
        <Box
          pos='relative'
          bg='secondary'
          h='300px'
          border='0.5px solid'
          borderColor='input.borderColor'
          borderRadius='md'
        >
          <Controller
            name='image'
            rules={validationRule.image}
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <FormControl isInvalid={!!error} w='full' h='full' pos='absolute' zIndex={2}>
                <Input
                  id='post-img'
                  aria-label='upload file'
                  type='file'
                  accept='image/*'
                  opacity={0}
                  pos='absolute'
                  zIndex={2}
                  cursor='pointer'
                  w='full'
                  h='full'
                  onChange={(e) => {
                    const value = e.target.files;
                    onChange(value);
                    setFile(value);
                    handleClearErrors('image');
                  }}
                />
                {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
              </FormControl>
            )}
          />

          {/* Preview Img */}
          {fileDataURL && (
            <Flex pos='absolute' zIndex={3} w='full' h='full'>
              <Image src={fileDataURL} alt='prev-img' w='full' h='full' objectFit='cover' />
              <Button variant='unstyled' pos='absolute' right={0} onClick={handleClearImgPreview}>
                x
              </Button>
            </Flex>
          )}

          <Flex flexDir='column' justifyContent='center' h='full' alignItems='center'>
            <IconButton icon={<AddImageIcon />} aria-label='upload-img' variant='icon' />
            <Text fontWeight='semiBold'>Add Photos/Videos</Text>
          </Flex>
        </Box>
        <Button type='submit' h='35px' my='10px' isDisabled={isDisableButton} isLoading={isLoading}>
          post
        </Button>
      </Stack>
    </CustomModal>
  );
});

export default CreatePostModal;
