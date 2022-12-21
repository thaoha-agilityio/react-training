// Get ids from list
export const getIdsFromList = <T extends { id: string }>(books: T[]) =>
  books.map((item) => item.id);
