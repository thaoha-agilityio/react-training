import { Flex, HStack, Link, Heading } from '@chakra-ui/react';

import FurniroLogo from '@assets/photos/logo';

export const Header = () => {
  return (
    <header>
      <Flex>
        <Flex>
          <Link href='/'>
            <HStack spacing='5px'>
              <FurniroLogo />
              <Heading as='h2' fontSize='2xl'>
                Furniro
              </Heading>
            </HStack>
          </Link>
        </Flex>
      </Flex>
    </header>
  );
};
