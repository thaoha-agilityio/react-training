import { Button, Flex, Heading, Spinner, Stack, Text } from '@chakra-ui/react';

// Components
import { Products } from '@components/Products';

// Constants
import { LIMIT_PRODUCTS, ROUTES } from '@constants';

// Custom hooks
import { useFetchProducts } from '@hooks/useProduct';

// Stores
import { useProductStore } from '@stores';
import { Link } from 'react-router-dom';

export const OurProducts = () => {
  const products = useProductStore((state) => state.products);
  const { isLoading, isError, error } = useFetchProducts({ limit: LIMIT_PRODUCTS });

  return (
    <section>
      <Stack my='50px' justifyContent='center'>
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
          {isError ? <Text>{error.isAxiosError}</Text> : <Products products={products} />}
          {isLoading && <Spinner />}
        </Flex>
        <Flex pt='32px' justifyContent='center'>
          <Link to={ROUTES.SHOP}>
            <Button w='245px' h='48px'>
              Show More
            </Button>
          </Link>
        </Flex>
      </Stack>
    </section>
  );
};
