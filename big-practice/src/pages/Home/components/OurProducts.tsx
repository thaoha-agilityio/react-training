import { Flex, Heading, Spinner, Stack, Text } from '@chakra-ui/react';

// Components
import Products from '@components/Products';

// Constants
import { LIMIT_PRODUCTS } from '@constants';

// Custom hooks
import { useInfiniteProducts } from '@hooks/useProduct';

export const OurProducts = () => {
  const { data: products, isLoading, isError, error } = useInfiniteProducts(LIMIT_PRODUCTS);

  return (
    <Stack as='section' my='50px' justifyContent='center'>
      <Heading
        as='h3'
        fontSize={{ base: 'lg', md: '3xl' }}
        color='gray.250'
        fontWeight='bolder'
        textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        textAlign='center'
      >
        Our Products
      </Heading>
      <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center'>
        {/* TODO: update latter */}
        {isError ? <Text>{error.message}</Text> : <Products products={products} />}
        {isLoading && <Spinner />}
      </Flex>
    </Stack>
  );
};
