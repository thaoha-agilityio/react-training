export interface IComment {
  id: number;
  author: number;
  postId: number;
  content: string;
  likes: number[] | [];
}

export type CommentPayload = Omit<IComment, 'id' | 'likes'>;
