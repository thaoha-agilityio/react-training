import { useNavigate } from 'react-router-dom';
import { memo, useCallback } from 'react';

import { Flex } from '@chakra-ui/react';

// Components
import CardItem from '@components/CardItem';

// Types
import { IProduct } from '@types';

// Stores
import { useCartStore, useMessageStores } from '@stores';

import { ROUTES, SUCCESS_MESSAGES } from '@constants';

// Hooks
import { useMutationDeleteProduct, useCustomToast } from '@hooks';

// Constants
import { STATUSES } from '@types';

type ProductsProps = {
  products: IProduct[][];
};

export const Products = memo(({ products }: ProductsProps) => {
  const { cart, setCart } = useCartStore();
  const { showToast } = useCustomToast();

  // Initialize navigate function
  const navigate = useNavigate();

  // Get the mutate from useMutationDeleteProduct hook
  const { mutate: deleteProduct, isLoading } = useMutationDeleteProduct();

  // Get message from store
  const { setErrorMessage } = useMessageStores();

  // handle Delete Item
  const handleDeleteItem = useCallback((id: string) => {
    return deleteProduct(id, {
      onError: (error) => {
        setErrorMessage(error.message);
      },
      onSuccess: () => {
        showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.DELETED);
      },
    });
  }, []);

  // Handle navigate to detail page
  const handleShowDetail = useCallback((id: string) => {
    navigate(ROUTES.DETAIL_PRODUCT_PARAMS + id);
  }, []);

  // Handle navigate to edit page
  const handleShowEditForm = useCallback((id: string) => {
    navigate(ROUTES.EDIT_PRODUCT_PARAMS + id);
  }, []);

  // Handle add product to cart
  const handleAddToCart = useCallback(
    (product: IProduct) => {
      const existedProductIndex = cart?.findIndex((cart) => cart.id === product.id);

      if (existedProductIndex !== -1) {
        const newCarts = [...cart];
        newCarts[existedProductIndex].quantity += 1;

        setCart(newCarts);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }

      showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.ADD_TO_CART);
    },
    [cart],
  );

  return (
    <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center' data-testid='products'>
      {products.map((item, index) => (
        <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center' key={index}>
          {item.map((product) => (
            <CardItem
              isLoading={isLoading}
              key={product.id}
              item={product}
              onDeleteItem={handleDeleteItem}
              onShowDetailItem={handleShowDetail}
              onEditItem={handleShowEditForm}
              onAddToCart={handleAddToCart}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
});

export default memo(Products);
