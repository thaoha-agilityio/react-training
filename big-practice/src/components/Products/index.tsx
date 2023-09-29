import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import { CardItem } from '@components/CardItem';

// Types
import { IProduct } from '@types';

type ProductsProps = {
  products: IProduct[];
};

export const Products = memo(({ products }: ProductsProps) => {
  return (
    <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center' data-testid='products'>
      {products.map((product: IProduct) => (
        <CardItem key={product.id} item={product} />
      ))}
    </Flex>
  );
});
