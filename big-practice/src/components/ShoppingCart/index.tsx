import { memo } from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Icons
import { ShoppingCartIcon } from '@assets/icons';

// Constants
import { ROUTES } from '@constants';

type ShoppingCartProps = {
  numberOfItems: number;
};

const ShoppingCart = ({ numberOfItems }: ShoppingCartProps): JSX.Element => {
  return (
    <Box pos='relative'>
      <Link to={ROUTES.SHOPPING_CART} aria-label='Cart'>
        <ShoppingCartIcon />

        {numberOfItems > 0 && (
          <Box
            pos='absolute'
            color='secondary.600'
            bg='primary.250'
            rounded='50%'
            w='20px'
            h='19px'
            textAlign='center'
            top='15px'
            left='14px'
            fontSize='xs'
          >
            {numberOfItems}
          </Box>
        )}
      </Link>
    </Box>
  );
};

export default memo(ShoppingCart);
