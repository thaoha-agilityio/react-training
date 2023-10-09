import { useMemo } from 'react';
import { Box, Flex, IconButton, Image, Text, useDisclosure } from '@chakra-ui/react';

//  Icons
import { DeleteIcon } from '@assets/icons';

// Types
import { ICart } from '@types';

//  Component
import ConfirmModal from '@components/ConfirmModal';

type CardItemProps = {
  cart: ICart;
  onDeleteCart: () => void;
};

const CartItem = ({ cart: { image, price, name, quantity }, onDeleteCart }: CardItemProps) => {
  // Initialize isOpen, onOpen, and onClose from useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Handle total amount for each product
  const subTotal = useMemo(() => price * quantity, [price, quantity]);

  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Box>
        <Image w='111px' h='90px' rounded='xs' src={image} alt='image-product' />
      </Box>
      <Text variant='detail'>{name} </Text>
      <Text variant='detail'>Rs. {price}</Text>
      <Text border='1px solid' borderRadius='xs' w='32px' h='32px' textAlign='center' pt='5px'>
        {quantity}
      </Text>
      <Text>Rs. {subTotal}</Text>
      <IconButton
        variant='unstyled'
        aria-label='delete-btn'
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
        onSubmit={onDeleteCart}
      />
    </Flex>
  );
};

export default CartItem;
