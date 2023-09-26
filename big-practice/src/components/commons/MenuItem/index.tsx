import { Link, Text } from '@chakra-ui/react';

type MenuItemProps = {
  text: string;
  to?: string;
};

export const MenuItem = ({ text, to = '/' }: MenuItemProps) => {
  return (
    <Link href={to}>
      <Text fontSize='sm' color='gray.600'>
        {text}
      </Text>
    </Link>
  );
};
