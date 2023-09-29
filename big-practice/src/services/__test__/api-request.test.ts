import axios from 'axios';
import { api } from '../api-request';

jest.mock('axios');

describe('get function', () => {
  it('fetches successfully data from an API', async () => {
    // Mock Axios GET request to return a successful response
    (axios.get as jest.Mock).mockResolvedValue({ status: 200, data: 'test data' });

    const result = await api.getData('/products');

    expect(result).toEqual('test data');
  });

  it('handles an error when fetching data from an API', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await api.getData('/products');
    } catch (error) {
      expect((error as { message: string }).message).toBe(errorMessage);
    }
  });
});
