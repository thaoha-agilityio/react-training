import { Box, Container, Divider, Flex, Heading, Input, Link, Stack, Text } from '@chakra-ui/react';
import { PLACEHOLDER_MESSAGE } from '@constants';

export const Footer = () => {
  return (
    <footer>
      <Divider />
      <Container maxW='1240px'>
        <Flex pt='48px' justifyContent='space-between'>
          <Stack>
            <Heading fontSize={{ base: 'base', md: 'lg' }} fontWeight='bolder'>
              Funiro.
            </Heading>
            <Text color='gray.100' fontSize={{ base: 'xs', md: 'sm' }} maxW='285px' mt='50px'>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </Text>
          </Stack>
          <Stack fontSize={{ base: 'xs', md: 'sm' }} fontWeight='medium'>
            <Text color='gray.100'>Links</Text>
            <Stack mt='55px' gap='46px'>
              <Text>Home</Text>
              <Text>Shop</Text>
              <Text>About</Text>
              <Text>Contact</Text>
            </Stack>
          </Stack>
          <Stack fontSize={{ base: 'xs', md: 'sm' }} fontWeight='medium'>
            <Text color='gray.100'>Helps</Text>
            <Stack mt='55px' gap='46px'>
              <Text>Payment Options</Text>
              <Text>Returns</Text>
              <Text>Privacy Policies</Text>
            </Stack>
          </Stack>
          <Stack fontSize={{ base: 'xs', md: 'sm' }} fontWeight='medium'>
            <Text color='gray.100'>Newsletter</Text>
            <Flex mt='55px' gap='46px'>
              <Box>
                <Input
                  placeholder={PLACEHOLDER_MESSAGE.NEWSLETTER}
                  border='none'
                  w='200px'
                  h='24px'
                  _focusVisible={{ border: 'none' }}
                />
                <Divider ml='20px' h='1px' color='gray.600' />
              </Box>
              <Link borderBottom='1px' _hover={{ pt: '0px' }}>
                SUBSCRIBE
              </Link>
            </Flex>
          </Stack>
        </Flex>
        <Divider pt='48px' />
        <Text fontSize={{ base: 'xs', md: 'sm' }} pt='35px'>
          2023 furino. All rights reverved
        </Text>
      </Container>
    </footer>
  );
};
