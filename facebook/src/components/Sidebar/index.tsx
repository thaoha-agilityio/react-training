import { memo } from 'react';
import { Stack, Text, Flex, Link, Divider, ListItem, UnorderedList, Box } from '@chakra-ui/react';

// Constants
import { FOOTER_SIDEBAR_LINKS, SIDEBAR_LINKS } from '@/constants';

// Components
import { UserProfile } from '..';

interface SidebarProps {
  userName: string;
}

const Sidebar = memo(({ userName }: SidebarProps) => (
  <Stack minH={`calc(100vh - 56px)`} w='300px' bg='secondary' px='10px' py='20px'>
    <Stack spacing='17px'>
      <UserProfile userName={userName} />
      <Stack spacing='15px'>
        {SIDEBAR_LINKS.map((link) => {
          const { href, icon, label } = link || {};
          const LinkIcon = icon;

          return (
            <Flex gap='15px' alignItems='center' key={label}>
              <Link href={href}>
                <LinkIcon />
              </Link>
              <Text fontWeight='medium'>{label}</Text>
            </Flex>
          );
        })}
      </Stack>
    </Stack>

    <Box flex={1}>
      <Divider />
    </Box>

    <Flex>
      <UnorderedList gap='5px' display='flex' flexWrap='wrap' styleType='none'>
        {FOOTER_SIDEBAR_LINKS.map(({ href, label }) => (
          <ListItem>
            <Link key={label} href={href} variant='helper'>
              {label}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  </Stack>
));

export default Sidebar;
