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
import {
  ChevronDownIcon,
  FacebookIcon,
  MenuIcon,
  MessageIcon,
  NotificationIcon,
  SearchIcon,
} from '../Icons';

// Constants
import { ICON_LINKS } from '@/constants';

const Header = () => (
  <HStack as='header' p='8px' boxShadow='0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'>
    <Flex alignItems='center' gap='15px'>
      <Link href='/'>
        <FacebookIcon />
      </Link>
      <InputGroup>
        <InputLeftElement pointerEvents='none' top='-3px'>
          <SearchIcon />
        </InputLeftElement>
        <Input variant='filled' h='40px' w='212px' />
      </InputGroup>
    </Flex>

    <Container>
      <Flex justifyContent='space-between'>
        {ICON_LINKS.map((link, index) => {
          const { href, icon } = link || {};
          const LinkIcon = icon;

          return (
            <Link key={`${index}-${href}`} href={href}>
              <LinkIcon />
            </Link>
          );
        })}
      </Flex>
    </Container>

    <Flex justifyContent='space-between' gap='10px'>
      <IconButton aria-label='menu-btn' icon={<MenuIcon />} variant='icon' />
      <IconButton aria-label='message-btn' icon={<MessageIcon />} variant='icon' />
      <IconButton aria-label='notify-btn' icon={<NotificationIcon />} variant='icon' />
      <IconButton aria-label='menu-btn' icon={<ChevronDownIcon />} variant='icon' />
    </Flex>
  </HStack>
);

export default Header;
