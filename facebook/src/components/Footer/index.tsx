import { Container, Divider, Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { FOOTER_LINKS, LOCALE_LINKS } from '@/constants';

const Footer = () => (
  <Stack>
    <Container size='md'>
      <UnorderedList gap='5px' display='flex'>
        {LOCALE_LINKS.map(({ href, label }) => (
          <ListItem>
            <Link key={label} href={href} variant='helper'>
              {label}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>

      <Divider />

      <UnorderedList gap='10px' display='flex' flexWrap='wrap'>
        {FOOTER_LINKS.map(({ href, label }) => (
          <ListItem>
            <Link key={label} href={href} variant='helper'>
              {label}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  </Stack>
);

export default Footer;
