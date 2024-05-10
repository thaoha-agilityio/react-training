import { User } from '@/types';

/**
 * Retrieves the full name associated with the specified user ID from the given array of users.
 * @param items The array of users to search.
 * @param userId The ID of the user to retrieve the full name for.
 * @returns The full name of the user with the specified ID, or an empty string if not found.
 */
export const getNameById = (items: User[], userId: number) => {
  const item = items.find((item) => item.id === userId);

  return item ? `${item.firstName} ${item.surname}` : '';
};
