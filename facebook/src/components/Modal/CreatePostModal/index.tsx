import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { memo } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

// Components
import CustomModal from '../CustomModal';
import { AddImageIcon } from '@/components/Icons';
import { UserProfile } from '@/components';

interface CreatePostModalProps {
  isOpen: boolean;
  userName: string;
  onClose: () => void;
}

interface CreatePostData {
  status: string;
  image?: File[] | [];
}

const CreatePostModal = memo(({ isOpen, onClose, userName }: CreatePostModalProps) => {
  const { control, handleSubmit } = useForm<CreatePostData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      status: '',
      image: [],
    },
  });

  // TODO: will handle submit
  const onSubmit: SubmitHandler<CreatePostData> = (data) => {
    console.log(data);
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title='Create post'>
      <UserProfile userName={userName} />

      <Stack as='form' py='5px' onSubmit={handleSubmit(onSubmit)}>
        {/* Status */}
        <Controller
          name='status'
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
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <FormControl isInvalid={!!error} w='full' h='full' pos='absolute' zIndex={2}>
                <Input
                  id='image'
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
                    const value = e.target.value;
                    onChange(value);
                  }}
                />
              </FormControl>
            )}
          />

          <Flex flexDir='column' justifyContent='center' h='full' alignItems='center'>
            <IconButton icon={<AddImageIcon />} aria-label='upload-img' variant='icon' />
            <Text fontWeight='semiBold'>Add Photos/Videos</Text>
          </Flex>
        </Box>
        <Button type='submit' h='35px' my='10px'>
          post
        </Button>
      </Stack>
    </CustomModal>
  );
});

export default CreatePostModal;
