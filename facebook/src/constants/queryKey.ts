export const QUERY_KEYS = {
  POSTS: ['posts'],
  USERS: ['users'],
  COMMENTS: ['comments'],
  COMMENTS_BY_POST_ID: (postId: number) => ['comments', postId],
};
