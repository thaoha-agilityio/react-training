interface IBook {
  id: Readonly<string>;
  name: string;
  avatar: string;
  author: string;
  description?: string;
  published: string;
  publisher?: string;
}

export type { IBook };
