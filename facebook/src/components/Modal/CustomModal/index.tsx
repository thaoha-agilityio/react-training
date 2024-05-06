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
  onClose: () => void;
}

const CustomModal = memo(({ isOpen, children, title, onClose }: CustomModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <Divider color='input.borderColor' w='100%' />
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </Modal>
));

export default CustomModal;
