import { shallow } from 'zustand/shallow';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Flex, Spinner, Stack, Text, useDisclosure } from '@chakra-ui/react';

// Components
import { ConfirmModal, Products } from '@components';
import Banner from '@components/Banner';

// Constants
import { LIMIT_PRODUCTS, SHOP_CRUMBS, ROUTES, SUCCESS_MESSAGES, NO_RESULT } from '@constants';

// Hooks
import { useInfiniteProducts, useMutationDeleteProduct, useCustomToast } from '@hooks';

// Stores
import { useCartStore } from '@stores';

// Constants
import { IProduct, STATUSES } from '@types';

const Shop = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedId, setSelectedId] = useState('');

  const {
    data: products,
    hasNextPage,
    isLoading: isLoadingProduct,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteProducts(LIMIT_PRODUCTS);

  const [addToCart] = useCartStore((state) => [state.addToCart], shallow);

  const { showToast } = useCustomToast();

  // Initialize navigate function
  const navigate = useNavigate();

  // Get the mutate from useMutationDeleteProduct hook
  const { mutate: deleteProduct, isLoading: isLoadingSubmit } = useMutationDeleteProduct();

  // Handle open Modal
  const handleOpen = useCallback((id: string) => {
    onOpen();
    setSelectedId(id);
  }, []);

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
  }, [selectedId]);

  // Handle navigate to detail page
  const handleShowDetail = useCallback((id: string) => {
    navigate(ROUTES.DETAIL_PRODUCT_PARAMS + id);
  }, []);

  // Handle navigate to edit page
  const handleShowEditForm = useCallback((id: string) => {
    navigate(ROUTES.EDIT_PRODUCT_PARAMS + id);
  }, []);

  // Handle add product to cart
  const handleAddToCart = useCallback((product: IProduct) => {
    addToCart(product.id);
    showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.ADD_TO_CART);
  }, []);

  return (
    <>
      <Banner title='Shop' crumbs={SHOP_CRUMBS} />
      <Container maxW='container.xl'>
        <Stack m='auto' spacing='40px' py='30px'>
          {!products.length ? (
            <Text>{NO_RESULT.PRODUCTS}</Text>
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

      {isOpen && (
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
      )}
    </>
  );
};

export default Shop;
