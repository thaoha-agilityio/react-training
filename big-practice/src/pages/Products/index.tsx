import { memo, useCallback, useState } from 'react';
import { Spinner, Text } from '@chakra-ui/react';

// Components
import { Banner } from '../../components/Banner';
import { Products as ListProduct } from '@components/Products';

// Constants
import { LIMIT_PRODUCTS, MENU } from '@constants';
import { useFetchProducts } from '@hooks/useProduct';
import { useProductStore } from '@stores';
import { Pagination } from '@components/Pagination';

const Products = () => {
  const [page, setPage] = useState<number>(1);
  const products = useProductStore((state) => state.products);
  const { error, isLoading, isError } = useFetchProducts({
    pageParam: page,
    limit: LIMIT_PRODUCTS,
  });

  const handleNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return (
    <>
      <Banner title={MENU[1].title} breadcrumbItems={MENU[1]} />
      {isError ? <Text>{error.isAxiosError}</Text> : <ListProduct products={products} />}
      {isLoading && <Spinner />}

      {/* TODO: update latter */}
      <Pagination pages={page} onNextPage={handleNextPage} />
    </>
  );
};

export default memo(Products);
