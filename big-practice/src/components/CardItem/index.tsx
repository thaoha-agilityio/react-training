import { memo, useCallback } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

// Types
import { IProduct } from '@types';

type CardItemProps = {
  item: IProduct;
  onShowDetail: (id: string) => void;
  onShowEditForm: (id: string) => void;
};

export const CardItem = memo(
  ({
    item: { id, name, description, price, image },
    onShowDetail,
    onShowEditForm,
  }: CardItemProps) => {
    // Handle navigate to detail page
    const handleShowDetail = useCallback(() => {
      onShowDetail(id);
    }, [id, onShowDetail]);

    // Handle navigate to edit page
    const handleShowEditForm = useCallback(() => {
      onShowEditForm(id);
    }, [onShowEditForm, id]);

    return (
      <Flex>
        <Card>
          <CardBody pos='relative'>
            <Image src={image} alt='card-item' />
            <Flex
              gap={2}
              pos='absolute'
              top={2}
              right={2}
              _groupHover={{ display: 'flex' }}
              // display='none'
            >
              <IconButton aria-label='delete-card' icon={<DeleteIcon />} rounded='xs' />
              <IconButton
                aria-label='delete-card'
                icon={<EditIcon />}
                rounded='xs'
                variant='solid'
                onClick={handleShowEditForm}
              />
            </Flex>
          </CardBody>
          <CardFooter onClick={handleShowDetail}>
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
