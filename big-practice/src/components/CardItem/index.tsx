import { memo, useCallback } from 'react';
import { Card, CardBody, CardFooter, Flex, Image, Heading, Text, Stack } from '@chakra-ui/react';

// Types
import { IProduct } from '@types';

type CardItemProps = {
  item: IProduct;
  onShowDetail: (id: string) => void;
};

export const CardItem = memo(
  ({ item: { id, name, description, price, image }, onShowDetail }: CardItemProps) => {
    const handleShowDetail = useCallback(() => {
      onShowDetail(id);
    }, [id, onShowDetail]);

    return (
      <Flex>
        <Card onClick={handleShowDetail}>
          <CardBody>
            <Image src={image} alt='card-item' />
          </CardBody>
          <CardFooter>
            <Stack spacing='8px' maxW={{ base: '160px', md: '260px' }}>
              <Heading fontSize={{ base: 'base', md: 'lg' }}>{name}</Heading>
              <Text
                color='gray.150'
                fontWeight='medium'
                overflow='hidden'
                whiteSpace='nowrap'
                textOverflow='ellipsis'
              >
                {description}
              </Text>
              <Text fontSize={{ base: 'tiny', md: 'md' }}>Rp {price}</Text>
            </Stack>
          </CardFooter>
        </Card>
      </Flex>
    );
  },
);
