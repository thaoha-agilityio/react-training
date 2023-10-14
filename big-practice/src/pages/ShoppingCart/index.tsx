import { memo, useCallback, useMemo, useState } from 'react';
import { Button, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';

// Components
import Banner from '@components/Banner';
import CartItem from '@components/CartItem';
import ConfirmModal from '@components/ConfirmModal';

// Layout
import Container from '@components/Container';

// Constants
import { CART_CRUMBS, NOTICE_MESSAGE } from '@constants';

//  Stores
import { useCartStore } from '@stores';

// Types
import { ICart } from '@types';

// Helper
import { formatPrice } from '@helpers';

const ShoppingCart = () => {
  // Initialize isOpen, onOpen, and onClose from useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedId, setSelectedId] = useState<string>('');

  const { cart, deleteCart } = useCartStore();

  const handleOpen = useCallback(
    (id: string) => {
      onOpen();
      setSelectedId(id);
    },
    [onOpen],
  );

  const handleDeleteCart = useCallback(() => {
    deleteCart(selectedId);

    // Close confirm modal
    onClose();
  }, [deleteCart, selectedId]);

  const totalPrice = useMemo(
    (): number =>
      cart.reduce((totalPrice: number, cart) => totalPrice + cart.price * cart.quantity, 0),
    [cart],
  );

  return (
    <>
      <Banner title='Cart' crumbs={CART_CRUMBS} />
      <Container>
        <Flex justifyContent='space-between' py='30px' wrap='wrap'>
          <Stack spacing='50px'>
            <Flex
              w={{ base: '370px', md: '817px' }}
              h='55px'
              bg='yellow.150'
              justifyContent='space-evenly'
              alignItems='center'
              pl={{ base: '30px', md: '70px' }}
            >
              <Text variant='primary'>Product</Text>
              <Text variant='primary'>Price</Text>
              <Text variant='primary'>Quantity</Text>
              <Text variant='primary'>Subtotal</Text>
            </Flex>

            {!cart.length ? (
              <Text>{NOTICE_MESSAGE}</Text>
            ) : (
              cart.map((cart: ICart) => <CartItem cart={cart} key={cart.id} onOpen={handleOpen} />)
            )}
          </Stack>
          <Stack
            w={{ base: '200px', md: '393px' }}
            h={{ base: '180px', md: '390px' }}
            bg='yellow.150'
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
              <Text variant='tertiary' color='yellow.250' fontWeight='medium'>
                Rs. {formatPrice(totalPrice)}
              </Text>
            </Flex>
            <Button variant='colorPrimary' rounded='xl'>
              Check Out
            </Button>
          </Stack>
        </Flex>
      </Container>
      <ConfirmModal
        isOpen={isOpen}
        title='Delete Confirmation'
        textCancel='Cancel'
        textSubmit='Yes, Delete'
        text='Are you sure you want to delete this item?'
        onClose={onClose}
        onSubmit={handleDeleteCart}
      />
    </>
  );
};

export default memo(ShoppingCart);
