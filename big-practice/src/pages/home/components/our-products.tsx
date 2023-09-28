import { Button, Flex, Heading, Stack } from '@chakra-ui/react';

export const OurProducts = () => {
  return (
    <section>
      <Stack my='50px' justifyContent='center'>
        <Heading
          as='h3'
          fontSize={{ base: 'lg', md: '3xl' }}
          color='gray.250'
          fontWeight='bolder'
          textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
          textAlign='center'
        >
          Our Products
        </Heading>
        <Flex pt='32px' gap='32px' wrap='wrap' justifyContent='center'>
          {/* TODO: update latter */}
        </Flex>
        <Flex pt='32px' justifyContent='center'>
          <Button w='245px' h='48px'>
            Show More
          </Button>
        </Flex>
      </Stack>
    </section>
  );
};
