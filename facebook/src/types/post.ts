export interface IPost {
  id: number;
  content: string;
  author: number;
  image?: string;
  likes: string[] | [];
  comments: string[] | [];
}

export type PostPayload = Pick<IPost, 'content' | 'image'>;
