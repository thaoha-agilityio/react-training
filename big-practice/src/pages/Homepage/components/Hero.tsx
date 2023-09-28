import { Box, Button, Heading, Text } from '@chakra-ui/react';

// Images
import banner from '@assets/photos/banner.png';
import bannerWepb from '@assets/photos/banner.webp';

export const Hero = () => (
  <section>
    <Box pos='relative' h={{ base: '500px', md: '1070px' }}>
      <Box
        bgImage={[`url(${banner})`, `url(${bannerWepb})`]}
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
        right='23%'
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
            fontWeight='bold'
            lineHeight='sm'
            pt='17px'
            py={{ base: '10px', md: '36px' }}
            fontSize={{ base: 'xs', md: 'base' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis.
          </Text>
          <Button
            textTransform='uppercase'
            fontWeight='bolder'
            variant='solid'
            w={{ base: '100px', md: '222px' }}
            h={{ base: '30px', md: '74px' }}
            fontSize={{ base: 'tiny', md: 'base' }}
          >
            buy now
          </Button>
        </Box>
      </Box>
    </Box>
  </section>
);
