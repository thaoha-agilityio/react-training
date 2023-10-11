import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';

// Components
import CardDetails from '@components/CardDetails';

// Hooks
import { useCustomToast, useFetchProductDetail } from '@hooks';

// Layouts
import PageLayout from '@layouts/PageLayout';

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
  // const [carts, setCarts] = useCartStore((state) => [state.cart, state.setCart], shallow);
  const { cart, setCart } = useCartStore();

  const product = useProductStore((state) => state.product);
  const [count, setCount] = useState<number>(1);

  // handle Decrease Product
  const handleDecreaseProduct = useCallback(() => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  }, [count]);

  // handle Increase Product

  const handleIncreaseProduct = useCallback(() => {
    setCount((prev) => prev + 1);
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
  }, [cart, uuid, count]);

  return (
    <>
      <Box bg='yellow.150' w='full' h='100px'></Box>
      <PageLayout>
        {isFetching ? (
          <Box textAlign='center' pt='20px'>
            <Spinner variant='secondary' />
          </Box>
        ) : (
          <CardDetails
            card={product}
            onAddToCart={handleAddToCart}
            onDecreaseProduct={handleDecreaseProduct}
            onIncreaseProduct={handleIncreaseProduct}
            count={count}
          />
        )}
      </PageLayout>
    </>
  );
};

export default ProductDetails;
