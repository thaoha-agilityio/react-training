import { memo } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

type ConfirmModalProps = {
  isOpen: boolean;
  isLoading?: boolean;
  title: string;
  textCancel: string;
  textSubmit: string;
  text?: string;
  onClose: () => void;
  onSubmit: () => void;
};

const ConfirmModal = ({
  title,
  text,
  textCancel,
  textSubmit,
  isLoading,
  isOpen,
  onSubmit,
  onClose,
}: ConfirmModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader fontSize={{ base: 'md', md: 'xl' }}>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text variant='primary'>{text}</Text>
      </ModalBody>
      <ModalFooter>
        <Button mr={3} onClick={onClose} rounded='xs'>
          {textCancel}
        </Button>
        <Button variant='solid' rounded='xs' onClick={onSubmit} isLoading={isLoading}>
          {textSubmit}
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default memo(ConfirmModal);
