/**
 * Extracts the IDs from an array of objects.
 * @param {T[]} array - The array of objects, where each object has an `id` property.
 * @returns {number[]} - An array of IDs.
 */
export const getIdsFromList = <T extends { id: string }>(
  array: T[],
): number[] => array.map((item) => +item.id);
