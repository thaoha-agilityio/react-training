import { Flex, HStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { FurniroLogo } from '@assets/photos/logo';
import { AccountIcon, SearchIcon, HeartIcon, ShoppingCartIcon } from '@assets/icons';
import { MENU } from '@constants/menu';
import { Menu } from '@components/Menu';

export const Header = () => {
  return (
    <header>
      <Flex justifyContent='space-between' alignItems='center'>
        <Flex>
          <Link to='/'>
            <HStack spacing='5px'>
              <FurniroLogo />
              <Heading as='h2' fontSize={{ base: 'xxl', md: '2xl' }}>
                Furniro
              </Heading>
            </HStack>
          </Link>
        </Flex>

        <Menu menu={MENU} />

        <HStack spacing='45px'>
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
    </header>
  );
};
