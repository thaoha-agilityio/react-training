import { Suspense, lazy, useCallback, useState } from 'react';
import { Stack, Text, useDisclosure } from '@chakra-ui/react';

// Components
import { LoadingIndicator, Post, PostSkeleton } from '@/components';

// Hooks
import { useGetCommentByPostId, useGetPostsByAuthor, useLikePost } from '@/hooks';

// Constants
import { NOTICE_MESSAGE } from '@/constants';

// Types
import { IPost } from '@/types';

const PostModal = lazy(() => import('@/components/Modal/PostModal'));

const Posts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState<IPost>();
  const [selectedPostId, setSelectedPostId] = useState<number>();

  // Custom hooks
  const { data: posts, isLoading: isPostLoading } = useGetPostsByAuthor();
  const { data: comments, isLoading: isCommentLoading } = useGetCommentByPostId(
    selectedPost ? selectedPost.id : -1,
  );

  // Update post data when user click like button
  const { mutate: updatePost } = useLikePost(selectedPostId ? selectedPostId : -1);

  const handleShowComment = useCallback(
    (post: IPost) => {
      setSelectedPost(post);
      onOpen();
    },
    [onOpen],
  );

  const handleLikePost = useCallback(
    (likes: number[], id: number) => {
      setSelectedPostId(id);
      updatePost({ likes: likes });
    },
    [updatePost],
  );

  if (isPostLoading) return <PostSkeleton />;

  return (
    <Stack w='full' borderRadius='md' spacing='20px'>
      {posts.length ? (
        posts.map((post) => {
          const { id } = post || {};

          return (
            <Post
              post={post}
              key={id}
              onShowComment={handleShowComment}
              onLikePost={handleLikePost}
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
            isCommentLoading={isCommentLoading}
            post={selectedPost}
            comments={comments}
            onClose={onClose}
            onLikePost={handleLikePost}
          />
        </Suspense>
      )}
    </Stack>
  );
};

export default Posts;
