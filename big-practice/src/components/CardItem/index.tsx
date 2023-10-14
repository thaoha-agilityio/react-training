import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, InfoIcon } from '@chakra-ui/icons';

// Types
import { IProduct } from '@types';

type CardItemProps = {
  item: IProduct;
  isAction?: boolean;
  onEditItem?: (id: string) => void;
  onShowDetailItem?: (id: string) => void;
  onAddToCart?: (product: IProduct) => void;
  onOpen?: (id: string) => void;
};

const CardItem = ({
  item,
  onAddToCart,
  onEditItem,
  onShowDetailItem,
  onOpen,
  isAction,
}: CardItemProps) => {
  const { id, name, description, price, image } = item;

  const handleOpen = useCallback(() => {
    onOpen?.(id);
  }, [id, onOpen]);

  const handleAddToCart = useCallback(() => {
    onAddToCart?.(item);
  }, [item, onAddToCart]);

  const handleShowDetail = useCallback(() => {
    onShowDetailItem?.(id);
  }, [id, onShowDetailItem]);

  const handleShowEditForm = useCallback(() => {
    onEditItem?.(id);
  }, [id, onEditItem]);

  return (
    <Flex pos='relative'>
      <Card>
        <CardBody role='group'>
          <Image src={image} alt='card-item' />
          <Box display={isAction ? 'block' : 'none'}>
            <Box
              zIndex={1}
              pos='absolute'
              bgColor='gray.250'
              opacity={0.72}
              top={0}
              right={0}
              left={0}
              bottom={0}
              _groupHover={{ display: 'block' }}
              display='none'
            />
            <Flex
              zIndex={9}
              pos='absolute'
              top={{ base: '120px', md: '160px' }}
              right={{ base: '6px', md: '10px' }}
              _groupHover={{ display: 'flex' }}
              display='none'
              flexDir='column'
              alignItems='center'
              gap='10px'
            >
              <Button
                w={{ base: '120', md: '202px' }}
                h={{ base: '30px', md: '48px' }}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>

              <Flex gap='35px' zIndex={50} justifyContent='center'>
                <Flex alignItems='baseline' gap={{ base: '10px', md: '35px' }}>
                  <Button
                    leftIcon={<DeleteIcon />}
                    color='white'
                    data-testid='delete-btn'
                    variant='unstyled'
                    onClick={handleOpen}
                  >
                    Delete
                  </Button>

                  <Button
                    leftIcon={<EditIcon />}
                    color='white'
                    data-testid='edit-btn'
                    variant='unstyled'
                    onClick={handleShowEditForm}
                  >
                    Edit
                  </Button>

                  <Button
                    leftIcon={<InfoIcon />}
                    color='white'
                    data-testid='detail-btn'
                    variant='unstyled'
                    onClick={handleShowDetail}
                  >
                    Detail
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
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
};

export default memo(CardItem, isEqual);
