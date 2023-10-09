import { memo } from 'react';
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
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, InfoIcon } from '@chakra-ui/icons';
import ConfirmModal from '@components/ConfirmModal';

// Types
import { IProduct } from '@types';

type CardItemProps = {
  item: IProduct;
  isLoading?: boolean;
  onDeleteItem: () => void;
  onEditItem: () => void;
  onShowDetailItem: () => void;
  onAddToCart: () => void;
};

export const CardItem = memo(
  ({ item, onAddToCart, onDeleteItem, onEditItem, onShowDetailItem, isLoading }: CardItemProps) => {
    const { name, description, price, image } = item;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Flex pos='relative'>
        <Card>
          <CardBody role='group'>
            <Image src={image} alt='card-item' />
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
              top='160px'
              right='20px'
              _groupHover={{ display: 'flex' }}
              display='none'
              flexDir='column'
              alignItems='center'
              gap='10px'
            >
              <Button w='202px' h='48px' onClick={onAddToCart}>
                Add to cart
              </Button>

              <Flex gap='35px' zIndex={50} justifyContent='center'>
                <Flex alignItems='baseline'>
                  <IconButton
                    variant='unstyled'
                    aria-label='delete-card'
                    data-testid='delete-btn'
                    icon={<DeleteIcon />}
                    rounded='xs'
                    onClick={onOpen}
                    color='white'
                  />
                  <Text color='white'>Delete</Text>

                  <IconButton
                    aria-label='edit-card'
                    data-testid='edit-btn'
                    icon={<EditIcon />}
                    rounded='xs'
                    variant='unstyled'
                    onClick={onEditItem}
                    color='white'
                  />
                  <Text color='white'>Edit</Text>

                  <IconButton
                    aria-label='info-card'
                    data-testid='detail-btn'
                    icon={<InfoIcon />}
                    rounded='xs'
                    variant='unstyled'
                    onClick={onShowDetailItem}
                    color='white'
                  />
                  <Text color='white'>Detail</Text>
                </Flex>
              </Flex>
            </Flex>
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
        <ConfirmModal
          isOpen={isOpen}
          title='Delete Confirmation'
          textCancel='Cancel'
          textSubmit='Yes, Delete'
          text='Are you sure you want to delete this item?'
          onClose={onClose}
          onSubmit={onDeleteItem}
          isLoading={isLoading}
        />
      </Flex>
    );
  },
);
