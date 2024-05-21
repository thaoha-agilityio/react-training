export interface IComment {
  id: number;
  authorId: number;
  authorName: string;
  postId: number;
  content: string;
  likes: number[];
}

export type CommentPayload = Omit<IComment, 'id'>;

export type LikeCommentPayload = Pick<IComment, 'likes'>;
