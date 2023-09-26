import { Button, Flex, Text } from '@chakra-ui/react';

type QuantityProps = {
  count?: number;
  onIncreaseProduct: () => void;
  onDecreaseProduct: () => void;
};

export const Quantity = ({ count = 1, onIncreaseProduct, onDecreaseProduct }: QuantityProps) => (
  <Flex
    flexDir='row'
    alignItems='center'
    borderColor='gray.100'
    justifyContent='space-between'
    rounded='md'
    border='1px'
    w={{ base: '80px', md: '123px' }}
    h={{ base: '40px', md: '64px' }}
  >
    <Button variant='unstyled' onClick={onIncreaseProduct}>
      +
    </Button>
    <Text fontSize={{ base: 'xs', md: 'sm' }}>{+count}</Text>
    <Button variant='unstyled' onClick={onDecreaseProduct}>
      -
    </Button>
  </Flex>
);
