import { memo } from 'react';
import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import isEqual from 'react-fast-compare';

// Components
import Quantity from '@components/Quantity';

// Types
import { IProduct } from '@types';

type CardDetailProps = {
  card: IProduct;
  initialCount: number;
  onAddToCart: () => void;
  onQuantityChange: (qty: number) => void;
};

const CardDetails = ({
  card: { name, description, price, image, category },
  initialCount,
  onAddToCart,
  onQuantityChange,
}: CardDetailProps): JSX.Element => (
  <Box py='35px'>
    <Flex justifyContent='space-around' gap='10px'>
      <Stack w='424px'>
        <Image alt='card-image' src={image} />
      </Stack>
      <Stack w='420px' spacing='25px'>
        <Text variant='title' textTransform='capitalize'>
          {name}
        </Text>
        <Text variant='secondary' color='gray.100'>
          Rs. {price}
        </Text>
        <Text fontSize='tiny'>{description}</Text>
        <Flex justifyContent='space-between' gap='10px' alignContent='baseline'>
          <Quantity onQuantityChange={onQuantityChange} initialCount={initialCount} />
          <Button variant='colorPrimary' onClick={onAddToCart}>
            Add To Cart
          </Button>
        </Flex>
        <Stack borderTop='1px' borderColor='gray.350' pt='40px'>
          <Flex gap='20px'>
            <Box w='75px'>
              <Text variant='detail'>SKU</Text>
            </Box>
            <Text variant='detail'>: SS001</Text>
          </Flex>
          <Flex gap='20px'>
            <Box w='75px'>
              <Text variant='detail'>Category</Text>
            </Box>
            <Text variant='detail'>: {category}</Text>
          </Flex>
          <Flex gap='20px'>
            <Box w='75px'>
              <Text variant='detail'>Tags</Text>
            </Box>
            <Text variant='detail'>: Sofa, Chair</Text>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  </Box>
);

export default memo(CardDetails, isEqual);
