import { ReactNode, memo } from 'react';
import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface CustomModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  size?: string;
  onClose: () => void;
}

const CustomModal = memo(({ isOpen, children, title, onClose, size = 'md' }: CustomModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} size={size}>
    <ModalOverlay />
    <ModalContent maxH='100vh'>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <Divider color='input.borderColor' w='100%' />
      <ModalBody p={0} overflowY='auto'>
        {children}
      </ModalBody>
    </ModalContent>
  </Modal>
));

export default CustomModal;
