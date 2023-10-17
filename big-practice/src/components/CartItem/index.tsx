import { shallow } from 'zustand/shallow';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';

//  Icons
import { DeleteIcon } from '@assets/icons';

// Types
import { ICart, IProduct } from '@types';

// Stores
import { useProductStore } from '@stores';

// Constants
import { INITIAL_PRODUCT } from '@constants';

type CartItemProps = {
  cart: ICart;
  onOpen: (id: string) => void;
};

const CartItem = ({ cart: { productId, quantity }, onOpen }: CartItemProps): JSX.Element => {
  const [products] = useProductStore((state) => [state.products], shallow);

  const [product, setProduct] = useState<IProduct>(INITIAL_PRODUCT);

  // get the product from the store by productId
  const getCartBytId = useCallback(() => {
    const currentProduct = products.find((product) => product.id === productId);

    if (currentProduct) setProduct(currentProduct);
  }, [productId, products]);

  //Handle total amount for each product
  const subTotal = useMemo(() => product.price * quantity, [product.price, quantity]);

  const handleOpen = useCallback(() => {
    onOpen(productId);
  }, [productId, onOpen]);

  useEffect(() => {
    getCartBytId();
  }, [getCartBytId]);

  return (
    <Flex alignItems='center' gap={{ base: '20px', md: '50px' }} pt='20px'>
      <Box>
        <Image w='111px' h='90px' rounded='xs' src={product.image} alt='image-product' />
      </Box>
      <Text variant='cart' width='130px'>
        {product.name}
      </Text>
      <Text variant='cart'>Rs. {product.price}</Text>
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
