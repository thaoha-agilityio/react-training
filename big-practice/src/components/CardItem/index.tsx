import { Link } from 'react-router-dom';
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
  Button,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import ConfirmModal from '@components/ConfirmModal';

// Types
import { IProduct } from '@types';

// Hooks
import { useMutationDeleteProduct } from '@hooks';

// Stores
import { useMessageStores } from '@stores';

// Constants
import { ROUTES, SUCCESS_MESSAGES } from '@constants';

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
      <Flex pos='relative'>
        <Card>
          <CardBody role='group'>
            <Image src={image} alt='card-item' />
            <Box
              zIndex={1}
              pos='absolute'
              bgColor='gray.250'
              opacity={0.72}
              top={0}
              right={0}
              left={0}
              bottom={0}
              _groupHover={{ display: 'block' }}
              display='none'
            />
            <Stack
              zIndex={9}
              pos='absolute'
              top='160px'
              right='40px'
              _groupHover={{ display: 'flex' }}
              display='none'
            >
              <Button w='202px' h='48px' as={Link} to={ROUTES.SHOPPING_CART}>
                Add to cart
              </Button>

              <Flex gap='35px' zIndex={50} justifyContent='center'>
                <Flex alignItems='baseline'>
                  <IconButton
                    variant='unstyled'
                    aria-label='delete-card'
                    icon={<DeleteIcon />}
                    rounded='xs'
                    onClick={onOpen}
                    color='white'
                  />
                  <Text color='white'>Delete</Text>
                </Flex>
                <Flex alignItems='baseline' color='white'>
                  <IconButton
                    aria-label='delete-card'
                    icon={<EditIcon />}
                    rounded='xs'
                    variant='unstyled'
                    onClick={handleShowEditForm}
                  />
                  <Text color='white'>Edit</Text>
                </Flex>
              </Flex>
            </Stack>
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
