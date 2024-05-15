import { Suspense, lazy } from 'react';
import { Flex, Avatar, Input, Divider, Button, Box, useDisclosure } from '@chakra-ui/react';

// Icon components
import { LiveIcon, PhotoIcon, SmileIcon } from '@/components/Icons';

// Constants
import { DEFAULT_IMAGE, INPUT_PLACEHOLDER } from '@/constants';

// Components
import { LoadingIndicator } from '@/components';

// Stores
import { useAuthStore } from '@/stores';

const CreatePostModal = lazy(() => import('@/components/Modal/CreatePostModal'));

const CreatePost = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const user = useAuthStore((state) => state.user);
  const { firstName, surname } = user || {};

  return (
    <Box
      w='full'
      bg='white'
      boxShadow='0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'
      borderRadius='md'
      px='16px'
      py='12px'
      my='15px'
    >
      <Flex gap='15px' pb='12px'>
        <Avatar src={DEFAULT_IMAGE} />
        <Input variant='filled' placeholder={INPUT_PLACEHOLDER.POST} onClick={onOpen} />
      </Flex>
      <Divider />
      <Flex justifyContent='space-around' pt='12px'>
        <Button variant='unstyled' leftIcon={<LiveIcon />} px='30px' cursor='not-allowed'>
          live video
        </Button>
        <Button variant='unstyled' leftIcon={<PhotoIcon />} px='30px' onClick={onOpen}>
          photo/video
        </Button>
        <Button variant='unstyled' leftIcon={<SmileIcon />} px='30px' cursor='not-allowed'>
          feeling/activity
        </Button>
      </Flex>

      {isOpen && (
        <Suspense fallback={<LoadingIndicator />}>
          <CreatePostModal isOpen={isOpen} userName={`${firstName} ${surname}`} onClose={onClose} />
        </Suspense>
      )}
    </Box>
  );
};

export default CreatePost;
