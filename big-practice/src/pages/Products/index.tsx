import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Flex, Spinner, Stack, Text } from '@chakra-ui/react';

// Components
import { Banner } from '../../components/Banner';
import { Products as ListProduct } from '@components/Products';

// Constants
import { LIMIT_PRODUCTS, MENU, ROUTES } from '@constants';
import { useFetchProducts } from '@hooks/useProduct';
import { useProductStore } from '@stores';

const Products = () => {
  const products = useProductStore((state) => state.products);
  const { error, isLoading, isError } = useFetchProducts({
    pageParam: page,
    limit: LIMIT_PRODUCTS,
  });

  return (
    <>
      <Banner title={MENU[1].title} breadcrumbItems={MENU[1]} />
      <Container maxW='container.xl'>
        <Stack m='auto' spacing='40px'>
          {isError ? <Text>{error.isAxiosError}</Text> : <ListProduct products={products} />}
          {isLoading && <Spinner />}

          <Flex justifyContent='center'>
            <Link to={ROUTES.SHOP}>
              <Button w='245px' h='48px'>
                Show More
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default memo(Products);
