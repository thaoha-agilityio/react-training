import { IBook } from '@/types/book';

// Filter ids in array
export const filterId = (books: IBook[]) => {
  const ids: string[] = [];
  books.map((item) => {
    if (item.id) ids.push(item.id);
  });

  return ids;
};
