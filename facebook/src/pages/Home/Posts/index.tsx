import { Suspense, lazy, useCallback, useState } from 'react';
import { Stack, Text, useDisclosure } from '@chakra-ui/react';

// Components
import { LoadingIndicator, Post, PostSkeleton } from '@/components';

// Hooks
import { useGetCommentByPostId, useGetPostsByAuthor, useGetUsers } from '@/hooks';

// Utils
import { getNameById } from '@/utils';

// Constants
import { NOTICE_MESSAGE } from '@/constants';

// Types
import { IPost } from '@/types';

const PostModal = lazy(() => import('@/components/Modal/PostModal'));

const Posts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState<IPost>();

  // Custom hooks
  const { data: posts, isLoading: isPostLoading } = useGetPostsByAuthor();
  const { data: users } = useGetUsers();
  const { data: comments } = useGetCommentByPostId(selectedPost ? selectedPost.id : -1);

  const handleShowComment = useCallback(
    (post: IPost) => {
      setSelectedPost(post);
      onOpen();
    },
    [onOpen],
  );

  if (isPostLoading) return <PostSkeleton />;

  return (
    <Stack w='full' borderRadius='md' spacing='20px'>
      {posts.length ? (
        posts.map((post) => {
          const { id, author } = post || {};

          return (
            <Post
              post={post}
              key={id}
              userName={getNameById(users, author)}
              onShowComment={handleShowComment}
            />
          );
        })
      ) : (
        <Text>{NOTICE_MESSAGE}</Text>
      )}

      {isOpen && selectedPost && (
        <Suspense fallback={<LoadingIndicator />}>
          <PostModal
            isOpen={isOpen}
            post={selectedPost}
            comments={comments}
            onClose={onClose}
            userName={getNameById(users, selectedPost.author)}
          />
        </Suspense>
      )}
    </Stack>
  );
};

export default Posts;
