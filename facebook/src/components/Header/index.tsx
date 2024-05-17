import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import {
  Container,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from '@chakra-ui/react';

// Components
import { FacebookIcon, MenuIcon, MessageIcon, NotificationIcon, SearchIcon } from '../Icons';
import Logout from '../Logout';

// Constants
import { ICON_LINKS, QUERY_KEYS, ROUTES } from '@/constants';

// Stores
import { useAuthStore } from '@/stores';

const Header = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Auth store
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const handleLogout = useCallback(() => {
    clearAuth();
    navigate(ROUTES.SIGN_IN);
    queryClient.removeQueries(QUERY_KEYS.POSTS);
  }, [clearAuth, navigate, queryClient]);

  return (
    <HStack
      as='header'
      px='15px'
      py='10px'
      boxShadow='0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'
    >
      <Flex alignItems='center' gap='15px'>
        <Link href='/' aria-label='facebook'>
          <FacebookIcon />
        </Link>
        <InputGroup>
          <InputLeftElement pointerEvents='none' top='-3px'>
            <SearchIcon />
          </InputLeftElement>
          <Input
            variant='filled'
            h='40px'
            w='212px'
            placeholder='Search Facebook'
            name='search-facebook'
          />
        </InputGroup>
      </Flex>

      <Container>
        <Flex justifyContent='space-between'>
          {ICON_LINKS.map((link, index) => {
            const { href, icon } = link || {};
            const LinkIcon = icon;

            return (
              <Link key={`${index}-${href}`} href={href} aria-label='icon-link'>
                <LinkIcon />
              </Link>
            );
          })}
        </Flex>
      </Container>

      <Flex justifyContent='space-around' w='300px'>
        <IconButton aria-label='menu-btn' icon={<MenuIcon />} variant='icon' />
        <IconButton aria-label='message-btn' icon={<MessageIcon />} variant='icon' />
        <IconButton aria-label='notify-btn' icon={<NotificationIcon />} variant='icon' />
        <Logout onLogout={handleLogout} />
      </Flex>
    </HStack>
  );
};

export default Header;
