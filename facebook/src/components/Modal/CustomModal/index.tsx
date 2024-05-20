import { ReactNode, memo } from 'react';
import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface CustomModalProps {
  isOpen: boolean;
  title: string;
  size?: string;
  children: ReactNode;
  childrenModalFooter?: ReactNode;
  onClose: () => void;
}

const CustomModal = memo(
  ({ isOpen, children, childrenModalFooter, title, onClose, size = 'md' }: CustomModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose} size={size} scrollBehavior='inside'>
      <ModalOverlay />
      <ModalContent maxH={childrenModalFooter ? '100vh' : 'auto'}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <Divider color='input.borderColor' w='100%' />
        <ModalBody overflowY='auto' p={0}>
          {children}
        </ModalBody>
        {!!childrenModalFooter && <ModalFooter>{childrenModalFooter}</ModalFooter>}
      </ModalContent>
    </Modal>
  ),
);

export default CustomModal;
