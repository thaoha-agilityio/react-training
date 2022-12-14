interface IBook {
  id: Readonly<string>;
  name: string;
  avatar: string;
  author: string;
  description?: string;
  published: string;
  publisher?: string;
  category?: string;
}

export type { IBook };
