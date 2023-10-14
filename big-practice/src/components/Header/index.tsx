import { Box, Container, Flex, HStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

// Images
import { FurniroLogo } from '@assets/photos/logo';
import { AccountIcon, SearchIcon, HeartIcon, ShoppingCartIcon } from '@assets/icons';

// Constants
import { ROUTES, MENU } from '@constants';

// Components
import Menu from '@components/Menu';
import { useCartStore } from '@stores';

const Header = () => {
  const [cart] = useCartStore((state) => [state.cart], shallow);

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
            <Box pos='relative'>
              <Link to={ROUTES.SHOPPING_CART}>
                <ShoppingCartIcon />

                {cart.length > 0 && (
                  <Box
                    pos='absolute'
                    color='gray.600'
                    bg='yellow.250'
                    rounded='50%'
                    w='20px'
                    h='19px'
                    textAlign='center'
                    top='15px'
                    left='14px'
                    fontSize='xs'
                  >
                    {cart.length}
                  </Box>
                )}
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
