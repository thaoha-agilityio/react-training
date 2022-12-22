interface IBook {
  id: Readonly<string>;
  name: string;
  avatar: string;
  author: string;
  description?: string;
  published: number;
  publisher?: string;
  categoryId?: string;
}

export type { IBook };
