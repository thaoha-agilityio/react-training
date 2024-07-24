// Mocks
import { USERS } from '@/mocks';

// Utils
import { getNameById } from '../users';

describe('getNameById', () => {
  it('returns the full name of a user by their ID', () => {
    const userId = 2;
    const fullName = getNameById(USERS, userId);

    // Check if the returned full name matches the expected value
    expect(fullName).toBe('Jane Smith');
  });
});
