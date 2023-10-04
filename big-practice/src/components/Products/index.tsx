import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

// Components
import { CardItem } from '@components/CardItem';

// Types
import { IProduct } from '@types';
import { ROUTES } from '@constants';

type ProductsProps = {
  products: IProduct[];
};

export const Products = memo(({ products }: ProductsProps) => {
  const navigate = useNavigate();

  const handleShowDetail = useCallback(
    (id: string) => {
      navigate(ROUTES.DETAIL_PRODUCT_PARAMS + id);
    },
    [navigate],
  );

  return (
    <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center' data-testid='products'>
      {products.map((product: IProduct) => (
        <CardItem
          key={product.id}
          item={product}
          onShowDetail={() => handleShowDetail(product.id)}
        />
      ))}
    </Flex>
  );
});
