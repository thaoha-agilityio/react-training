export const QUERY_KEYS = {
  POSTS: ['posts'],
  POST: (postId: number) => ['post', postId],
  USERS: ['users'],
  COMMENTS: ['comments'],
  COMMENTS_BY_POST_ID: (postId: number) => ['comments', postId],
};
