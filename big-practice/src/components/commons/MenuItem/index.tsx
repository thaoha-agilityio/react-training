import { Link, Text } from '@chakra-ui/react';

type MenuItemProps = {
  text: string;
  to?: string;
};

export const MenuItem = ({ text, to = '/' }: MenuItemProps) => (
  <Link href={to}>
    <Text fontSize={{ base: 'xs', md: 'sm' }} color='gray.600'>
      {text}
    </Text>
  </Link>
);
