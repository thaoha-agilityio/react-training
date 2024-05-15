// Use the indexOf method to check if the item exists in the array
// indexOf returns the index of the first occurrence of the specified item in the array, or -1 if it is not found
export const checkItemInArray = (array: number[], item: number) => {
  if (!array) return false;

  return array.indexOf(item) !== -1;
};
