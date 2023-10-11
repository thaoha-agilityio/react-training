import { useMemo } from 'react';
import { Button, Flex, Stack, Text } from '@chakra-ui/react';

// Components
import Banner from '@components/Banner';
import CartItem from '@components/CartItem';

// Layout
import PageLayout from '@layouts/PageLayout';

// Constants
import { CART_CRUMBS, NOTICE_MESSAGE } from '@constants';

//  Stores
import { useCartStore } from '@stores';

// Types
import { ICart } from '@types';

// Helper
import { formatPrice } from '@helpers';

const ShoppingCart = () => {
  const { carts, deleteCart } = useCartStore();

  const getTotalPrice = useMemo(
    (): number =>
      carts.reduce((totalPrice: number, cart) => totalPrice + cart.price * cart.quantity, 0),
    [carts],
  );

  return (
    <>
      <Banner title='Cart' crumbs={CART_CRUMBS} />
      <PageLayout>
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

            {!carts.length ? (
              <Text>{NOTICE_MESSAGE}</Text>
            ) : (
              carts.map((cart: ICart) => (
                <CartItem cart={cart} key={cart.id} onDeleteCart={deleteCart} />
              ))
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
                Rs. {formatPrice(getTotalPrice)}
              </Text>
            </Flex>
            <Button variant='colorPrimary' rounded='xl'>
              Check Out
            </Button>
          </Stack>
        </Flex>
      </PageLayout>
    </>
  );
};

export default ShoppingCart;
