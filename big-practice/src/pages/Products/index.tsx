import { Button, Container, Flex, Spinner, Stack, Text } from '@chakra-ui/react';

// Components
import Banner from '@components/Banner';
import { CardItem } from '@components/CardItem';

// Constants
import { LIMIT_PRODUCTS, SHOP_CRUMBS } from '@constants';

// Hooks
import { useInfiniteProducts } from '@hooks';

const Products = () => {
  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteProducts(LIMIT_PRODUCTS);

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
              {products?.pages.map((item, index) => (
                <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center' key={index}>
                  {item.map((product) => (
                    <CardItem key={product.id} item={product} />
                  ))}
                </Flex>
              ))}

              {isLoading && <Spinner />}
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
    </>
  );
};

export default Products;
