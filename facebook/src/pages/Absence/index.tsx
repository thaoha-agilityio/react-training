import { Box, Divider, Flex, Link, Stack, Image, Text } from '@chakra-ui/react';

// Mock data to match design
const Absence = () => (
  <Stack spacing='15px' my='16px' p='10px' w='300px'>
    <Flex alignItems='center' gap='15px'>
      <Image
        src='https://cdn.eva.vn/upload/1-2023/images/2023-03-13/con-gai-thieu-gia-nganh-may-mac-va-hotgirl-ha-thanh-la-the-luc-nhi-sieu-hot-lap-ky-luc-chua-tung-co--312664461_5569265269788525_490616098331863877_n-1678699659-789-width780height780.jpg'
        w='131px'
        h='131px'
        borderRadius='md'
        alt='ads'
      />
      <Box>
        <Text>ICC Officials</Text>

        <Link href='#' variant='helper' aria-label='officials'>
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
        alt='ads'
      />
      <Box>
        <Text>Pamela Officials</Text>

        <Link href='#' variant='helper' aria-label='officials'>
          @pamyeuoi_officials
        </Link>
      </Box>
    </Flex>
    <Divider />
  </Stack>
);

export default Absence;
