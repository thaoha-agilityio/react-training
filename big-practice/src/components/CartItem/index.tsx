import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';

//  Icons
import { DeleteIcon } from '@assets/icons';

// Types
import { ICart, IProduct } from '@types';

//  Stores
import { useFetchProducts } from '@hooks';

type CardItemProps = {
  cart: ICart;
};

const CartItem = ({ cart }: CardItemProps) => {
  const { productId, quantity } = cart || {};

  const { data: products } = useFetchProducts({ limit: 10 });

  const [productCard, setProductCard] = useState<IProduct>();
  const { image, price, name } = productCard || {};

  // Find product
  const getCartByProductId = useCallback(() => {
    const product = products?.find((item: IProduct) => item.id === productId);

    setProductCard(product);
  }, []);

  //Handle total amount for each product
  const subTotal = useMemo(() => (price ? price * quantity : 0), [price, quantity]);

  useEffect(() => {
    getCartByProductId();
  }, []);

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
      <IconButton variant='unstyled' aria-label='delete-btn' icon={<DeleteIcon />} />
    </Flex>
  );
};

export default CartItem;
