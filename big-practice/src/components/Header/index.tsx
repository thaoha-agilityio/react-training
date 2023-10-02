import { Box, Container, Flex, HStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Images
import { FurniroLogo } from '@assets/photos/logo';
import { AccountIcon, SearchIcon, HeartIcon, ShoppingCartIcon } from '@assets/icons';

// Constants
import { MENU } from '@constants/menu';

// Components
import { Menu } from '@components/Menu';

export const Header = () => {
  return (
    <Box as='header'>
      <Container maxW='container.xl'>
        <Flex justifyContent='space-between' alignItems='center' py='30px'>
          <Flex>
            <Link to='/'>
              <HStack spacing='5px'>
                <FurniroLogo />
                <Heading as='h1' fontSize={{ base: 'xxl', md: '2xl' }}>
                  Furniro
                </Heading>
              </HStack>
            </Link>
          </Flex>

          <Menu menu={MENU} />

          <HStack spacing={{ base: '15px', md: '45px' }} display={{ base: 'none', md: 'flex' }}>
            <Link to='/'>
              <AccountIcon />
            </Link>
            <Link to='/'>
              <SearchIcon />
            </Link>
            <Link to='/'>
              <HeartIcon />
            </Link>
            <Link to='/'>
              <ShoppingCartIcon />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
