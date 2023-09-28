import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';

import hero from '@assets/photos/hero.png';

export const Hero = () => (
  <section>
    <Box pos='relative'>
      <Image src={hero} w='100%' />
    </Box>
    <Box w='643px' h='443px' borderRadius='md' bg='yellow.200' border='1px solid' pos='absolute'>
      <Box pl='40px' pt='62px'>
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
          as='h1'
          textTransform='capitalize'
          color='yellow.250'
          textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
          fontWeight='bolder'
          fontSize={{ base: '', md: '4xl' }}
        >
          discover our new collection
        </Heading>
        <Text fontWeight='bold' fontSize='base' lineHeight='sm' pt='17px' py='36px'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </Text>
        <Button textTransform='uppercase' fontWeight='bolder' variant='solid' w='222px' h='74px'>
          buy now
        </Button>
      </Box>
    </Box>
  </section>
);
