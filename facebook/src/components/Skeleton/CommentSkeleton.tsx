import { Box, Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const CommentSkeleton = () => (
  <Box>
    {Array.from({ length: 2 }, (_, index) => (
      <Box key={index}>
        <Flex
          padding='6'
          bg='white'
          w='full'
          mt='15px'
          gap='10px'
          alignItems='baseline'
        >
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={1} spacing='1' skeletonHeight='10' w='full' />
        </Flex>
      </Box>
    ))}
  </Box>
);

export default CommentSkeleton;
