import { shallow } from 'zustand/shallow';
import { memo } from 'react';
import { Container, Flex, HStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Images
import { FurniroLogo } from '@assets/icons/logo';
import { AccountIcon, SearchIcon, HeartIcon } from '@assets/icons';

// Constants
import { MENU } from '@constants';

// Components
import Menu from '@components/Menu';
import ShoppingCart from '@components/ShoppingCart';

// Stores
import { useCartStore } from '@stores';

const Header = (): JSX.Element => {
  const [cart] = useCartStore((state) => [state.cart], shallow);

  return (
    <Container as='header'>
      <Flex justifyContent='space-between' alignItems='center' py='30px'>
        <Flex>
          <Link to='/'>
            <HStack spacing='5px'>
              <FurniroLogo />
              <Heading
                as='h1'
                fontSize={{ base: 'lg', md: '3xl' }}
                textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
              >
                Furniro
              </Heading>
            </HStack>
          </Link>
        </Flex>

        <Menu menu={MENU} />

        <HStack spacing={{ base: '15px', md: '45px' }} display={{ base: 'none', md: 'flex' }}>
          <Link to='/' aria-label='Account'>
            <AccountIcon />
          </Link>
          <Link to='/' aria-label='Search'>
            <SearchIcon />
          </Link>
          <Link to='/' aria-label='Heart'>
            <HeartIcon />
          </Link>
          <ShoppingCart numberOfItems={cart.length} />
        </HStack>
      </Flex>
    </Container>
  );
};

export default memo(Header);
