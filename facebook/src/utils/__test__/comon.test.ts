import { filterItem } from '../common';

describe('common function', () => {
  it('should return an empty array if input array is empty', () => {
    const inputArray: number[] = [];
    const result = filterItem(inputArray, 1);
    expect(result).toEqual([]);
  });

  it('should return the original array if id is not found', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = filterItem(inputArray, 6);
    expect(result).toEqual(inputArray);
  });
});
