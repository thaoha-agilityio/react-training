import { memo, useCallback, useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

type QuantityProps = {
  initialCount: number;
  onQuantityChange: (qty: number) => void;
};

const Quantity = ({ initialCount, onQuantityChange }: QuantityProps): JSX.Element => {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = useCallback(() => {
    const updateCount = count + 1;

    setCount(updateCount);
    onQuantityChange(updateCount);
  }, [count, onQuantityChange]);

  const handleDecrease = useCallback(() => {
    if (count <= 1) return;

    const updateCount = count - 1;

    setCount(updateCount);
    onQuantityChange(updateCount);
  }, [count, onQuantityChange]);

  return (
    <Flex
      flexDir='row'
      alignItems='center'
      borderColor='secondary.100'
      justifyContent='space-between'
      rounded='md'
      border='1px'
      w={{ base: '80px', md: '123px' }}
      h={{ base: '40px', md: '64px' }}
    >
      <Button variant='unstyled' onClick={handleDecrease}>
        -
      </Button>
      <Text fontSize={{ base: 'xs', md: 'sm' }}>{count}</Text>
      <Button variant='unstyled' onClick={handleIncrease}>
        +
      </Button>
    </Flex>
  );
};

export default memo(Quantity);
