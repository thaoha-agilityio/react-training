import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const PostSkeleton = () => (
  <Box>
    {Array.from({ length: 2 }, (_, index) => (
      <Box key={index}>
        <Flex
          padding='6'
          boxShadow='lg'
          bg='white'
          minH='500px'
          w='full'
          flexDir='column'
          justifyContent='space-between'
          mt='15px'
        >
          <Flex gap='20px' alignItems='center'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={2} spacing='2' skeletonHeight='2' w='120px' />
          </Flex>

          <Flex w='full' gap='20px' justifyContent='center'>
            <Skeleton height='10px' mt='10px' w='100px' />
            <Skeleton height='10px' mt='10px' w='100px' />
            <Skeleton height='10px' mt='10px' w='100px' />
          </Flex>
        </Flex>
      </Box>
    ))}
  </Box>
);

export default PostSkeleton;
