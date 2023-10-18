import { memo } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

// Images
import hero from '@assets/photos/hero.png';
import heroWepb from '@assets/photos/hero.webp';

export const Hero = memo(
  (): JSX.Element => (
    <Box as='section' pos='relative' h={{ base: '500px', md: '1070px' }}>
      <Box
        bgImage={[`url(${hero})`, `url(${heroWepb})`]}
        bgSize='cover'
        w='100%'
        height='100%'
        bgPos='center'
      ></Box>

      <Box
        w={{ base: '300px', md: '643px' }}
        h={{ base: '250px', md: '443px' }}
        borderRadius='md'
        bg='yellow.200'
        border='1px solid'
        pos='absolute'
        transform={{ base: 'translateX(-50%)', lg: 'translateX(0%)' }}
        left='50%'
        top='37%'
      >
        <Box pl='40px' pt={{ base: '25px', md: '62px' }}>
          <Text
            textTransform='uppercase'
            letterSpacing='3px'
            fontSize='sm'
            color='gray.500'
            fontWeight='bold'
          >
            new arrival
          </Text>
          <Heading
            textTransform='capitalize'
            color='yellow.250'
            textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
            fontWeight='bolder'
            fontSize={{ base: 'xxl', md: '5xl' }}
          >
            discover our new collection
          </Heading>
          <Text
            variant='primary'
            fontWeight='bold'
            lineHeight='sm'
            pt='17px'
            py={{ base: '10px', md: '36px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis.
          </Text>
          <Button
            variant='solid'
            textTransform='uppercase'
            fontWeight='bolder'
            w={{ base: '100px', md: '222px' }}
            h={{ base: '30px', md: '74px' }}
            fontSize={{ base: 'tiny', md: 'base' }}
          >
            buy now
          </Button>
        </Box>
      </Box>
    </Box>
  ),
);
