import { memo } from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

// Images
import adverse from '@assets/photos/adverse.png';

export const Adverse = memo(
  (): JSX.Element => (
    <Box my='50px' as='section'>
      <Flex justifyContent='center'>
        <Heading
          as='h3'
          fontWeight='bolder'
          fontSize={{ base: 'lg', md: '3xl' }}
          lineHeight='48px'
          textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
          wordBreak='break-word'
          textAlign='center'
          w='240px'
        >
          #FuniroFurniture
        </Heading>
      </Flex>
      <Image src={adverse} alt='adverse' />
    </Box>
  ),
);
