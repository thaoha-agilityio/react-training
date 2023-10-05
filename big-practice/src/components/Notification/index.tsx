import { memo } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';

// Constants
import { STATUSES } from '@constants';

type NotificationProps = {
  status: STATUSES;
  message: string;
};

const Notification = ({ status, message }: NotificationProps) => {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    isVisible && (
      <Box py='24px' maxW='1044px' m='auto'>
        <Alert status={status} justifyContent='space-between' borderRadius='xs'>
          <Flex>
            <AlertIcon />
            <AlertTitle textTransform='capitalize'>{status}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Flex>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      </Box>
    )
  );
};

export default memo(Notification);
