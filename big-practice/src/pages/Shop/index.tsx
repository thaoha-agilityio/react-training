import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Flex, Spinner, Stack, Text, useDisclosure } from '@chakra-ui/react';

import { ConfirmModal, Products } from '@components';

// Components
import Banner from '@components/Banner';

// Constants
import { LIMIT_PRODUCTS, SHOP_CRUMBS, ROUTES, SUCCESS_MESSAGES } from '@constants';

// Hooks
import { useInfiniteProducts, useMutationDeleteProduct, useCustomToast } from '@hooks';

// Stores
import { useCartStore } from '@stores';

// Constants
import { IProduct, STATUSES } from '@types';
import { shallow } from 'zustand/shallow';

const Shop = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedId, setSelectedId] = useState('');

  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isLoading: isLoadingProduct,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteProducts(LIMIT_PRODUCTS);

  // const { cart, setCart } = useCartStore();
  const [cart, setCart] = useCartStore((state) => [state.cart, state.setCart], shallow);

  const { showToast } = useCustomToast();

  // Initialize navigate function
  const navigate = useNavigate();

  // Get the mutate from useMutationDeleteProduct hook
  const { mutate: deleteProduct, isLoading: isLoadingSubmit } = useMutationDeleteProduct();

  const handleOpen = useCallback(
    (id: string) => {
      onOpen();
      setSelectedId(id);
    },
    [onOpen],
  );

  // handle Delete Item
  const handleDeleteItem = useCallback(() => {
    return deleteProduct(selectedId, {
      onError: (error) => {
        showToast(STATUSES.ERROR, error.message);
      },
      onSuccess: () => {
        onClose();
        showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.DELETED);
      },
    });
  }, [deleteProduct, selectedId]);

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
    <>
      <Banner title='Shop' crumbs={SHOP_CRUMBS} />
      <Container maxW='container.xl'>
        <Stack m='auto' spacing='40px' py='30px'>
          {isError ? (
            <Text>{error.message}</Text>
          ) : (
            <>
              {/* TODO: update latter */}
              <Products
                products={products}
                isAction
                onAddToCart={handleAddToCart}
                onShowDetailItem={handleShowDetail}
                onEditItem={handleShowEditForm}
                onOpen={handleOpen}
              />

              {isLoadingProduct && <Spinner />}
              {hasNextPage && (
                <Flex justifyContent='center'>
                  <Button
                    w='245px'
                    h='48px'
                    isLoading={isFetchingNextPage}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                  >
                    Show More
                  </Button>
                </Flex>
              )}
            </>
          )}
        </Stack>
      </Container>
      <ConfirmModal
        isOpen={isOpen}
        title='Delete Confirmation'
        textCancel='Cancel'
        textSubmit='Yes, Delete'
        text='Are you sure you want to delete this item?'
        onClose={onClose}
        onSubmit={handleDeleteItem}
        isLoading={isLoadingSubmit}
      />
    </>
  );
};

export default memo(Shop);
