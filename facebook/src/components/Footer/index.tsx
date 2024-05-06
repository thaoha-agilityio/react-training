import { Container, Divider, Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react';

// Constants
import { FOOTER_LINKS, LOCATION_LINKS } from '@/constants';

const Footer = () => (
  <Stack>
    <Container size='md'>
      <UnorderedList gap='5px' display='flex' styleType='none'>
        {LOCATION_LINKS.map(({ href, label }) => (
          <ListItem>
            <Link key={label} href={href} variant='helper'>
              {label}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>

      <Divider />

      <UnorderedList display='flex' flexWrap='wrap' styleType='none'>
        {FOOTER_LINKS.map(({ href, label }) => (
          <ListItem mr='8px'>
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
