// Get ids from list
export const getIdsFromList = <T extends { id: string }>(array: T[]): string[] =>
  array.map((item) => item.id);

// Find ids matches between two arrays
export const getListMatch = <T extends { id: string }>(firstArray: T[], secondArray: string[]) => {
  return firstArray.filter((item) => secondArray.indexOf(item.id) !== -1);
};
