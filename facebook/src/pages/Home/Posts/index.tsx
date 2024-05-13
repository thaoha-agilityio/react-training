import { Stack, Text } from '@chakra-ui/react';

// Components
import { Post, PostSkeleton } from '@/components';

// Hooks
import { useGetPostsByAuthor, useGetUsers } from '@/hooks';

// Utils
import { getNameById } from '@/utils';

// Constants
import { NOTICE_MESSAGE } from '@/constants';

const Posts = () => {
  const { data: posts, isLoading: isPostLoading } = useGetPostsByAuthor();
  const { data: users } = useGetUsers();

  if (isPostLoading) return <PostSkeleton />;

  return (
    <Stack w='full' borderRadius='md' spacing='20px'>
      {posts.length ? (
        posts.map((post) => {
          const { id, author } = post || {};

          return <Post post={post} key={id} userName={getNameById(users, author)} />;
        })
      ) : (
        <Text>{NOTICE_MESSAGE}</Text>
      )}
    </Stack>
  );
};

export default Posts;
