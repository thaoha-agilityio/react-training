import { useNavigate } from 'react-router-dom';
import { memo, useCallback } from 'react';

import { Flex } from '@chakra-ui/react';

// Components
import CardItem from '@components/CardItem';

// Types
import { IProduct } from '@types';

// Stores
import { useCartStore, useMessageStores } from '@stores';
import { ROUTES, STATUSES, SUCCESS_MESSAGES } from '@constants';
import { useMutationDeleteProduct, useCustomToast } from '@hooks';

type ProductsProps = {
  products: IProduct[][];
};

export const Products = memo(({ products }: ProductsProps) => {
  const { carts, setCarts } = useCartStore();
  const { showToast } = useCustomToast();

  // Initialize navigate function
  const navigate = useNavigate();

  // Get the mutate from useMutationDeleteProduct hook
  const { mutate: deleteProduct, isLoading } = useMutationDeleteProduct();

  // Get message from store
  const { setErrorMessage } = useMessageStores();

  // handle Delete Item
  const handleDeleteItem = useCallback(
    (id: string) => {
      return deleteProduct(id, {
        onError: (error) => {
          setErrorMessage(error.message);
        },
        onSuccess: () => {
          showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.DELETED);
        },
      });
    },
    [deleteProduct, setErrorMessage],
  );

  // Handle navigate to detail page
  const handleShowDetail = useCallback(
    (id: string) => {
      navigate(ROUTES.DETAIL_PRODUCT_PARAMS + id);
    },
    [navigate],
  );

  // Handle navigate to edit page
  const handleShowEditForm = useCallback(
    (id: string) => {
      navigate(ROUTES.EDIT_PRODUCT_PARAMS + id);
    },
    [navigate],
  );

  // Handle add product to cart
  const handleAddToCart = useCallback(
    (product: IProduct) => {
      const existedProductIndex = carts?.findIndex((cart) => cart.id === product.id);

      if (existedProductIndex !== -1) {
        const newCarts = [...carts];
        newCarts[existedProductIndex].quantity += 1;

        setCarts(newCarts);
      } else {
        setCarts([...carts, { ...product, quantity: 1 }]);
      }

      showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.ADD_TO_CART);
    },
    [carts, setCarts, showToast],
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
