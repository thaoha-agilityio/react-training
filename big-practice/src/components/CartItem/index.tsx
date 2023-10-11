import { memo, useCallback, useMemo } from 'react';
import { Box, Flex, IconButton, Image, Text, useDisclosure } from '@chakra-ui/react';

//  Icons
import { DeleteIcon } from '@assets/icons';

// Types
import { ICart } from '@types';

//  Component
import ConfirmModal from '@components/ConfirmModal';

type CartItemProps = {
  cart: ICart;
  onDeleteCart: (id: string) => void;
};

const CartItem = ({ cart: { id, image, price, name, quantity }, onDeleteCart }: CartItemProps) => {
  // Initialize isOpen, onOpen, and onClose from useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Handle total amount for each product
  const subTotal = useMemo(() => price * quantity, [price, quantity]);

  const handleDeleteCart = useCallback(() => {
    onDeleteCart(id);
  }, [id, onDeleteCart]);

  return (
    <Flex alignItems='center' gap='50px'>
      <Box>
        <Image w='111px' h='90px' rounded='xs' src={image} alt='image-product' />
      </Box>
      <Text variant='cart' width='130px'>
        {name}
      </Text>
      <Text variant='cart'>Rs. {price}</Text>
      <Box w='100px'>
        <Text border='1px solid' borderRadius='xs' w='32px' h='32px' textAlign='center' pt='5px'>
          {quantity}
        </Text>
      </Box>
      <Text variant='cart'>Rs. {subTotal}</Text>
      <IconButton
        variant='unstyled'
        aria-label='delete-btn'
        data-testid='delete-btn'
        icon={<DeleteIcon />}
        onClick={onOpen}
      />

      <ConfirmModal
        isOpen={isOpen}
        title='Delete Confirmation'
        textCancel='Cancel'
        textSubmit='Yes, Delete'
        text='Are you sure you want to delete this item?'
        onClose={onClose}
        onSubmit={handleDeleteCart}
      />
    </Flex>
  );
};

export default memo(CartItem);
