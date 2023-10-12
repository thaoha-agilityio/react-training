import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';

// Components
import CardDetails from '@components/CardDetails';
import Container from '@components/Container';

// Hooks
import { useCustomToast, useFetchProductDetail } from '@hooks';

// Stores
import { useCartStore, useProductStore } from '@stores';

// Constants
import { SUCCESS_MESSAGES } from '@constants';

// types
import { STATUSES } from '@types';

const ProductDetails = () => {
  // Get the 'uuid' parameter from the url
  const { uuid = '' } = useParams();

  // Get function function from custom toast hook
  const { showToast } = useCustomToast();

  // Fetch product details and check if data is being fetched
  const { isFetching } = useFetchProductDetail(uuid);

  // Get carts from carts store
  const { cart, setCart } = useCartStore();

  const product = useProductStore((state) => state.product);

  const [count, setCount] = useState<number>(1);

  const handleChangeQuantity = useCallback((qty: number) => {
    setCount(qty);
  }, []);

  // Handle add product to cart
  const handleAddToCart = useCallback(() => {
    // Check if the product with the given 'uuid' already exists in the cart
    const existedProductIndex = cart?.findIndex((cart) => cart.id === uuid);

    if (existedProductIndex !== -1) {
      const newCart = [...cart];
      newCart[existedProductIndex].quantity += count;

      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: count }]);
    }

    showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.ADD_TO_CART);
  }, [cart, count, setCart, uuid]);

  return (
    <>
      <Box bg='yellow.150' w='full' h='100px'></Box>
      <Container>
        {isFetching ? (
          <Box textAlign='center' pt='20px'>
            <Spinner variant='secondary' />
          </Box>
        ) : (
          <CardDetails
            card={product}
            onAddToCart={handleAddToCart}
            initialCount={count}
            onQuantityChange={handleChangeQuantity}
          />
        )}
      </Container>
    </>
  );
};

export default ProductDetails;
