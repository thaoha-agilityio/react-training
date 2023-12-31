import { shallow } from 'zustand/shallow';
import { useCallback, useMemo, useState } from 'react';
import { Button, Container, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';

// Components
import Banner from '@components/Banner';
import CartItem from '@components/CartItem';
import ConfirmModal from '@components/ConfirmModal';

// Constants
import { CART_CRUMBS, INITIAL_PRODUCT_CART, NO_RESULT } from '@constants';

//  Stores
import { useCartStore, useProductStore } from '@stores';

// Types
import { ICart, IProductCart } from '@types';

// Helper
import { formatPrice } from '@helpers';

const ShoppingCart = (): JSX.Element => {
  // Initialize isOpen, onOpen, and onClose from useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedId, setSelectedId] = useState<string>('');

  // Get cart, deleteCart from store
  const [cart, deleteCart] = useCartStore((state) => [state.cart, state.deleteCart], shallow);

  // Get products from store
  const [products] = useProductStore((state) => [state.products], shallow);

  // Render cart product
  const getProductCart = useCallback(
    (cart: ICart): IProductCart => {
      const product = products.find((product) => product.id === cart.productId);

      // If the product is not found, return an initial product cart
      if (!product) return INITIAL_PRODUCT_CART;

      const productCart = {
        ...product,
        quantity: cart.quantity,
      };

      return productCart;
    },
    [products],
  );

  // Handle open confirm modal
  const handleOpen = useCallback(
    (id: string) => {
      onOpen();
      setSelectedId(id);
    },
    [onOpen],
  );

  // Handle delete cart
  const handleDeleteCart = useCallback(() => {
    deleteCart(selectedId);

    // Close confirm modal
    onClose();
  }, [deleteCart, selectedId]);

  // Calculate the total price
  const totalPrice = useMemo(() => {
    return cart.reduce((totalPrice, cartItem) => {
      const product = products.find((product) => product.id === cartItem.productId);

      if (product) {
        const productPrice = product.price;
        return totalPrice + productPrice * cartItem.quantity;
      }

      return totalPrice;
    }, 0);
  }, [cart, products]);

  // render checkOut
  const renderCheckout = useMemo(() => {
    return (
      <Stack
        w={{ base: '200px', md: '393px' }}
        h={{ base: '180px', md: '390px' }}
        bg='primary.150'
        alignItems='center'
        pt='10px'
        pb='60px'
        mt={{ base: '20px', md: '0px' }}
      >
        <Text variant='title' fontWeight='bold'>
          Cart Totals
        </Text>
        <Flex w='240px' m='auto' wrap='wrap' gap='40px' alignItems='baseline'>
          <Text variant='primary' fontWeight='medium'>
            Total
          </Text>
          <Text variant='tertiary' color='primary.250' fontWeight='medium'>
            Rs. {formatPrice(totalPrice)}
          </Text>
        </Flex>
        <Button variant='colorPrimary' rounded='xl'>
          Check Out
        </Button>
      </Stack>
    );
  }, [totalPrice]);

  // render CartTile
  const renderCartTitle = useMemo(() => {
    return (
      <Flex
        w={{ base: '370px', md: '817px' }}
        h='55px'
        bg='primary.150'
        justifyContent='space-evenly'
        alignItems='center'
        pl={{ base: '30px', md: '70px' }}
      >
        <Text variant='primary'>Product</Text>
        <Text variant='primary'>Price</Text>
        <Text variant='primary'>Quantity</Text>
        <Text variant='primary'>Subtotal</Text>
      </Flex>
    );
  }, []);

  return (
    <>
      <Banner title='Cart' crumbs={CART_CRUMBS} />
      <Container>
        <Flex justifyContent='space-between' py='30px' wrap='wrap'>
          <Stack spacing='50px' pb='20px'>
            {renderCartTitle}
            {!cart.length ? (
              <Text>{NO_RESULT.CART}</Text>
            ) : (
              cart.map((cart: ICart) => (
                <CartItem
                  key={cart.productId}
                  onOpen={handleOpen}
                  cartItem={getProductCart(cart)}
                />
              ))
            )}
          </Stack>
          {renderCheckout}
        </Flex>
      </Container>

      {isOpen && (
        <ConfirmModal
          isOpen={isOpen}
          title='Delete Confirmation'
          textCancel='Cancel'
          textSubmit='Yes, Delete'
          text='Are you sure you want to delete this item?'
          onClose={onClose}
          onSubmit={handleDeleteCart}
        />
      )}
    </>
  );
};

export default ShoppingCart;
