import { shallow } from 'zustand/shallow';
import { memo } from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Icons
import { ShoppingCartIcon } from '@assets/icons';

// Constants
import { ROUTES } from '@constants';

// Stores
import { useCartStore } from '@stores';

const ShoppingCart = () => {
  const [cart] = useCartStore((state) => [state.cart], shallow);

  return (
    <Box pos='relative'>
      <Link to={ROUTES.SHOPPING_CART}>
        <ShoppingCartIcon />

        {cart.length > 0 && (
          <Box
            pos='absolute'
            color='gray.600'
            bg='yellow.250'
            rounded='50%'
            w='20px'
            h='19px'
            textAlign='center'
            top='15px'
            left='14px'
            fontSize='xs'
          >
            {cart.length}
          </Box>
        )}
      </Link>
    </Box>
  );
};

export default memo(ShoppingCart);
