interface IBook {
  id: Readonly<string>;
  name: string;
  avatar: string;
  author: string;
  description: string;
  published: string;
  publisher: string;
}

type BookRequire = Omit<IBook, 'description' | 'publisher'>;
export type { IBook, BookRequire };
