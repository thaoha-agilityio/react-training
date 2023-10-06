import { Button, Flex, Stack, Text } from '@chakra-ui/react';

// Components
import Banner from '@components/Banner';
import CartItem from '@components/CartItem';

// Layout
import PageLayout from '@layouts/PageLayout';

// Constants
import { CART_CRUMBS } from '@constants';

//  Stores
import { useCartStore } from '@stores';

// Hooks
import { useFetchCarts } from '@hooks';

// Types
import { ICart } from '@types';

const ShoppingCart = () => {
  const carts = useCartStore((state) => state.carts);
  const { isError, error } = useFetchCarts();

  return (
    <>
      <Banner title='Cart' crumbs={CART_CRUMBS} />
      <PageLayout>
        <Flex justifyContent='space-between' py='30px'>
          <Stack spacing='50px'>
            <Flex
              w='817px'
              h='55px'
              bg='yellow.150'
              justifyContent='space-evenly'
              alignItems='center'
              pl='70px'
            >
              <Text>Product</Text>
              <Text>Price</Text>
              <Text>Quantity</Text>
              <Text>Subtotal</Text>
            </Flex>

            {isError ? (
              <Text>{error.isAxiosError}</Text>
            ) : (
              carts.map((cart: ICart) => <CartItem cart={cart} key={cart.cartId} />)
            )}
          </Stack>
          <Stack w='393px' h='390px' bg='yellow.150' alignItems='center' pt='10px' pb='60px'>
            <Text variant='title' fontWeight='bold'>
              Cart Totals
            </Text>
            <Flex w='240px' m='auto' wrap='wrap' gap='40px' alignItems='baseline'>
              <Text variant='primary' fontWeight='medium'>
                Subtotal
              </Text>
              <Text variant='detail'>Rs. 250,000.00</Text>
              <Text variant='primary' fontWeight='medium'>
                Total
              </Text>
              <Text variant='tertiary' color='yellow.250' fontWeight='medium'>
                Rs. 250,000.00
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
