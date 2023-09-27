import { Flex, HStack, Link, Image, Heading } from '@chakra-ui/react';

import logo from '@assets/photos/logo.png';

export const Header = () => {
  return (
    <header>
      <Flex>
        <Flex>
          <Link href='/'>
            <HStack spacing='5px'>
              <Image alt='logo' src={logo} />
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
