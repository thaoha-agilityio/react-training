import { useCallback, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useParams } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';

// Components
import CardDetails from '@components/CardDetails';

// Hooks
import { useFetchProductDetail } from '@hooks';

// Layouts
import PageLayout from '@layouts/PageLayout';

// Stores
import { useCartStore, useProductStore } from '@stores';

const ProductDetails = () => {
  const { uuid = '' } = useParams();

  const product = useProductStore((state) => state.product);

  const { isFetching } = useFetchProductDetail(uuid);

  const [count, setCount] = useState<number>(1);

  const [carts, setCarts] = useCartStore((state) => [state.carts, state.setCarts], shallow);

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
    const existedProductIndex = carts?.findIndex((cart) => cart.id === uuid);

    if (existedProductIndex !== -1) {
      const newCarts = [...carts];
      newCarts[existedProductIndex].quantity += count;

      return setCarts(newCarts);
    }

    return setCarts([...carts, { ...product, quantity: count }]);
  }, [carts, count, product, setCarts, uuid]);

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
