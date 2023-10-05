import { memo, useEffect } from 'react';
import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

// Components
import { Quantity } from '@components/Quantity';
import Notification from '@components/Notification';

// Types
import { IProduct } from '@types';

// Constants
import { STATUSES } from '@constants';
import { useMessageStores } from '@stores';

type CardDetailProps = {
  card: IProduct;
};

const CardDetails = ({ card: { name, description, price, image } }: CardDetailProps) => {
  // Get message form store
  const { clearSuccessMessage, successMessage, errorMessage } = useMessageStores();

  // Clear message when component unMount
  useEffect(() => {
    return () => clearSuccessMessage();
  }, []);

  return (
    <Box as='main' py='35px'>
      {successMessage && !errorMessage && (
        <Notification status={STATUSES.SUCCESS} message={successMessage} />
      )}

      <Flex justifyContent='space-around' gap='10px'>
        <Stack>
          <Image w='424px' h={{ base: '350px', md: '500px' }} alt='card-image' src={image} />
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
            <Quantity />
            <Button variant='colorPrimary'>Add To Cart</Button>
          </Flex>
          <Stack borderTop='1px' borderColor='gray.350' pt='40px'>
            <Flex gap='20px'>
              <Text variant='detail' w='75px'>
                SKU
              </Text>
              <Text variant='detail'>: SS001</Text>
            </Flex>
            <Flex gap='20px'>
              <Text variant='detail' w='75px'>
                Category
              </Text>
              <Text variant='detail'>: Sofas</Text>
            </Flex>
            <Flex gap='20px'>
              <Text variant='detail' w='75px'>
                Tags
              </Text>
              <Text variant='detail'>: Sofa, Chair</Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default memo(CardDetails);
