import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { IMenuItem } from '@types';

type MenuProps = {
  menu: IMenuItem[];
};

export const Menu = ({ menu }: MenuProps) => (
  <UnorderedList display='flex' listStyleType='none' gap='25px'>
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
);
