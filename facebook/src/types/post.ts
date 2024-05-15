export interface IPost {
  id: number;
  content: string;
  authorId: number;
  authorName: string;
  image?: string;
  likes: number[];
  totalComments: number;
}

export type PostPayload = Omit<IPost, 'id' | 'authorId'>;

export type LikePostPayload = Pick<IPost, 'likes'>;
