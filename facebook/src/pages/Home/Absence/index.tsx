import { Box, Divider, Flex, Link, Stack, Image, Text } from '@chakra-ui/react';

// Mock data to match design
const Absence = () => (
  <Stack spacing='15px' my='16px' p='10px' w='300px'>
    <Flex alignItems='center' gap='15px'>
      <Image
        src='https://duan24h.net/wp-content/uploads/2023/10/pam-2.webp'
        w='131px'
        h='131px'
        borderRadius='md'
      />
      <Box>
        <Text>ICC Officials</Text>

        <Link href='#' variant='helper'>
          @icc_officials
        </Link>
      </Box>
    </Flex>
    <Flex alignItems='center' gap='15px'>
      <Image
        src='https://kenh14cdn.com/203336854389633024/2023/9/22/photo-18-1695382154012318071367.jpg'
        w='131px'
        h='131px'
        borderRadius='md'
        objectFit='cover'
      />
      <Box>
        <Text>Pamela Officials</Text>

        <Link href='#' variant='helper'>
          @pamyeuoi_officials
        </Link>
      </Box>
    </Flex>
    <Divider />
  </Stack>
);

export default Absence;
