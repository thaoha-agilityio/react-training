import { useMemo } from 'react';
import { Container, Flex, Heading, Spinner, Stack, Text } from '@chakra-ui/react';
import { Hero, BrowTheRange, Adverse } from './components';

// Components
import Products from '@components/Products';
import { LIMIT_PRODUCTS } from '@constants';

// Custom hooks
import { useInfiniteProducts } from '@hooks/useProduct';

const Home = () => {
  const { data: products, isLoading, isError, error } = useInfiniteProducts(LIMIT_PRODUCTS);

  const renderProducts = useMemo(() => {
    if (isLoading) return <Spinner />;

    return isError ? <Text>{error.message}</Text> : <Products products={products} />;
  }, [isError, isLoading, products]);

  return (
    <>
      <Hero />
      <Container>
        <BrowTheRange />
        {/* Our Products section */}
        <Stack as='section' my='50px' justifyContent='center'>
          <Heading
            as='h3'
            fontSize={{ base: 'lg', md: '3xl' }}
            color='secondary.250'
            fontWeight='bolder'
            textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
            textAlign='center'
          >
            Our Products
          </Heading>
          <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center'>
            {renderProducts}
          </Flex>
        </Stack>
        <Adverse />
      </Container>
    </>
  );
};

export default Home;
