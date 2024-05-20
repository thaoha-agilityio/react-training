import { Box, Divider, Flex, Link, Stack, Image, Text } from '@chakra-ui/react';
import { ADS } from '@/mocks';

// Mock data to match design
const Advertisement = () => (
  <Stack spacing='15px' my='16px' p='10px' w='300px'>
    {ADS.map(({ textLink, label, img }) => (
      <Flex alignItems='center' gap='15px' key={label}>
        <Image src={img} w='131px' h='131px' borderRadius='md' alt='ads' objectFit='cover' />
        <Box>
          <Text>{label}</Text>

          <Link href='#' variant='helper' aria-label='officials'>
            {textLink}
          </Link>
        </Box>
      </Flex>
    ))}
    <Divider />
  </Stack>
);

export default Advertisement;
