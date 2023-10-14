import { memo, useCallback, useMemo } from 'react';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';

//  Icons
import { DeleteIcon } from '@assets/icons';

// Types
import { ICart } from '@types';

type CartItemProps = {
  cart: ICart;
  onOpen: (id: string) => void;
};

const CartItem = ({
  cart: { id, image, price, name, quantity },
  onOpen,
}: CartItemProps): JSX.Element => {
  //Handle total amount for each product
  const subTotal = useMemo(() => price * quantity, [price, quantity]);

  const handleOpen = useCallback(() => {
    onOpen(id);
  }, [id, onOpen]);

  return (
    <Flex alignItems='center' gap={{ base: '20px', md: '50px' }} pt='20px'>
      <Box>
        <Image w='111px' h='90px' rounded='xs' src={image} alt='image-product' />
      </Box>
      <Text variant='cart' width='130px'>
        {name}
      </Text>
      <Text variant='cart'>Rs. {price}</Text>
      <Box w={{ base: '50px', md: '100px' }}>
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
        onClick={handleOpen}
      />
    </Flex>
  );
};

export default memo(CartItem);
