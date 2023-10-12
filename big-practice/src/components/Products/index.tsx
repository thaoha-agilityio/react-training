import { memo } from 'react';

import { Flex } from '@chakra-ui/react';

// Components
import CardItem from '@components/CardItem';

// Types
import { IProduct } from '@types';

type ProductsProps = {
  products: IProduct[][];
  onOpen: (id: string) => void;
  onEditItem: (id: string) => void;
  onShowDetailItem: (id: string) => void;
  onAddToCart: (product: IProduct) => void;
};

export const Products = memo(
  ({ products, onAddToCart, onEditItem, onShowDetailItem, onOpen }: ProductsProps) => {
    return (
      <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center' data-testid='products'>
        {products.map((item, index) => (
          <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center' key={index}>
            {item.map((product) => (
              <CardItem
                key={product.id}
                item={product}
                onShowDetailItem={onShowDetailItem}
                onEditItem={onEditItem}
                onAddToCart={onAddToCart}
                onOpen={onOpen}
              />
            ))}
          </Flex>
        ))}
      </Flex>
    );
  },
);

export default memo(Products);
