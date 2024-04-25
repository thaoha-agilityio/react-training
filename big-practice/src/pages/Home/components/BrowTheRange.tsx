import { memo } from 'react';
import { Box, Heading, Text, Image, Flex, Stack } from '@chakra-ui/react';

//Images
import dining from '@assets/photos/dining.jpg';
import bedroom from '@assets/photos/bedroom.jpg';
import living from '@assets/photos/living.jpg';

export const BrowTheRange = memo(
  (): JSX.Element => (
    <Box as='section'>
      <Box textAlign='center' textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'} mt='40px'>
        <Heading
          as='h3'
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight='bold'
          color='secondary.500'
        >
          Browse The Range
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} color='secondary.200'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Box>
      <Flex
        fontSize='lg'
        color='secondary.500'
        mt='40px'
        gap='20px'
        justify='center'
        wrap={{ base: 'wrap', md: 'nowrap' }}
        textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
      >
        <Stack textAlign='center'>
          <Box w='381px' h='480px'>
            <Image src={dining} borderRadius='xl' alt='dining' w='100%' h='100%' />
          </Box>
          <Text>Dining</Text>
        </Stack>
        <Stack textAlign='center'>
          <Box w='375px' h='480px'>
            <Image src={bedroom} borderRadius='xl' alt='bedroom' w='100%' h='100%' />
          </Box>
          <Text>Bedroom</Text>
        </Stack>
        <Stack textAlign='center'>
          <Box w='381px' h='480px'>
            <Image src={living} borderRadius='xl' alt='living' w='100%' h='100%' />
          </Box>
          <Text>Living</Text>
        </Stack>
      </Flex>
    </Box>
  ),
);
