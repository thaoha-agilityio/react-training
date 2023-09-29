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
    (axios.get as jest.Mock).mockRejectedValue({ message: 'Network Error' });

    try {
      await api.getData('/products');
    } catch (error) {
      // Check if the error is an AxiosError
      if (axios.isAxiosError(error)) {
        // You can access AxiosError properties here
        expect(error.message).toEqual('Network Error');
      }
    }
  });
});
