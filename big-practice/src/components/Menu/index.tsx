import { memo } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

// Types
import { IMenuItem } from '@types';

type MenuProps = {
  menu: IMenuItem[];
};

export const Menu = memo(({ menu }: MenuProps) => (
  <UnorderedList display='flex' listStyleType='none' gap={{ base: '10px', md: '25px' }}>
    {menu.map((item) => (
      <ListItem key={item.title}>
        <Link to={item.path}>
          <Text fontSize={{ base: 'xs', md: 'sm' }} color='gray.600'>
            {item.title}
          </Text>
        </Link>
      </ListItem>
    ))}
  </UnorderedList>
));
