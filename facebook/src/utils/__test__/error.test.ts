// Utils
import { getAPIErrorMessage } from '../error';

// Constants
import { ERROR_MESSAGES } from '@/constants';

describe('getAPIErrorMessage', () => {
  it('returns the default error message when provided error is not an AxiosError', () => {
    // Mock a non-Axios error
    const nonAxiosError = new Error('Test error');

    const errorMessage = getAPIErrorMessage(nonAxiosError);

    expect(errorMessage).toBe(ERROR_MESSAGES.DEFAULT_API_ERROR);
  });
});
