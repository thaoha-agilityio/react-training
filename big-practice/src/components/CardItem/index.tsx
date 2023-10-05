import { memo, useCallback } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  IconButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

// Types
import { IProduct } from '@types';
import ConfirmModal from '@components/ConfirmModal';
import { useMutationDeleteProduct } from '@hooks';
import { useMessageStores } from '@stores';
import { SUCCESS_MESSAGES } from '@constants';

type CardItemProps = {
  item: IProduct;
  onShowDetail: (id: string) => void;
  onShowEditForm: (id: string) => void;
};

export const CardItem = memo(
  ({
    item: { id, name, description, price, image },

    onShowDetail,
    onShowEditForm,
  }: CardItemProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Get the mutate from useMutationDeleteProduct hook
    const { mutate, isLoading } = useMutationDeleteProduct();

    const { setErrorMessage, setSuccessMessage, clearErrorMessage } = useMessageStores();

    // handle Delete Item
    const handleDeleteItem = useCallback(() => {
      return mutate(id, {
        onError: (error) => {
          setErrorMessage(error.message);
        },
        onSuccess: () => {
          onClose();
          clearErrorMessage();
          setSuccessMessage(SUCCESS_MESSAGES.DELETED);
          showToast(SUCCESS_MESSAGES.DELETED);
        },
      });
    }, [mutate, onClose, setErrorMessage, setSuccessMessage]);

    // Handle navigate to detail page
    const handleShowDetail = useCallback(() => {
      onShowDetail(id);
    }, [id, onShowDetail]);

    // Handle navigate to edit page
    const handleShowEditForm = useCallback(() => {
      onShowEditForm(id);
    }, [onShowEditForm, id]);

    // TODO: update latter
    const toast = useToast();
    const showToast = (message: string): void => {
      toast({
        position: 'bottom',
        status: 'success',
        title: message,
      });
    };

    return (
      <Flex>
        <Card>
          <CardBody pos='relative'>
            <Image src={image} alt='card-item' />
            <Flex
              gap={2}
              pos='absolute'
              top={2}
              right={2}
              _groupHover={{ display: 'flex' }}
              // display='none'
            >
              <IconButton
                aria-label='delete-card'
                icon={<DeleteIcon />}
                rounded='xs'
                onClick={onOpen}
              />
              <IconButton
                aria-label='delete-card'
                icon={<EditIcon />}
                rounded='xs'
                variant='solid'
                onClick={handleShowEditForm}
              />
            </Flex>
          </CardBody>
          <CardFooter onClick={handleShowDetail}>
            <Stack spacing='8px' maxW={{ base: '160px', md: '260px' }}>
              <Heading fontSize={{ base: 'base', md: 'lg' }}>{name}</Heading>
              <Text
                color='gray.150'
                fontWeight='medium'
                overflow='hidden'
                whiteSpace='nowrap'
                textOverflow='ellipsis'
              >
                {description}
              </Text>
              <Text fontSize={{ base: 'tiny', md: 'md' }}>Rp {price}</Text>
            </Stack>
          </CardFooter>
        </Card>
        <ConfirmModal
          isOpen={isOpen}
          title='Delete Confirmation'
          textCancel='Cancel'
          textSubmit='Yes, Delete'
          text='Are you sure you want to delete this item?'
          onClose={onClose}
          onSubmit={handleDeleteItem}
          isLoading={isLoading}
        />
      </Flex>
    );
  },
);
