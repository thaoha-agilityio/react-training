export interface IPost {
  id: number;
  content: string;
  author: number;
  image?: string;
  likes: number[];
  totalComments: number;
}

export type PostPayload = Pick<IPost, 'content' | 'image'>;
