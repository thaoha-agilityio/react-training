import { DeleteIcon } from '@assets/icons';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { IProductCart } from '@types';

type CardItemProps = {
  productCard: IProductCart;
};

const CartItem = ({ productCard }: CardItemProps) => {
  const { image, price, name, quantity } = productCard || {};

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
      <Text>Rs. 250,000.00</Text>
      <IconButton variant='unstyled' aria-label='delete-btn' icon={<DeleteIcon />} />
    </Flex>
  );
};

export default CartItem;
