// Get ids from list
export const getIdsFromList = <T extends { id: string }>(array: T[]) =>
  array.map((item) => item.id);
