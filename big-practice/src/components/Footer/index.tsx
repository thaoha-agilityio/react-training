import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Divider, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react';

// Constants
import { MENU, HELPS, PLACEHOLDER_MESSAGE } from '@constants';

const Footer = (): JSX.Element => (
  <Box as='footer'>
    <Divider />
    <Container display='flex' gap='48px' flexDir='column' pt='48px' pb='35px'>
      <Flex
        justifyContent='space-between'
        fontSize={{ base: 'xs', md: 'sm' }}
        fontWeight='medium'
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Stack>
          <Heading fontSize={{ base: 'base', md: 'lg' }} fontWeight='bolder'>
            Furniro.
          </Heading>
          <Text color='secondary.100' maxW='285px' mt='50px'>
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </Text>
        </Stack>
        <Flex flexDir={{ base: 'column', md: 'row' }} gap='50px'>
          <Stack mt={{ base: '20px', md: 'none' }}>
            <Text color='secondary.100'>Links</Text>
            <Stack mt='55px' gap='46px'>
              {MENU.map((item) => (
                <Link to={item.path} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack mt={{ base: '20px', md: 'none' }}>
            <Text color='secondary.100'>Helps</Text>
            <Stack mt='55px' gap='46px'>
              {HELPS.map((item) => (
                <Link to={item.path} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Flex>

        <Stack mt={{ base: '20px', md: 'none' }} w='25%'>
          <Text color='secondary.100'>Newsletter</Text>
          <Flex mt='55px' gap='46px' flexDir={{ base: 'column', md: 'row' }}>
            <Box>
              <Input
                placeholder={PLACEHOLDER_MESSAGE.NEWSLETTER}
                border='none'
                w={{ base: '100px', md: '200px' }}
                h='24px'
                pl='-1.5'
                _focusVisible={{ border: 'none' }}
              />
              <Divider h='1px' color='secondary.600' />
            </Box>
            <Box borderBottom='1px'>
              <Link to='/'>SUBSCRIBE</Link>
            </Box>
          </Flex>
        </Stack>
      </Flex>
      <Divider />
      <Text fontSize={{ base: 'xs', md: 'sm' }}>2023 furniro. All rights reverved</Text>
    </Container>
  </Box>
);

export default memo(Footer);
