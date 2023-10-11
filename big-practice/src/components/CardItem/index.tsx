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
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, InfoIcon } from '@chakra-ui/icons';
import ConfirmModal from '@components/ConfirmModal';

// Types
import { IProduct } from '@types';

type CardItemProps = {
  item: IProduct;
  isLoading?: boolean;
  onDeleteItem: (id: string) => void;
  onEditItem: (id: string) => void;
  onShowDetailItem: (id: string) => void;
  onAddToCart: (product: IProduct) => void;
};

const CardItem = memo(
  ({ item, onAddToCart, onDeleteItem, onEditItem, onShowDetailItem, isLoading }: CardItemProps) => {
    const { id, name, description, price, image } = item;
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeleteItem = useCallback(() => {
      onDeleteItem(id);
    }, [id, onDeleteItem]);

    const handleAddToCart = useCallback(() => {
      onAddToCart(item);
    }, [item, onAddToCart]);

    const handleShowDetail = useCallback(() => {
      onShowDetailItem(id);
    }, [id, onShowDetailItem]);

    const handleShowEditForm = useCallback(() => {
      onEditItem(id);
    }, [id, onEditItem]);

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
            <Flex
              zIndex={9}
              pos='absolute'
              top='160px'
              right='20px'
              _groupHover={{ display: 'flex' }}
              display='none'
              flexDir='column'
              alignItems='center'
              gap='10px'
            >
              <Button w='202px' h='48px' onClick={handleAddToCart}>
                Add to cart
              </Button>

              <Flex gap='35px' zIndex={50} justifyContent='center'>
                <Flex alignItems='baseline' gap={'20px'}>
                  <Button
                    leftIcon={<DeleteIcon />}
                    color='white'
                    data-testid='delete-btn'
                    variant='unstyled'
                    onClick={onOpen}
                  >
                    Delete
                  </Button>

                  <Button
                    leftIcon={<EditIcon />}
                    color='white'
                    data-testid='edit-btn'
                    variant='unstyled'
                    onClick={handleShowEditForm}
                  >
                    Edit
                  </Button>

                  <Button
                    leftIcon={<InfoIcon />}
                    color='white'
                    data-testid='detail-btn'
                    variant='unstyled'
                    onClick={handleShowDetail}
                  >
                    Detail
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
          <CardFooter>
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

export default memo(CardItem);
