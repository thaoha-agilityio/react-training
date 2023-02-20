interface IBook {
  id: Readonly<string>;
  name: string;
  avatar: string;
  author: string;
  description?: string;
  published: number;
  publishers?: string;
  categoryId?: string;
}

export type { IBook };
